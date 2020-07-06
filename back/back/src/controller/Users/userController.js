const User = require('../../../model/user.model');


exports.register =  function(req, res) {

  let user = new User({
    nom: req.body.nom,
    prenom: req.body.prenom,
    email: req.body.email,
    numero: req.body.numero,
    password: req.body.password,
  });
  //return res.json({ status: 200, data:user });
  return res.json(user)

};

