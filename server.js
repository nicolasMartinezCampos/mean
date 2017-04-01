// load the express package and create our app
var express = require('express'),
app = express(),
path = require('path'),

// create routes for the admin section

// get an instance of the router
adminRouter = express.Router();

// send our index.html file to the user for the home page
app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname + '/index.html'));
});

// route middleware that will happen on every request
adminRouter.use(function(req, res, next) {

 // log each request to the console
 console.log(req.method, req.url);

 // continue doing what we were doing and go to the route
 next();
});

//admin main page. the dashboard (http://localhost:1337/admin)
adminRouter.get('/',function(req,res){
	res.send('I am the dashboard!');
});

//users page (http://localhost:1337/admin/users)
adminRouter.get('/users',function(req,res){
	res.send('I show all the users!');
});

//post page (http://localhost:1337/admin/posts)
adminRouter.get('/posts',function(req,res){
	res.send('I show all the posts!');
});

// route middleware to validate :name
adminRouter.param('name', function(req, res, next, name) {
 // do validation on name here
 // blah blah validation
 // log something so we know its working
 console.log('doing name validations on ' + name);

 // once validation is done save the new item in the req
 req.name = name;
 // go to the next thing
 next();
});

 // route with parameters (http://localhost:1337/admin/hello/:name)
 adminRouter.get('/hello/:name', function(req, res) {
 	res.send('hello ' + req.name + '!');
 });


 // route with parameters (http://localhost:1337/admin/users/:name)
 adminRouter.get('/users/:name', function(req, res) {
 	res.send('hello ' + req.params.name + '!');
 });

//apply the routes to our application
app.use('/admin', adminRouter);

// start the server
app.listen(1337);
console.log('Server up at port 1337!');
