// fs 모듈 사용
// node fs.js
var fs = require('fs');

fs.writeFile('message.txt', 'Hello Node', function (err) { // 파일이름/ 파일에 들어갈 내용/ 콜백
  if (err) throw err;
  console.log('It\'s saved!');
});
