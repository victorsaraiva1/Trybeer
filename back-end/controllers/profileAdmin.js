const profileAdmin = require('../models/profileAdmin');

exports.adminProfile = async (req, res) => {
  const token = req.headers.authorization;
  const login = await profileAdmin.getProfileAdmin(token);

  return res.status(200).json(login);
};
