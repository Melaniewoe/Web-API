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

  var token = "8f7f198df7c99b7f9984c1e46488a2d74ba34489";

  github.authenticate({
    type:"oauth",
    token : token
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
