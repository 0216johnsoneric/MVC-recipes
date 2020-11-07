// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// ===========================================================
// Requiring our Recipe model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the posts and return them to the user with res.json
    app.get("/api/recipes", function(req, res) {
        db.Recipes.findAll({}).then(function(result) {
        res.json(result);
        });
    });

  // Get route for returning posts of a specific category ind all posts where the category is equal to req.params.category
  app.get("/api/recipes/category/:category", function(req, res) {
    db.Recipe.findAll ({
        where: {
            category: req.params.category,
        } 
    }).then(function (result){
        res.json(result);
    });

  });

  // Get route for retrieving a single recipe where the id is equal to req.params.id
  app.get("/api/recipes/:id", function(req, res) {
    db.Recipe.findOne ({
        where: {
            id: req.params.id,
        } 
    }).then(function (result){
        res.json(result);
    });
     
  });

  // POST route for saving a new recipe for creating a recipe using req.content
  app.post("/api/recipes", function(req, res) {
    db.Recipe.create ({
        title: req.body.title,
        content: req.body.content,
        category: req.body.category
           
    }).then(function (result){
        res.json(result);
    })
  });

  // DELETE route for deleting recipes where the id is equal to req.params.id,
  app.delete("/api/recipes/:id", function(req, res) {
     db.Recipe.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(result) {
      res.json(result);
    });
  });

  // PUT route for updating recipes using the values in req.body, where the id is equal to req.body.id and return the result to the user using res.json
  app.put("/api/recipes", function(req, res) {
      db.Recipe.update({
        title: req.body.title,
        content: req.body.content,
        category: req.body.category
      
    }, {
      where: {
        id: req.body.id
      }
    }).then(function(result) {
      res.json(result);
    });

  });

};