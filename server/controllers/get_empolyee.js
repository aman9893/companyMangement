var connection = require('./../config');

module.exports.empData = function (req, res) {
  connection.query('select * from emp_table', (err, result) => {
    if (err) throw err;
    console.log(result)
    res.end(JSON.stringify(result));

  })
}

//   module.exports.UpdateEmpData=function(req,res){

//     let sql = `UPDATE emp_table SET emp_status = ? WHERE id = ?`;

//     var data={
//       "emp_status":req.body.emp_status,
//     }
//     connection.query(sql, data, (err,result) => {

//       if (error){
//         return console.error(error.message);
//       }

//       if(err) throw err;
//       else{
//         console.log(result)
//         console.log('Rows affected:', results.affectedRows);
//       }

//     })
//   }
// }

module.exports.UpdateEmpData = function (req, res) {
  console.log("hii")
  console.log(req.body)

  let emp_id = req.body.emp_id
  console.log(emp_id)

  var data = {
    "emp_status": req.body.emp_status,
    "out_time": req.body.out_time,
  }

  console.log(data)
  connection.query('UPDATE emp_table SET ? WHERE emp_id = ?', [data, emp_id], function (error, results, fields) {
    if (error) {
      res.json({
        status: false,
        message: 'there are some error with query'
      })
    } else {
      res.json({
        status: true,
        data: results,
        message: 'employee status update sucessfully'
      })
    }
  });
}

module.exports.addEmpolyee = function (req, res) {

  var users = {
    "emp_name": req.body.emp_name,
    "emp_phone": req.body.emp_phone,
    "emp_email": req.body.emp_email,
    "emp_position": req.body.emp_position,
    "emp_status": req.body.emp_status,
    "start_at": req.body.start_at,
    "out_time": req.body.out_time,
  }
  
  connection.query('INSERT INTO  emp_table SET ?', users, function (error, results, fields) {
    if (error) {
      res.json({
        status: false,
        message: 'there are some error with query'
      })
    } else {
      res.json({
        status: true,
        data: results,
        fields: fields,
        message: 'user empolyee insert sucessfully'
      })
    }
  });
}

module.exports.deleteEmpolyee = function (req, res) {

  connection.query('DELETE FROM emp_table WHERE emp_id=?', [req.params.id], (err, rows, fields) => {
    if (!err) {

      console.log('deleted')
      res.json({
        status: true,
        message: 'user empolyee deleted sucessfully'

      })
    } else {
      console.log(err)
    }
  });
}

module.exports.UpdateEmpAllData = function (req, res) {
  console.log("update")
  console.log(req.body)

  let emp_id = req.body.emp_id
  console.log(emp_id)

  var data = {
    "emp_name": req.body.emp_name,
    "emp_phone": req.body.emp_phone,
    "emp_email": req.body.emp_email,
    "emp_position": req.body.emp_position,
    "emp_status": req.body.emp_status,
    "start_at": req.body.start_at,
    "out_time": req.body.out_time,
  }

  console.log(data)
  connection.query('UPDATE emp_table SET ? WHERE emp_id = ?', [data, emp_id], function (error, results, fields) {
    if (error) {
      res.json({
        status: false,
        message: 'there are some error with query'
      })
    } else {
      res.send({
        status: true,
        data: results,
        message: 'employee status update sucessfully'
      })
    }
  });
}

module.exports.searchEmpolyeeData = function (req, res, next) {

let keyword = req.params.keyword;
console.log(keyword)
console.log(req.query.key)

connection.query('SELECT * from emp_table where emp_name Like " %' + keyword + '%"',
  function (err, rows, fields) {
    if (err) throw err;
    console.log(rows+"hii")

    var data = [];
    for (i = 0; i < rows.length; i++) {
         
      data.push(rows[i].emp_name);
    }
    res.end(JSON.stringify(data));
  });
}

// connection.query("SELECT * FROM emp_table WHERE  emp_table.empi_id LIKE ? ", ['%' + keyword + '%'], function (error, results, fields) {
//     if (error) throw error;
//     return res.send({ error: false, data: results, message: 'Empolyee search list.' });
// });



// router.get('/search/:keyword', function(req, res, next) {
//   var keyword;
//   keyword = req.params.keyword;
//   console.log("+++++");
//   console.log(keyword+"1234");
//   mysql.select('SELECT * from cider.cid_contents where con_content like \'%'+ keyword +'%\' order by con_no desc;',


//   function (err, data){
//       if (err) throw err;

//   res.render('front/search/search', { contents : data});
// });
// });
