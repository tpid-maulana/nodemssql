const sql = require('mssql')

var express = require('express');
var app = express();

app.get('/', function (req, res) {
   
    var sql = require("mssql");

    // config for your database
    const config = {
        user: 'rakatawar',
        password: 'admin1234',
        server: '192.168.0.102',
        database: 'dbRDO_DEMO2',
        options: {
            encrypt: false,
            trustedConnection: true,
            enableArithAbort: true,
            validateBulkLoadParameters: true,
          },
    }

    // connect to your database
    sql.connect(config, function (err) {
    
        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();
           
        // query to the database and get the records
        request.query('select * from PLU', function (err, recordset) {
            
            if (err) console.log(err)

            // send records as a response
            res.send(recordset);
            
        });
    });
});

var server = app.listen(5000, function () {
    console.log('Server is running..');
});