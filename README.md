# Cosmic Store

![Preview](https://cosmic-s3.imgix.net/acf21320-6a6f-11e8-b626-b32fb4f7d247-thumbnail.jpeg)

### [View Demo](https://cosmicstore.chriso.io)

### [Cosmic JS](https://cosmicjs.com) + [Algolia](https://www.algolia.com)
This project was created to demonstrate how Algolia can be integrated with Cosmic JS using Webhooks to provide awesome search capabilities.

### Getting Started
```
git clone https://github.com/chrisoverstreet/cosmic-store
cd cosmic-store
npm i
```

In addition to having a Cosmic JS account, you will also need to sign up for a free Algolia account. Once you do, create an App. You'll need the App API Keys for the config files.

### Develop

#### Add required development config files. Replace all `<__REQUIRED__>` fields.

 - /.env

```
PORT=8080

BASE_URL=http://localhost:8080

COSMIC_BUCKET=<__REQUIRED__>
COSMIC_READ_KEY=<__REQUIRED__>

ALGOLIA_APPLICATION_ID=<__REQUIRED__>
ALGOLIA_SEARCH_ONLY_API_KEY=<__REQUIRED__>
ALGOLIA_ADMIN_API_KEY=<__REQUIRED__>
```

#### Run in development
```
npm run dev
```

### Deploy

#### Add required production config files

 - /.env.production

```
PORT=8080

BASE_URL=<__REQUIRED__>

COSMIC_BUCKET=<__REQUIRED__>
COSMIC_READ_KEY=<__REQUIRED__>

ALGOLIA_APPLICATION_ID=<__REQUIRED__>
ALGOLIA_SEARCH_ONLY_API_KEY=<__REQUIRED__>
ALGOLIA_ADMIN_API_KEY=<__REQUIRED__>
```

- /now.json _- Now deployment configuration_
```
{
  "alias": [
    <__YOUR_DOMAIN__>
  ],
  "dotenv": ".env.production",
  "public": false
}
```

#### Deploy via [Now](https://zeit.co/now)
```
npm run deploy
```
