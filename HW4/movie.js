'use strict';
// Include our "db"
var db = require('../../config/db')();

// Exports all the functions to perform on the db
module.exports = {
    getAll : getAll
    //save : save,
    //getOne : getOne
    //update : update,
    //delMovie : delMovie
};

var usergrid = require('usergrid');
    
// or you can load from a config file; see config.sample.json
    
//var Usergrid = require('usergrid')
//Usergrid.init() // defaults to use config.json

var usergridClient = require('../../node_modules/usergrid/lib/client')
//var client = new usergridClient(config)

var usergrid = new usergridClient({
    orgId:'melaniewoe',
    appId:'sandbox',
    baseUrl: 'https://apibaas-trial.apigee.net',
    authType:usergrid.AUTH_CLIENT_ID,
    clientId:'b3U6cVpHQAkeEeeD9g7sJBXz3w',
    clientSecret:'b3U6-GITJ63y4MsNMIIwksDNx3zPpLo',
    logging: false, //optional - turn on logging, off by default
    buildCurl: false //optional - turn on curl commands, off by default
});


//GET /movie operationId
function getAll(req, res, next) {
    //res.json({ movies: db.find()});
    //get specific movie
    usergrid.GET('movies', 'Forrest Gump', function(error, usergridResponse, entity) {
    // entity, if found, is a UsergridEntity object
    console.log( usergridResponse)
    //res.json(usergridResponse.entities)
})
}
/*
function getOne (req, res, next){
    usergrid.GET('movies', "La La Land" , function(error, usergridResponse, entity) {
    var title = req.swagger.params.title.value;
    console.log(usergridResponse)
    /*
     if (usergridResponse.ok){
      res.status(200).json(usergridResponse.entities);
     }
     else{
      res.status(404).json("Movie title is not found");
     }
     
  })
}


//POST /movie operationId
function save(req, res, next) {
    res.json({success: db.save(req.body), description: "Movie added to the list!"});
}
//GET /movie/{id} operationId
function getOne(req, res, next) {
    var id = req.swagger.params.id.value; //req.swagger contains the path parameters
    var movie = db.find(id);
    if(movie) {
        res.json(movie);
    }else {
        res.status(204).send();
    }
}

//PUT /movie/{id} operationId
function update(req, res, next) {
    
    //var id = req.swagger.params.id.value; //req.swagger contains the path parameters
    //var movie = req.body;
    if(db.update(id, movie)){
        res.json({success: 1, description: "Movie updated!"});
    }else{
        res.status(204).send();
    }
    usergrid.GET('movies', title, function(error, usergridResponse, entity) {
    // entity, if found, is a UsergridEntity object
    //console.log( usergridResponse)
    var title = req.swagger.params.name.value; //req.swagger contains the path parameters
    res.json(usergridResponse.entities)
})

}

//DELETE /movie/{id} operationId
function delMovie(req, res, next) {
    var id = req.swagger.params.id.value; //req.swagger contains the path parameters
    if(db.remove(id)){
        res.json({success: 1, description: "Movie deleted!"});
    }else{
        res.status(204).send();
    }

}
*/