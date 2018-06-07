const convertDataToAlgoliaObject = (data) => {
  let asin;
  let brand;
  let categories;
  let featured;
  let price;
  let thumbnail;

  data.metafields.forEach((metafield) => {
    switch (metafield.key) {
      case 'asin':
        asin = metafield.value;
        break;
      case 'brand':
        brand = metafield.value;
        break;
      case 'categories':
        categories = metafield.value && metafield.value.split(',');
        break;
      case 'options':
        featured = metafield.value.includes('Featured');
        break;
      case 'price':
        price = metafield.value;
        break;
      case 'thumbnail':
        thumbnail = metafield.value;
        break;
      default:
        // Do nothing
    }
  });

  return {
    asin,
    brand,
    categories: categories || [],
    content: data.content,
    createdAt: data.created_at,
    featured,
    modifiedAt: data.modified_at,
    objectID: data._id, // eslint-disable-line no-underscore-dangle
    price,
    publishedAt: data.published_at,
    slug: data.slug,
    thumbnail,
    title: data.title,
  };
};

module.exports = convertDataToAlgoliaObject;
