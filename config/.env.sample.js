const envBuild = {
  'server': [
    'PORT=3050'
  ],
  'client': [
    'REST_SERVER_URL=http://localhost:3030',
    'EVENTS_SERVER_URL=http://localhost:3031',
    'STATS_SERVER_URL=http://localhost:3032',
    'SOCKET_SERVER_URL=http://localhost:3033',
  ]
};

module.exports = envBuild;