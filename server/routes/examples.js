var example1 = {
  id: '1',
  index: 1,
  description: "Change player name",
  status: 'pending',
  output: null,
  scenario_id: '1',
  editable_fields: [
    { name: "Name", value: "John" },
    { name: "Age", value: null, options: [1,2,3,4,5,6] }
  ]
};
var example2 = {
  id: '2',
  index: 2,
  description: "Perform a player substitution",
  status: 'pending',
  output: null,
  scenario_id: '1',
  editable_fields: [
    { name: "Player in", value: "Romario", options: ["Romario", "Caca", "De Boer", "Cristiano"] },
    { name: "Player out", value: "Caca", options: ["Romario", "Caca", "De Boer", "Cristiano"] }
  ]
};
var example3 = {
  id: '3',
  index: 3,
  description: "Set result",
  status: 'pending',
  output: null,
  scenario_id: '1',
  editable_fields: [
    { name: "Home goals", value: 1 },
    { name: "Away goals", value: 2 }
  ]
};
var example4 = {
  id: '4',
  index: 1,
  description: "Set minute",
  status: 'pending',
  output: null,
  scenario_id: '2',
  editable_fields: [
    { name: "Minute", value: "90" },
  ]
};
var example5 = {
  id: '5',
  index: 2,
  description: "Add extra time",
  status: 'pending',
  output: null,
  scenario_id: '2',
  editable_fields: [
    { name: "Extra minutes", value: "5" },
  ]
};
var example6 = {
  id: '6',
  index: 1,
  description: "Perform substituion in a given minute",
  status: 'pending',
  output: null,
  scenario_id: '3',
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
  status: 'pending',
  output: null,
  scenario_id: '4',
  editable_fields: [
    { name: "Classification", value: "1" }
  ]
};
var example8 = {
  id: '8',
  index: 4,
  description: "Penalty shot",
  status: 'pending',
  output: null,
  scenario_id: '1',
  editable_fields: [
    { name: "Scorer", value: "Cristiano", options: ["Romario", "Caca", "De Boer", "Cristiano"] }
  ]
};
var example9 = {
  id: '9',
  index: 5,
  description: "Freekick shot",
  status: 'pending',
  output: null,
  scenario_id: '1',
  editable_fields: [
    { name: "Shooter", value: "Caca", options: ["Romario", "Caca", "De Boer", "Cristiano"] }
  ]
};
var example10 = {
  id: '10',
  index: 6,
  description: "Injure a player",
  status: 'pending',
  output: null,
  scenario_id: '1',
  editable_fields: [
    { name: "Injured player", value: "De Boer", options: ["Romario", "Caca", "De Boer", "Cristiano"] }
  ]
};

var examples = [example1, example2, example3, example4, example5, example6, example7, example8, example9, example10]

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

    res.send({examples: filteredExamples});
  });

  examplesRouter.get('/:id', function(req, res) {
    var example = examples.filter(function(ex) { return ex.id === req.params.id })[0];
    res.send({example: example});
  });

  examplesRouter.put('/:id', function(req, res) {
    var example = examples.filter(function(ex) { return ex.id === req.params.id })[0];
    var editableFields = req.body.example.editable_fields;
    if (example.index%2 === 0) {
      example.status = 'success';
      example.editableFields = editableFields;
      // START- Generate some fake xml output
      example.output = '<example>\n'
      var len = editableFields.length,
        field;
      for (var i = 0; i < len; i++) {
        field = editableFields[i];
        example.output += '  <'+field.name.replace(' ', '_')+'>'+field.value+'</'+field.name.replace(' ', '_')+'>\n'
      }
      example.output += '  <date>'+new Date()+'</date>\n'
      example.output +='</example>';
      // END - Generate some fake xml output
    } else {
      example.status = 'fail';
      example.output = 'Error 500 bla bla at '+new Date();
    }
    res.send({example: example});
  });

  app.use('/api/examples', examplesRouter);
};
