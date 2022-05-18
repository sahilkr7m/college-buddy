
const PgModel = require('../models/pg.model')

//get pg lists
exports.getPgList = (req, res) => {
    // console.log('All pg lists')
    PgModel.getAllPgs((err, pgs) => {
        if(err) res.send(err)
        res.send(pgs);
    })
} 

//get pg by id
exports.getPgById = (req, res) => {
    // console.log('pg by id')
    PgModel.getPgById(req.params.id, (err,pg) => {
        if(err) res.send(err)
        res.json(pg)
    })
}