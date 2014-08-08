var example1 = {
  id: '1',
  index: 1,
  description: "Change player name",
  scenario: '1',
  editable_fields: [
    { name: "Name", value: "John" },
    { name: "Age", value: null, options: [1,2,3,4,5,6] }
  ]
};
var example2 = {
  id: '2',
  index: 2,
  description: "Perform a player substitution",
  scenario: '1',
  editable_fields: [
    { name: "Player in", value: "Romario", options: ["Romario", "Caca", "De Boer", "Cristiano"] },
    { name: "Player out", value: "Caca", options: ["Romario", "Caca", "De Boer", "Cristiano"] }
  ]
};
var example3 = {
  id: '3',
  index: 3,
  description: "Set result",
  scenario: '1',
  editable_fields: [
    { name: "Home goals", value: 1 },
    { name: "Away goals", value: 2 }
  ]
};
var example4 = {
  id: '4',
  index: 1,
  description: "Set minute",
  scenario: '2',
  editable_fields: [
    { name: "Minute", value: "90" },
  ]
};
var example5 = {
  id: '5',
  index: 2,
  description: "Add extra time",
  scenario: '2',
  editable_fields: [
    { name: "Extra minutes", value: "5" },
  ]
};
var example6 = {
  id: '6',
  index: 1,
  description: "Perform substituion in a given minute",
  scenario: '3',
  editable_fields: [
    { name: "Player in", value: "Romario", options: ["Romario", "Caca", "De Boer", "Cristiano"] },
    { name: "Player out", value: "Caca", options: ["Romario", "Caca", "De Boer", "Cristiano"] },
    { name: "Minute", value: 55 }
  ]
};
var example7 = {
  id: '7',
  index: 1,
  description: "Set classification",
  scenario: '4',
  fields: [
    { name: "Classification", value: "1" }
  ]
};
var examples = [example1, example2, example3, example4, example5, example6, example7]

module.exports = function(app) {
  var express = require('express');
  var examplesRouter = express.Router();

  examplesRouter.get('/', function(req, res) {
    var filteredExamples = examples;

    if (req.query.ids.length > 0){
      filteredExamples = examples.filter(function(ex) {
        return req.query.ids.indexOf(ex.id) > -1;
      });
    }

    res.send({
      examples: filteredExamples
    });
  });

  examplesRouter.get('/:id', function(req, res) {
    res.send({
      example: examples.filter(function(ex) { return ex.id === req.params.id })[0]
    });
  });

  app.use('/api/examples', examplesRouter);
};
