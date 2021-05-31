const knexfile = require('../knexfile');
const  knex = require('knex')(knexfile);
module.exports = knex;

// knex('users').insert({
//     name: 'Teste',
//     email: 'teste@teste.com',
//     password: '123'
// }).then(data => console.log(data));

// knex('users').select('*').then(res => console.log(res));

// knex('users').where({ id: 1 }).then(res => console.log(res));