let fs = require('fs');
let path = require('path');

function ergodicDirSync(dir, todo) {
  let files = fs.readdirSync(dir);
  files.forEach(function (file_name) {
    let full_path = path.join(dir, file_name);

    let stat = fs.statSync(full_path);

    if (stat.isDirectory()) {
      return ergodicDirSync(full_path, todo);
    }

    todo(file_name, full_path, dir);
  })
}

exports.dirSync = ergodicDirSync;
