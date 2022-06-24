const fs = require('fs');

function convertFileToArray(path) {
 return new Promise((res, rej) => {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
  
    const splited = data
                      .split('\r\n')
    fs.writeFile('cities.js', JSON.stringify(splited), function (err) {
      if (err) return console.log(err);
      
    })
    return res(splited)
  });
})
}

convertFileToArray('./txt/cities.txt').then(res => console.log(res))
