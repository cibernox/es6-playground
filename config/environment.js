/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.endpoints = [
      { id: 'dev',  value: 'http://localhost:5000' },
      { id: 'si',   value: 'http://localhost:5000' },
      { id: 'test', value: 'http://localhost:5000' }
    ];
  }

  if (environment === 'test') {
    ENV.endpoints = [
      { id: 'dev',  value: 'http://localhost:5000' },
      { id: 'si',   value: 'http://localhost:5000' },
      { id: 'test', value: 'http://localhost:5000' }
    ];
  }

  if (environment === 'production') {
    ENV.endpoints = [
      { id: 'dev',  value: 'http://partner-api-sportsapp-dev.uat-thetimes.co.uk' },
      { id: 'si',   value: 'http://partner-api-sportsapp-si.uat-thetimes.co.uk' },
      { id: 'test', value: 'http://partner-api-sportsapp-test.uat-thetimes.co.uk' }
    ];
  }

  return ENV;
};
