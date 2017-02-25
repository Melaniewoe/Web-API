
'use strict';
// Exports all the functions to perform on the db
module.exports = {
    getAll : getAll,
    getOne : getOne,
    save : save,
    update : update,
    delHandbag : delHandbag
};

//GET /hadbag operationId
function getAll(req, res, next) {
    res.json("Get function accessed");
}
//GET /handbag/{id} 
function getOne(req, res, next) {
    var id = req.swagger.params.id.value; //req.swagger contains the path parameters
    res.json("Success, you entered id:" + id);
}
//POST /handbag operationId
function save(req, res, next) {
    var id = req.swagger.params.id.value; //req.swagger contains the path parameters
    var handbag = req.body;
    res.json({success: 1, description: "Saved!", "Handbag": req.body});
}
//PUT /handbag/{id} operationId
function update(req, res, next) {
    var id = req.swagger.params.id.value; //req.swagger contains the path parameters
    var handbag = req.body;
    res.json({success: 1, description: "Handbag updated!", "Handbag": req.body});

}
//DELETE /handbag/{id} operationId
function delHandbag(req, res, next) {
    var id = req.swagger.params.id.value; //req.swagger contains the path parameters
    res.json({success: 1, description: "Handbag delete!",
              "id is": id});

}