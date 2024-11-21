//Include HTTP Module,os module,path module
const http = require('http');
const os = require('os');
const path = require('path');
//Create Server
const server = http.createServer((req, res) => {
   if (req.url === '/details') {
res.writeHead(200, { 'Content-Type': 'text/html' });
       // OS module information
       const osInfo = `
<h1>OS Information</h1>
<p>Platform: ${os.platform()}</p>
<p>Architecture: ${os.arch()}</p>
<p>CPU Info: ${JSON.stringify(os.cpus())}</p>
<p>Total Memory: ${os.totalmem()}</p>
<p>Free Memory: ${os.freemem()}</p>
   `;
       // Path module information
       const filePath = path.join(__dirname, 'files', 'example.txt');
       const parsedPath = path.parse(filePath);
       const pathInfo = `
<h1>Path Information</h1>
<p>File Path: ${filePath}</p>
<p>Parsed Path: ${JSON.stringify(parsedPath)}</p>
    `;
        // Combining OS and Path info
        const combinedInfo = osInfo + pathInfo;
        // Sending the HTML response
 res.end(`
 <!DOCTYPE html>
 <html>
 <head>
 <title>System Details</title>
 </head>
 <body>
        ${combinedInfo}
 </body>
 </html>
    `);
    } else {
 res.writeHead(404, { 'Content-Type': 'text/plain' });
 res.end('Page Not Found');
    }
 });
 const PORT = 3000;
 server.listen(PORT, () => {
 console.log("Server running on port ${PORT}");
});