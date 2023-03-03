// const jwt = require('jsonwebtoken');
// // const userService = require('../service/user.service');

// const secret = process.env.JWT_SECRET;

// const auth = async (req, res, next) => {
//   const token = req.header('Authorization');
//   if(!token) {
//     return res.status(400).send({message: 'Token not found'});
//   }

//   try {
//     const {data: {userId}} = jwt.verify(token, secret);
//     const user = await userService.getById(userId);

//     if(!user) {
//       return res.status().send({message: 'Token expired or invlid'});
//     }

//     req.user = user;
//     next();
//   } catch(e) {
//     return res.status().send({message: 'Token expired or invlid'});
//   }
// }

// module.exports = auth;