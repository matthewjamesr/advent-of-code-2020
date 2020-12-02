var fs = require('fs');

var passwords = fs.readFileSync('02dec.txt', 'utf8').toString().split('\n');
var valid = 0;

passwords.forEach(function (password) {
    var minCount = /[^-]{1,3}/.exec(password)[0];
    var maxCount = /(?<=-)(.{1,3})(?=\s)/.exec(password)[0];
    var letter = /(?=.:)./.exec(password);
    var password = /(?<=:.)(.*)/.exec(password)[0];
    var countRegex = new RegExp(`${letter}`, 'g');
    var count = (password.match(countRegex) || []).length;
    //console.log(`Letter: ${letter}, Min: ${minCount}, Max: ${maxCount}; Counted: ${count}`)

    if (count >= minCount && count <= maxCount) {
        valid++;
    }
});

console.log(valid)