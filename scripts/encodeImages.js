const fs = require('fs');
const showInfo = (process.argv.slice(2).indexOf('info') !== -1);

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
let key;
for (let n in files) {
  if (files[n].indexOf(ext) !== -1) {
    key = files[n].replace(ext, '');
    let file = 'a/' + files[n];
    encoded[key] = encode('a/'+files[n]);

    let size = fs.statSync(file).size,
        diff = Math.ceil((encoded[key].length / size) * 100) + '%';
    results.push({
      key: key,
      size: size,
      encoded: encoded[key].length,
      diff: diff
    });
    totalImages += 1;
  }
}

if (showInfo) {
  console.table(results);
  console.log('Total [files]: ', results.reduce((total, obj) => obj.size + total,0));
  console.log('Total [encoded]: ', results.reduce((total, obj) => obj.encoded + total,0));
  console.log('');
  console.log('--------------------------------');
  console.log('');
}

encoded = JSON.stringify(encoded);
encoded = encoded.replace(re, "'");
output += encoded + ';';

console.log('IMAGES ENCODED');
console.log('BYTES: ' + output.length);
console.log('IMAGES: ' + totalImages);

fs.writeFileSync('src/game/data/images.js', output);
