var express = require('express');
var app = express();
var dateObj = new Date();
var month = dateObj.getUTCMonth() + 1; 
var day = dateObj.getUTCDate();
var year = dateObj.getUTCFullYear();

var newdate =year + "-" + month + "-" + day;



app.get('/getbooks/:id', (req, res) => {
    var store ='';
    id=req.params.id;
    console.log(id);
    // var mysql = require('mysql');
    // var connection = mysql.createConnection({
    //     host:'localhost',
    //     user:'root',
    //     pass:'',
    //     database:'bookapp'
    // });
    // connection.connect();
    // connection.query("INSERT INTO `hospital`.`token` (`PatientId`, `TokenNo`, `Date`, `Reason`, `status`) VALUES (?, ?, ?, ?, ?)", [ id, '45', newdate,'Test','token'], function (err){
    // });    
    // connection.query("SELECT `Name`, `Age`, `Gender`, `pnum`, `Address`, `Relation1`, `R1pnum`, `R1Address` FROM `patient` WHERE `id`=?",id,function (err, emp_rows, fields) {
    //   if (err) throw err;
    //         store = store + JSON.stringify({pid:id,token:45,Name:emp_rows[0].Name, Age:emp_rows[0].Age, BloodGroup:emp_rows[0].BloodGroup, Dob:emp_rows[0].DOB,Gender:emp_rows[0].Gender, Phone:emp_rows[0].pnum, Address:emp_rows[0].Address, Donar:emp_rows[0].donar,Relation:emp_rows[0].Relation1,R1pnum:emp_rows[0].R1pnum,R1Address:emp_rows[0].R1Address,status:'token'});
    //         console.log(store);
    //           res.setHeader("Content-Type", "text/json");
    //           res.setHeader("Access-Control-Allow-Origin", "*");
    //           res.end(store);
    // });
    // connection.end();  
});


app.get('/tokens', (req, res) => {
var count;
var i;
var mysql = require('mysql');
var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    pass:'',
    database:'bookapp'
});
var async=require('async');
var i;
var store ='[';
var queryString="SELECT `PatientId`, `TokenNo`, `Reason`, `status`, `docter` FROM `token` WHERE `Date`='"+newdate+"';";
connection.query(queryString, function(err, rows, fields) {
    i=0;
    if (err) throw err;
    count=rows.length;
    async.each(rows, function (row, callback) {
        var pco=row.PatientId;
        var emp_query = "SELECT `Name`, `Age`, `BloodGroup`, `DOB`, `Gender`, `pnum`, `Address`, `donar`, `Relation1`, `R1pnum`, `R1Address` FROM `patient` WHERE `id`='"+pco+"'";
        connection.query(emp_query, function(emp_err, emp_rows, emp_fields) {
            if (emp_err) callback(emp_err);
    store = store + JSON.stringify({pid:row.PatientId, docter:row.docter, TokenNo:row.TokenNo, Reason: row.Reason, Name:emp_rows[0].Name, Age:emp_rows[0].Age, BloodGroup:emp_rows[0].BloodGroup, Dob:emp_rows[0].DOB,Gender:emp_rows[0].Gender, Phone:emp_rows[0].pnum, Address:emp_rows[0].Address, Donar:emp_rows[0].donar,Relation:emp_rows[0].Relation1,R1pnum:emp_rows[0].R1pnum,R1Address:emp_rows[0].R1Address,status:row.status});
            callback();
            i=i+1;
            if(i==count)
            {
            store=store+']';
            console.log(store);
            res.setHeader("Content-Type", "text/json");
            res.setHeader("Access-Control-Allow-Origin", "*");
            res.end(store)
            }else
            {
                store=store+',';
            }
        }); 
    });
    }
);
});

