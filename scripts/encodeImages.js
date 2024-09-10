const fs = require('fs');

const files = fs.readdirSync('a'),
  ext = '.gif',
  re = /\"/gi;

let totalImages = 0,
  output = 'export default ',
  encoded = {};

function encode(img) {
  var i =  fs.readFileSync(img);
  i = i.toString('base64');
  return i;
};

for (let n in files) {
  if (files[n].indexOf(ext) !== -1) {
    encoded[files[n].replace(ext, '')] = encode('a/'+files[n]);
    totalImages += 1;
  }
}

encoded = JSON.stringify(encoded);
encoded = encoded.replace(re, "'");
output += encoded + ';';

console.log('IMAGES ENCODED');
console.log('BYTES: ' + output.length);
console.log('IMAGES: ' + totalImages);

fs.writeFileSync('src/game/data/images.js', output);
