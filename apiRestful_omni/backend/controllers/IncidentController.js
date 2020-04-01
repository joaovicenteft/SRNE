const connection = require('../src/database/connection');

module.exports = {

    async store(req, res) {
        const { title, description, value } = req.body;

        const ong_id = req.headers.authorization;

        const [id] = await connection("incidents").insert({
            title,
            description,
            value,
            ong_id
        });

        return res.json({id});
    },

    async delete(req, res) {
     
        // the id to be deleted
        const { id } = req.params;

        // the id form headers to be deleted
        const ong_id = req.headers.authorization;

        // pass the id and return de ong_id from table
        const incident = await connection("incidents")
            .where("id", id)
            .select("ong_id")
            .first();

        // verify if the id from table if equals to the ong_id headers params that was passed
        if (incident.ong_id != ong_id) {
            return res.status(401).json({error: "Operation not allowed"});
        }

        // if it is confirmed the assignment of ong_id, the item is deleted from the table
        await connection("incidents")
            .where("id", id)
            .delete();

        return res.status(204).send();

    }
};