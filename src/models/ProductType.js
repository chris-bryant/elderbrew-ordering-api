import Sequelize from 'sequelize';
import seqClient from '../sequelize';
import Product from './Product';

const ProductType = seqClient.define('productType', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  type: {
    type: Sequelize.STRING
  },
  label: {
    type: Sequelize.STRING
  }
});

ProductType.hasMany(Product);

export default ProductType;
