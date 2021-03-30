const fs = require('fs');

// writing files
const writeFile = fileContent => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./dist/readme.md', fileContent, err => {
      if (err) {
        reject(err);
        return;
      }
      console.log('Readme file generated inside dist folder');
      resolve({
        ok: true,
        message: 'Readme document Generated!'
      });
    });
  });
};

module.exports = writeFile;