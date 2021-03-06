const connection = require('../src/database/connection');

module.exports = {

    async returnNameFromTableOngs(req, res) {
        const { id } = req.body;

        const ong = await connection("ongs")
            .where("id", id)
            .select("name")
            .first();

        if (!ong) {
            return res.status(400).json(
                { error: "this table was not found"}
            );
        }
        return res.json(ong);
    }
};