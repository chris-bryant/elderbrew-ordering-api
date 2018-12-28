import { Router } from 'express';
import Vendor from './models/Vendor';
import ProductType from './models/ProductType';
import seqClient from './sequelize';
import cors from 'cors';

const routes = Router();

/**
 * GET home page
 */
routes.get('/', (req, res) => {
  res.render('index', { title: 'Express Babel' });
});

// update this later with UI url.
routes.use('/api/*', cors({ origin: '*' }), (req, res, next) => next());

/**
 * GET /list
 *
 * This is a sample route demonstrating
 * a simple approach to error handling and testing
 * the global error handler. You most certainly want to
 * create different/better error handlers depending on
 * your use case.
 */
routes.get('/api/products', async (req, res, next) => {
  // const products = await Product.findAll()
  //   .catch(err => console.log(err));

  const products = await seqClient.query('select p.*, v.name as vendorName from products p join vendors v on p.vendorId = v.id')
    .then(products => products[0])
    .catch(err => console.log(err));

  return res.json({
    status: 200,
    data: products
  });
});

routes.get('/api/vendors', async (req, res, next) => {
  const vendors = await Vendor.findAll()
    .catch(err => console.log(err));

  return res.json({
    status: 200,
    data: vendors
  });
});

routes.get('/api/product-types', async (req, res, next) => {
  const productTypes = await ProductType.findAll()
    .catch(err => console.log(err));

  return res.json({
    status: 200,
    data: productTypes
  });
});

export default routes;
