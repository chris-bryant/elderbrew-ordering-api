import Sequelize from 'sequelize';
import seqClient from '../sequelize';
import Product from './Product';

const Vendor = seqClient.define('vendor', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING
  },
  country: {
    type: Sequelize.STRING
  }
});

Vendor.hasMany(Product);

export default Vendor;
