module.exports = function(app) {
  var express = require('express');
  var scenariosRouter = express.Router();
  scenariosRouter.get('/', function(req, res) {
    res.send({
      scenarios: [
        {
          id: 'cricket-fixtures',
          description: "cricket_fixtures.rb",
          example_ids: ['change-player-name','perform-a-player-substitution','set-result','penalty-shot','freekick-shot','injure-a-player']
        },
        {
          id: 'english-premier-league',
          description: "english_premier_league.rb",
          example_ids: ['set-minute', 'add-extra-time']
        },
        {
          id: 'world-cup-competition',
          description: "world_cup_competition.rb",
          example_ids: ['perform-substituion-in-a-given-minute']
        },
        {
          id: 'world-cup-match',
          description: "world_cup_match.rb",
          example_ids: ['set-classification']
        }
      ]
    });
  });
  app.use('/api/scenarios', scenariosRouter);
};
