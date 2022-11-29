const readline = require("readline");

const { stdin: input, stdout: output, stdout, stderr } = require("process");
const rl = readline.createInterface({ input, output, terminal: true });
const os = require("os");
const process = require('process');
const { readdirSync, readFileSync } = require("fs");
const { exec, execSync } = require("child_process");
let currentDir = os.homedir().trim();
process.stdout.write("> ");
rl.on("line", (input) => {
  const args = input.trim().split(' ')
  if (args[0] === 'cd') {
    currentDir += `\\${args[1]}`
    console.log(currentDir)
  }
  if (args[0] === 'ls') {
    const ls = readdirSync(currentDir)
    console.log(ls)
  }
  if (args[0] === 'pwd') {
    console.log('> '+ currentDir)
  }
  if (args[0] === 'node') {
    console.log(process.pid)
    exec(`node ${args[1]}`, (error, stdout, stderr) =>{
      if(!error){
        return console.log(stdout)
      }
        console.log(error.message)
    } )
   }
   if (args[0] === 'pidkill') {
    execSync(`taskkill /F /PID ${args[1]}`)
   }
});
