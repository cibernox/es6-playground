var example1 = { id: '1', description: "Do bla bla and also bla", scenario: '1' };
var example2 = { id: '2', description: "Second example of scenario 1", scenario: '1' };
var example3 = { id: '3', description: "3rd example of scenario 1", scenario: '1' };
var example4 = { id: '4', description: "1st example of scenario 2", scenario: '2' };
var example5 = { id: '5', description: "1st example of scenario 3", scenario: '3' };
var example6 = { id: '6', description: "1st example of scenario 4", scenario: '4' };
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

  app.use('/api/examples', examplesRouter);
};
