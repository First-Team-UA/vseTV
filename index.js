const { spawn } = require('child_process');
 
const frontend = spawn('npm', ['run', 'start:frontend'], { stdio: 'inherit' });
 
const backend = spawn('npm', ['run', 'start:backend'], { stdio: 'inherit' });

frontend.on('close', (code) => {
  console.log(`Frontend process exited with code ${code}`);
});

backend.on('close', (code) => {
  console.log(`Backend process exited with code ${code}`);
});