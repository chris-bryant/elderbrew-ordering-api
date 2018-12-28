import Sequelize from 'sequelize';

const seqClient = new Sequelize('elderbrew_ordering', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

seqClient
  .authenticate()
  .then(() => console.log('Connection established'))
  .catch(err => console.log('Unable to connect: ', err));

export default seqClient;
