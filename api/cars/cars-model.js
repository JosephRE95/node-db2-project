const knex = require('knex')

const db = knex({
  client: 'sqlite3',
  connection: {
    filename: './data/dealer.db3'
  },
  useNullAsDefault: true
});


const getAll = () => {
  return db('cars');
}

async function getById(cars_id) {
  const result = await db('cars').where('cars_id', cars_id).first()
  return result
}

async function create(car) {
  const [cars_id] = await db('cars').insert(car); // corrected table name
  return getById(cars_id);
}
        
module.exports = {
  getAll,
  getById,
  create,
};
