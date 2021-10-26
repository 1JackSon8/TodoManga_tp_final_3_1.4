//Se importa libreria mysql
let mysql = require('mysql')

let conn = mysql.createConnection({
    host:"mysql",
    port:3306,
    user:"root",
    password:"root",
    database:"todo_mangas"
});

conn.connect();


function listarProductos(){

    return new Promise(function(resolve, reject){

        conn.query("SELECT * FROM todo_mangas.manga", (err, rows) => {

            if(err){
                reject(err);
            } else {
                resolve(rows);
            }

        });

    })

}

function buscarProductoPorId(id){

    return new Promise(function(resolve, reject){

        conn.query("SELECT * FROM todo_mangas.manga WHERE id=?", id, (err, rows) => {

            if(err){
                reject(err);
            } else {
                resolve(rows);
            }

        });

    })

}


//Se exportan las funciones
module.exports = {
    listarProductos: listarProductos,
    buscarProductoPorId: buscarProductoPorId
}
