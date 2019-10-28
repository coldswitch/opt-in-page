exports.index = (req, res) => {
  res.render("index");
};

exports.submitted = (req, res) => {
  console.log(req.body);
};
