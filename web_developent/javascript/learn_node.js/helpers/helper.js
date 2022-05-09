const path = require('path');

const createPath = (page) => path.resolve(__dirname, '../ejs-views', `${page}.ejs`);

const handleError = (res, error) =>{
  res.status(500).send(error)
};

module.exports = {
  createPath,
  handleError
};