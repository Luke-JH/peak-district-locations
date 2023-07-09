const replace = require('replace-in-file');

const options = {
  files: 'dist/index.html',
  from: /<link href="\/dist\/output.css" rel="stylesheet">/,
  to: '<link href="./output.css" rel="stylesheet">',
};

try {
  const changes = replace.sync(options);
  console.log('Modified files:', changes.join(', '));
} catch (error) {
  console.error('Error occurred:', error);
}
