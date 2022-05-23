var dbConn  = require('../../config/db.config');

var Pg = function(pg){
    this.name     =   pg.name;
    this.address          =   pg.address;
    this.phone          =   pg.phone;
    this.rent   =   pg.rent;
    this.image = pg.image;
}

// get all pgs
Pg.getAllPgs = (result) =>{
    dbConn.query('SELECT * FROM pg', (err, res)=>{
        if(err){
            console.log('Error while fetching pgs', err);
            result(null,err);
        }else{
            console.log('Pgs fetched successfully');
            result(null,res);
        }
    })
}

Pg.getPgById = (id,result) =>{
    dbConn.query('SELECT * FROM pg where id = ?', id, (err, res)=>{
        if(err)
        {
            console.log('Error while fetching pg id', err);
            result(null,err);
        }
        else{
            result(null,res);
        }
    })
}


module.exports = Pg;