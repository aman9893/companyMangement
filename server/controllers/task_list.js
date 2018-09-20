var connection = require('./../config');

module.exports.TasklistData=function(req,res){
  connection.query('select * from   emp_task', (err,result) => {
    if(err) throw err;
    console.log("hoo")
    console.log(result)
    res.end(JSON.stringify(result));
  
  })
}

module.exports.addTask=function(req,res){
  console.log(req.body)
    var today = new Date();
    var users={
        "task_name":req.body.task_name,
        "task_details":req.body.task_details,
        "task_time":req.body.task_time,
        "status":req.body.status,
        // "created_at":today,
        // "emp_id":req.body.emp_id,
        
    }
    connection.query('INSERT INTO emp_task SET ?',users, function (error, results, fields) {
     
      if (error) {
        res.json({
            status:false,
            message:'there are some error with query'
        })
      }
      else{
          res.json({
            status:true,
            data:results,
            fields:fields,
            message:'user task insert sucessfully'
        })
      }
  });
}
