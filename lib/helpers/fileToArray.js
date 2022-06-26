const fs = require('fs');

function convertFileToArray(name) {
 return new Promise((res, rej) => {
  fs.readFile(name, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
  
    const splited = data
                      .split('\r\n');
    fs.writeFile(name + '.js', JSON.stringify(splited), function (err) {
      if (err) return console.log(err);
      
    })
    return res(splited);
  });
})
}

let name = 'phoneCodes';
convertFileToArray('./txt/' + name + '.txt').then(res => console.log(res));
