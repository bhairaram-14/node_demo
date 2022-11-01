const mysql = require('mysql')



async function getConnection() {


    dbconfig = {

        user: "root",
        password: "Bhera@mysql",
        host: "localhost",
        database: "user"
    }

    return new Promise((resolve, reject) => {
        const connection = mysql.createConnection(dbconfig)
        connection.connect((err) => {
            if (err) reject(err)

            console.log("connected......")
            resolve(connection);
        })
    })
};


async function excuteQuery(sql, connection) {
    return new Promise((resolve, reject) => {

        connection.query(sql, (err, res) => {
            if (err)
                reject(err)
            else
                resolve(res);
        })

    });

}



async function closeConnection(connection) {
    return new Promise((resolve, reject) => {
        connection.end((err) => {
            if (err)
                reject("something went wrong in closeConnection");
            else
                resolve("connection closed.........");
        });

    });
}

module.exports = { getConnection, excuteQuery, closeConnection };
