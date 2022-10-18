const connection = require('./config')

const create = async (name) => {
  const [result] = await connection.execute(
      `INSERT INTO people (name) VALUES (?)`,
      [name]
  );

  return result
}

module.exports = {
  create
}