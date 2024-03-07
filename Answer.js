const https = require("https");
const fs = require("fs");

const resultarray = []

const url = "https://time.com/";

https.get(url, (res) => {
  let body = '';

  res.on('data', (datarecieving) => {
    body += datarecieving;
  });

  res.on('end', () => {
    processHtmlData(body);
  });
}).on('error', (err) => {
  console.error("Error making HTTP request:", err);
});

function processHtmlData(htmlContent) {
 
  const data_required = htmlContent.split('<li class="latest-stories__item">'); // Here i am Extracting the top 6 latest stories 
  // console.log(data_required);
  console.log("These are the latest 6 stories from times.com");

  for (let i = 1; i <= 6; i++) {
    const answer_part = data_required[i]; 
    const data_part = answer_part.split('"');
    const link = "https://time.com" + data_part[1];// Here i am extracting the link from the each latest story
    const title = data_part[4].split('>')[1].split("</h3")[0]; //  Here i am extracting the title from the each latest story
    resultarray.push({title,link});
    console.log("        ");
    console.log('Title : ' + title);
    console.log('Link : ' + link);
  }
}

// Creating a server 
var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  var url = req.url;
 if(url ==='/getTimeStories'){
    res.write(JSON.stringify(resultarray)); 
    res.end();
 }
}).listen(8000, function(){
 console.log("server listening at port 8000"); //the server object listens on port 3000
});
