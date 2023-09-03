const path = require('path');

const a = path.basename('C:\\temp\\myfile.html');

const b = path.dirname('/foo/bar/baz/asdf/quux');
console.log(a);
console.log(b);

console.log(path.extname(__filename));
console.log(__filename);