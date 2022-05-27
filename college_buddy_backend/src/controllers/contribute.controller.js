const contributeModel = require("../models/contribute.model");

exports.insertContribute = (req, res) => {
  console.log("req data", req.body);
  const contributeReqData = new contributeModel(req.body);
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.send(404).send({ success: false, message: "Please fill all fields" });
  } else {
    console.log("valid data");
    contributeModel.createContribute(contributeReqData, (err, data) => {
      if (err) {
        res.send(err);
        res.json({
          status: false,
          message: "something went wrong",
          data: data,
        });
      } else {
        res.redirect("http://localhost:3001/contribute/message");
      }
    });
  }
};
