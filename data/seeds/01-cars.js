// STRETCH

exports.seed = async function(knex) {
 
    await knex('cars').truncate()
    await knex('cars').insert([
      {vin: '1HGCM82633A123456',
       make:'Honda',
       model: 'CRV',
       title:'clean',
       transmission:'',
       mileage: 1234},

      {vin: '2FMDK36C99B987654',
       make:'Honda',
       model: 'CRV',
       title:'clean',
       transmission:'',
      mileage: 1234 },

      {vin: '3N1AB6AP7BL567890',
       make:'Honda',
       model: 'CRV',
       title:'clean',
       transmission:'',
       mileage: 1234}
    ]);
  };
  