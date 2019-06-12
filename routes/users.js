var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  global.connection.query('SELECT * from users', function (error, results, fields) {
		if (error) throw error;
		res.send(JSON.stringify({"response": results}));
	});
});

/* POST users inserting */
router.post('/insert', function(req, res){
  var id = req.body.id;
  var username = req.body.name;

    global.connection.query("INSERT INTO `users` (id,name) VALUES ('"+id+"','"+username+"')", function(err, result){

    //global.connection.query("INSERT INTO `users` (id,name) VALUES (?)", id.toString(), username.toString(), function(err, result){
      if(err) throw err;
          console.log("1 record inserted");
      });
  res.send(username);
});




module.exports = router;

