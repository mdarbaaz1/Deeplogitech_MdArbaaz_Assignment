const https = require("https");
const fs = require("fs");

const result = []

const url = "https://time.com/";

https.get(url, (res) => {
  let body = '';

  res.on('data', (chunk) => {
    body += chunk;
  });

  res.on('end', () => {
    fs.writeFile("Time.html", body, (err) => {
      if (err) {
        console.error(err);
        return;
      }
      processData(body);
    });
  });
}).on('error', (err) => {
  console.error("Error making HTTP request:", err);
});

function processData(htmlContent) {
 
  const data_required = htmlContent.split('<li class="latest-stories__item">');
  // console.log(data_required);
  console.log("These are the latest 6 stories from times.com");

  for (let i = 1; i <= 6; i++) {
    const link_part = data_required[i];
    const data_part = link_part.split('"');
    const link = "https://time.com" + data_part[1];
    const title = data_part[4].split('>')[1].split("</h3")[0];
    result.push({title,link});
    console.log("        ");
    console.log('Title : ' + title);
    console.log('Link : ' + link);
  }
}

var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'application/json' });
res.write(JSON.stringify(result));
res.end();
}).listen(3000, function(){
 console.log("server listening at port 3000"); //the server object listens on port 3000
});
