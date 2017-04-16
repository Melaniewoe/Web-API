'use strict';

// Exports all the functions to perform on the db
module.exports = {
    getAll : getAll,
    save : save,
    getOne : getOne,
    update : update,
    delMovie : delMovie
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
    logging: true, //optional - turn on logging, off by default
    buildCurl: false //optional - turn on curl commands, off by default
});


//GET /movie operationId
function getAll(req, res, next) {
    //res.json({ movies: db.find()});
    //get specific movie
    usergrid.GET('movies', function(error, usergridResponse, entities) {
    // entities is an array of UsergridEntity objects
    res.json(usergridResponse.entities)
})
}

function getOne (req, res, next){
var title = req.swagger.params.title.value;

    usergrid.GET('movies', title, function(error, usergridResponse, entity) {
    
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

var movies = req.swagger.params.title.value;

    var entity = {
    type: 'movies',
    name: movies['title'],
    year: movies['year'],
    actor: movies['actor'],
    review: movies['review']
}
   if (movies['title'].length < 1)
        res.json( "Movie title is isUndefined!");
   else if (movies['actor'].length < 3)
        res.json("Must have at least 3 actors");
   else if (movies['review'].length <1)
        res.json("Must have at least 1 review");
   //reviewer cannot be empty
   //
   //
   //
   else if (movies['year'].length < 1)
        res.json("Year is isUndefined");
   
    //res.json({success: db.save(req.body), description: "Movie added to the list!"});
    else
    {
        usergrid.POST(entity, function(error, usergridResponse, entity) {
    // entity should now have a uuid property and be created
        
            res.json("Movie added!");
      
        })
    }
   
}




//PUT /movie/{title} operationId
function update(req, res, next) {
    var title = req.swagger.params.title.value; //req.swagger contains the path parameters
    var year = req.swagger.params.year.value;

    usergrid.GET('movies', title, function(error, usergridResponse, entities) {
    // entities is an array of UsergridEntity objects
    if (error)
    {
        res.json("Movie is not found!");
    }
    else 
    {
        var entity = {
        type: 'movies',
        name: title,
        year: year['year'],
        actor: year['actor'],
        review: year['review']
        }

        usergrid.PUT(title, { keywords: title }, function(error, usergridResponse) {
            if (error)
            {
                res.json({error: error});
            }
            else
            {
                res.json("Movie is updated!");
            }
        })
    }
    })

}



//DELETE /movie/{title} operationId
function delMovie(req, res, next) {
    var uuid = req.swagger.params.title.value;
    usergrid.DELETE('movies',uuid, function(error, usergridResponse) {
        if (error)
        {
            res.json("Movie is not found and cannot be deleted");
        }
        else
        {
            res.status(200).json("Movie deleted!");
        }
        
    })

}
