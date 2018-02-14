const envBuild = {
  'server': [
    'PORT=3050'
  ],
  'client': [
    'DEV_REST_SERVER_URL=http://localhost:3030',
    'DEV_EVENT_SERVER_URL=http://localhost:3031',
  ]
};

module.exports = envBuild;