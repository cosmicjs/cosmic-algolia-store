/* eslint-disable no-console */
require('dotenv').config({ path: './.env.production' });
const express = require('express');
const bodyParser = require('body-parser');
const corser = require('corser');
const next = require('next');
const routes = require('./routes');
const algoliasearch = require('algoliasearch');
const convertDataToAlgoliaObject = require('./utils/convertDataToAlgoliaObject');
const fetch = require('isomorphic-fetch');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handler = routes.getRequestHandler(app);

const client = algoliasearch(
  process.env.ALGOLIA_APPLICATION_ID,
  process.env.ALGOLIA_ADMIN_API_KEY,
);
const itemsIndex = client.initIndex('items');

const cosmicRestAPI = `https://api.cosmicjs.com/v1/${process.env.COSMIC_BUCKET}`;

app.prepare()
  .then(() => {
    const server = express();

    server.use(corser.create());
    server.use(bodyParser.json());

    // ---------- API endpoints for retrieving Cosmic JS Objects ----

    server.get('/api/brand/:id', (req, res) => {
      const { id } = req.params;
      return fetch(`${cosmicRestAPI}/objects?hide_metafields=true&limit=1&filters[_id]=${id}&type=brands`)
        .then(result => result.json())
        .then(json => res.send(json.objects[0].title))
        .catch(err => res.status(404).json({
          message: `Error fetching brand with id, ${id}`,
          error: err.message,
        }));
    });

    server.get('/api/category/:id', (req, res) => {
      const { id } = req.params;
      return fetch(`${cosmicRestAPI}/objects?hide_metafields=true&limit=1&filters[_id]=${id}&type=categories`)
        .then(result => result.json())
        .then(json => res.send(json.objects[0].title))
        .catch(err => res.status(404).json({
          message: `Error fetching category with id, ${id}`,
          error: err.message,
        }));
    });

    server.get('/api/tag/:id', (req, res) => {
      const { id } = req.params;
      return fetch(`${cosmicRestAPI}/objects?hide_metafields=true&limit=1&filters[_id]=${id}&type=tags`)
        .then(result => result.json())
        .then(json => res.send(json.objects[0].title))
        .catch(err => res.status(404).json({
          message: `Error fetching tag with id, ${id}`,
          error: err.message,
        }));
    });

    // ---------- API endpoints for synchronizing Algolia -----------

    server.post('/api/algolia/create', (req, res) => {
      const { data } = req.body;
      if (data.type_slug === 'items') {
        const algoliaObject = convertDataToAlgoliaObject(data);
        itemsIndex.addObject(algoliaObject)
          .catch(err => console.error(err));
      }
      res.status(200).send();
    });

    server.post('/api/algolia/edit', (req, res) => {
      const { data } = req.body;
      if (data.type_slug === 'items') {
        const algoliaObject = convertDataToAlgoliaObject(data);
        itemsIndex.addObject(algoliaObject)
          .catch(err => console.error(err));
      }
      res.status(200).send();
    });

    server.post('/api/algolia/delete', (req, res) => {
      const { data } = req.body;

      // data is an Array of one or more Object _ids
      itemsIndex.deleteObjects(data)
        .catch(err => console.error(err));
      res.status(200).send();
    });

    // ---------- Our regular NextJS pages --------------------------

    server.get('*', (req, res) => handler(req, res));

    server
      .listen(port, (err) => {
        if (err) throw err;
        console.log(`> Ready on http://localhost:${port}`);
      });
  });
