//const dotenv = require('dotenv');
//dotenv.config({ path: `.env.`, debug: true });

const server = "smartcoderhome.database.windows.net"; //process.env.AZURE_SQL_SERVER;
const database = "SmartCoderdb"; //process.env.AZURE_SQL_DATABASE;
const port = 1433; //parseInt(process.env.AZURE_SQL_PORT);
const user = "CloudSA73cf2c29"; //process.env.AZURE_SQL_USER;
const password = "Rockbottom@95"; //process.env.AZURE_SQL_PASSWORD;

const config = {
    server,
    port,
    database,
    user,
    password,
    options: {
        encrypt: true
    }
};

module.exports = config;