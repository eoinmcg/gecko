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


const results = [];
for (let n in files) {
  if (files[n].indexOf(ext) !== -1) {
    let file = 'a/' + files[n],
        key = files[n].replace(ext, '');
    encoded[key] = encode('a/'+files[n]);
    results.push({
      key: key,
      size: fs.statSync(file).size,
      encoded: encoded[key].length
    });
    totalImages += 1;
  }
}

console.table(results);

console.log('Total [files]: ', results.reduce((total, obj) => obj.size + total,0));
console.log('Total [encoded]: ', results.reduce((total, obj) => obj.encoded + total,0));

encoded = JSON.stringify(encoded);
encoded = encoded.replace(re, "'");
output += encoded + ';';

console.log('IMAGES ENCODED');
console.log('BYTES: ' + output.length);
console.log('IMAGES: ' + totalImages);

fs.writeFileSync('src/game/data/images.js', output);
