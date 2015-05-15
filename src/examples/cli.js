var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);
rl.setPrompt('Woah there! Do you know how fast you were typing?');
rl.prompt();
rl.on('line', function(line) {
    if (line === "no") rl.close();
    rl.prompt();
}).on('close',function(){
    process.exit(0);
});