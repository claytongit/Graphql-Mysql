const db = require('../config/database');

module.exports = {
    Query: {
        async getUser(_, { id }){
            return await db('users').where({ id });
        },
        async getUsers(){
            return await db('users').select('*');
        }
    },
    Mutation: {
        async createUser(_, { input }){
            const res = await db('users').insert({
                name: input.name,
                email: input.email,
                password: input.password
            });

            const id = res[0];

            return await db('users').where({ id });
        }
    }
}