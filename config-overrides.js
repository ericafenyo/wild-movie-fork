const path = require('path');

module.exports = (config, env) => {
  config.resolve = {
    alias: {
      components: path.resolve(__dirname, 'src/components'),
      mapper: path.resolve(__dirname, 'src/data/Mapper'),
      'view-states': path.resolve(__dirname, 'src/components/view-states')
    },
  };
  return config;
};
