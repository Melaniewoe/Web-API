'use strict';

/*
 'use strict' is not required but helpful for turning syntactical errors into true errors in the program flow
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
*/

/*
 Modules make it possible to import JavaScript files into your application.  Modules are imported
 using 'require' statements that give you a reference to the module.
  It is a good idea to list the modules that your application depends on in the package.json in the project root
 */


var util = require('util');


function testGithub(req, res) {

  var GitHubApi = require('github');

  var github = new GitHubApi({
    //reuired
    version: "3.0.0"
  });

  //var token = "this is where I put the token";

  var vault = require('avault').createVault(__dirname);

    vault.get('sigad', function (profilestring){
      var profile = JSON.parse(profilestring);
      console.log(profile);
        gits.authenticate({
            type: "oauth",
            token: "617e65c2dc4dc150dde2aff8108183efb0735525"
        });
    });
  

  var output = ""

  //github.user.get({username: "Melaniewoe"} ,function(err, data){
  //  console.log("Got ERR: ", err);
  //  console.log("Got RES: ", data);
  //  res.json(data);

      github.repos.getAll({username: "Melaniewoe"}, function(err, data){
      console.log("GOT ERR?", err);
      console.log("GOT ERR?", data);
      res.json(data); 
    //  })
  })
  
  return output;
}  

var vault = require('avault').createVault(__dirname);
var keyName = 'key1';
vault.generateKey(keyName).then(
    function (keyResponse) {
        vault.store(keyName, '{"username": "mrogers", "password": "director", "host": "nsa.rds.amazonaws.com", "database": "prism"}', 'sigad').then(
            function (storeResponse) {
                console.log('Ok', storeResponse);
            },
            function (err) {
                console.log('Error', err);
            });
    },
    function (err) {
        console.log('Error', err);
    });
// function createVault(){
//   var vault = require('avault').createVault(__dirname);
//   var key ="key1"; 
//   vault.generateKey(keyName).then(
//     function(keyResponse){
//       vault.store(key,{"username": "github", "password": "123"},
//       function (storeResponse){
//         console.log("SUCCESS" , storeResponse);
//       },
//     function (err){
//       console.log("Error", err);
//     });
// })
// }  

// function getVault(){
//   console.log("test" + __dirname);
//   var vault = require('avault').createVault(__dirname);
//   vault.get('github',function(profileString) {
//     if(!profileString){
//        console.log("Error");
//     } else {
//         var profile1 = JSON.parse(profile);
//         console.log(profile);
//     }
//     
//   });
// }

module.exports = {
  hello: hello,
  getGit: testGithub
};

function hello(req, res) {
  // variables defined in the Swagger document can be referenced using req.swagger.params.{parameter_name}
  var name =  req.swagger.params.name.value || 'stranger';
  var hello = util.format('Hello, %s!', name);

  // this sends back a JSON response which is a single string
  res.json(hello);
}