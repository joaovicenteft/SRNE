const connection = require('../src/database/connection');

module.exports = {

    // select all the data from database from ong_id and table incidents
    async index(req, res) {
        const ong_id = req.headers.authorization;

        const dataFromOng_id = await connection("incidents")
            .where("ong_id", ong_id)
            .select("*");

        return res.json(dataFromOng_id);

    }
};

