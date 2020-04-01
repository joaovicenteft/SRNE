const crypto = require('crypto');
const connection = require('../src/database/connection');

module.exports = {

    // create a table from model ong

    async create(req, res) {
        const id = crypto.randomBytes(4).toString('HEX');

        const { name, email, whatsapp, city, uf } = req.body;

        try { await connection("ongs").insert({
                id,
                name,
                email,
                whatsapp,
                city,
                uf,
            });
                return res.json({id});
        } catch (err) {
            console.log(err);
        }
    },

    // return the data from all de models ongs
    async index(req, res) {
        const ongs = await connection("ongs").select("*");
        return res.json(ongs);
    }

};