var example1 = {
  id: '1',
  index: 1,
  description: "Do bla bla and also bla",
  scenario: '1',
  fields: [
    { name: "Name", value: "John" },
    { name: "Age", value: null, options: [1,2,3,4,5,6] }
  ]
};
var example2 = {
  id: '2',
  index: 2,
  description: "Second example of scenario 1",
  scenario: '1',
  fields: [
    { name: "Player in", value: "Romario", options: ["Romario", "Caca", "De Boer", "Cristiano"] },
    { name: "Player out", value: "Caca", options: ["Romario", "Caca", "De Boer", "Cristiano"] }
  ]
};
var example3 = {
  id: '3',
  index: 3,
  description: "3rd example of scenario 1",
  scenario: '1',
  fields: [
    { name: "Home goals", value: 1 },
    { name: "Away goals", value: 2 }
  ]
};
var example4 = {
  id: '4',
  index: 1,
  description: "1st example of scenario 2",
  scenario: '2',
  fields: [
    { name: "Minute", value: "90" },
  ]
};
var example5 = {
  id: '5',
  index: 1,
  description: "1st example of scenario 3",
  scenario: '3',
  fields: [
    { name: "Player in", value: "Romario", options: ["Romario", "Caca", "De Boer", "Cristiano"] },
    { name: "Player out", value: "Caca", options: ["Romario", "Caca", "De Boer", "Cristiano"] },
    { name: "Minute", value: 55 }
  ]
};
var example6 = {
  id: '6',
  index: 1,
  description: "1st example of scenario 4",
  scenario: '4',
  fields: [
    { name: "Classification", value: "1" }
  ]
};
var examples = [example1, example2, example3, example4, example5, example6]

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
