var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var router = express.Router();
var bodyParser = require('body-parser');
var cors = require('cors');


router.use(cors());
router.options('*', cors());
router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

console.log("");
console.log("===================================");
console.log("Server is on at localhost:3001.");
console.log("===================================");

router.get('/', function(req, res, next) {
	/*res.format({
		'application/json': function(){
		    res.send({ id: 1, username: "HJ"});
		}
	});*/
});

router.post('/', function(req, res, next) {
	res.sendStatus(200);
	console.log("");
	console.log("===================================");
	console.log("Get a post req!");
	console.log("");
	console.log(req.body);
	console.log("===================================");

	if (req !== null){
		MongoClient.connect('mongodb://localhost:27017/Mydatabase', function(err, db) {
			if (err) {
				throw err;
			}else{
			  	db.collection('data').insert([
			  	{
			    	id: req.body.id,
			        username: req.body.username,
			        lpicType: req.body.lpicType,
			        rpicType: req.body.rpicType,
			        chosen: req.body.chosen,
			    	otherInfo: "Other Info."
			    }]);
			    /*db.collection('data').find().toArray(function(err, result) {
			      	if (err) {
			        	throw err;
			    	}
			    	console.log("");
			      	console.log("Current MongoDB Info.");
			      	console.log("");
			      	console.log(result);
			      	console.log("===================================");
			    });*/
			}
		});
	}
});


module.exports = router;
