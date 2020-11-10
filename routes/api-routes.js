// ********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *******************************************************************************

// Requiring our Recipe model
var db = require("../models");

// Routes

module.exports = function(app) {

  // GET route for getting all of the posts and return them to the user with res.json
    app.get("/recipes", function(req, res) {
        db.Recipes.findAll({}).then(function(result) {
        res.json(result);
        });
    });

 // Get route for returning posts of a specific category ind all posts where the category is equal to req.params.category
  app.get("/recipes/category/:category", function(req, res) {
    db.Recipe.findAll ({
        where: {
            category: req.params.category,
        } 
    }).then(function (result){
        res.json(result);
    });

  });

  // Get route for retrieving a single recipe where the id is equal to req.params.id
  app.get("/recipes/:id", function(req, res) {
    db.Recipe.findOne ({
        where: {
            id: req.params.id,
        } 
    }).then(function (result){
        res.json(result);
    });
     
  });

  // POST route for saving a new recipe for creating a recipe using req.content
  app.post("/recipes", function(req, res) {
    db.Recipe.create ({
        name: req.body.name,
        ingredient: req.body.ingredient,
        category: req.body.category,
        content: req.body.content
           
    }).then(function (result){
        res.json(result);
    })
  });

  // DELETE route for deleting recipes where the id is equal to req.params.id,
  app.delete("/recipes/:id", function(req, res) {
     db.Recipe.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(result) {
      res.json(result);
    });
  });

  // PUT route for updating recipes using the values in req.body, where the id is equal to req.body.id and return the result to the user using res.json
  app.put("/recipes", function(req, res) {
      db.Recipe.update({
          name: req.body.name,
          ingredient: req.body.ingredient,
          category: req.body.category,
          content: req.body.content
      
    }, {
      where: {
        id: req.body.id
      }
    }).then(function(result) {
      res.json(result);
    });

  });

};
