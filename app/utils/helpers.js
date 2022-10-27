const axios = require('axios');

const mysql = require ('mysql2/promise');


const connection = mysql.createPool({
    host: 'db',
    user: 'root',
    password: 'password',
    database: 'FullCycleDB',
  });

const getRandomNames = async () => { 
    const { data } = await axios.get('https://randomuser.me/api/?results=1');
    const  names = data.results.map(({ name }) => name.first);
    const formated = names[0]
    return formated
};

const insertRandomNames = async () => { 
    const names = await getRandomNames();
    const query = `INSERT INTO people (name) VALUES (?)`;
    const [result] = await connection.execute(query, [names]);
    console.log('entrou')
    return result;
};

const getListOfNames = async () => { 
    const query = `SELECT * FROM people`;
    const [result] = await connection.execute(query);
    console.log(result)
    return result;
};

const getFormatedlistOfNames = async () => {
    const names = await getListOfNames();
    const formated = names.map(({ name }) => name);
    return formated;
}

module.exports = {
    insertRandomNames,
    getListOfNames,
    getFormatedlistOfNames
};
