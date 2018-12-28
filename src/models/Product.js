import Sequelize from 'sequelize';
import seqClient from '../sequelize';

const Product = seqClient.define('product', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING
  },
  packSize: {
    type: Sequelize.STRING
  },
  price1to39: {
    type: Sequelize.FLOAT
  },
  price40to199: {
    type: Sequelize.FLOAT
  },
  price200: {
    type: Sequelize.FLOAT
  }
});

export default Product;
