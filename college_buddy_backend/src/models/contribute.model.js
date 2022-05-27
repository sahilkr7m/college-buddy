var dbConn = require("../../config/db.config");

var Contribute = function (data) {
  this.name = data.name;
  this.address = data.address;
  this.gmaplink = data.gmaplink;
};

Contribute.createContribute = (reqData, result) => {
  dbConn.query("INSERT INTO student_feedback SET ? ", reqData, (err, res) => {
    if (err) {
      console.log("Error inserting");
      result(null, err);
    } else {
      console.log("Feeds taken successfully!");
      result(null, res);
    }
  });
};

module.exports = Contribute;
