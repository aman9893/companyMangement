var connection = require('./../config');

module.exports.blogData = function (req, res) {
  connection.query('select * from blog', (err, result) => {
    if (err) throw err;
    console.log(result)
    res.end(JSON.stringify(result));

  })
}


module.exports.addBlog = function (req, res) {
    
      var users = {
        "blog_name": req.body.blog_name,
        "blog_details": req.body.blog_details,
        "blog_date": req.body.blog_date,
      }
      
      connection.query('INSERT INTO  blog SET ?', users, function (error, results, fields) {
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
            message: 'blog insert sucessfully'
          })
        }
      });
    }