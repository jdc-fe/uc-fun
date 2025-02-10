const { spawn } = require('child_process');

function startDocs() {
  const typedocProcess = spawn('typedoc', ['src', '--watch', '--preserveWatchOutput']);

  typedocProcess.stdout.on('data', (data: String) => {
    console.log(`typedoc: ${data}`);
  });

  typedocProcess.stderr.on('data', (data: String) => {
    console.error(`typedoc error: ${data}`);
  });

  const httpServerProcess = spawn('http-server', ['docs-dist']);
  httpServerProcess.stdout.on('data', (data: String) => {
    console.log(`http-server: ${data}`);
  });

  httpServerProcess.stderr.on('data', (data: String) => {
    console.error(`http-server error: ${data}`);
  });
}

startDocs();