const config = require('./connection')

const create = async (name) => {
  const [result] = await config.execute(
      `INSERT INTO people (name) VALUES (?)`,
      [name]
  );

  return result
}

module.exports = {
  create
}