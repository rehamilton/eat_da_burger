// Object for all our SQL statement functions goes here
const connection = require("./connections.js")

function questionMarks(num) {
    let arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}


function objToSql(object) {
    let arr = [];
  
 
    for (let key in object) {
      let value = object[key];
      if (Object.hasOwnProperty.call(object, key)) {
 
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }

        arr.push(key + "=" + value);
      }
    }
  
    console.log(arr);
    return arr.toString();
}


const orm = {
    read: (tableInput, cb) => {
        let queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, (err, result) => {
          if (err) {
            throw err;
          }
          cb(result);
        });
      },
    create: (table, cols, vals, cb) => {
        let queryString = "INSERT INTO " + table

        console.log(vals);
        console.log(cols);

        queryString += " ("
        queryString += cols.toString()
        queryString += ") "
        queryString += "VALUES ("
        queryString += questionMarks(vals.length)
        queryString += ")"

        console.log(queryString);

        connection.query(queryString, vals, (err, result) => {
            if (err) {
                throw err
            }

            cb(result)
        })
    },

    update: (table, objColVals, condition, cb) => {
        var queryString = "UPDATE " + table;
    
        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;
    
        console.log(queryString);
        connection.query(queryString, (err, result) => {
          if (err) {
            throw err;
          }
    
          cb(result);
        });
    },
    delete: (table, condition, cb) => {
        let queryString = "DELETE FROM " + table
        queryString += " WHERE "
        queryString += condition

        console.log(queryString);

        connection.query(queryString, (err,result) => {
            if (err) {
                throw err   
            }

            cb(result)
        })

    }
}

module.exports = orm

