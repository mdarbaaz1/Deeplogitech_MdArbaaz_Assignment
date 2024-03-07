
// If you want more information about the project and how to run it please read readme file

const https = require("https");
const request = require("request");
let express = require("express");
let app = express();
const fs = require("fs");


const port = 7000;

const server = https.createServer(function (req, res) {
 
  res.end();
});


server.listen(port, function (error) {
  // Checking for any error or not
  if (error) {
    console.log("Something went wrong", error);
  }
  
  else {
    console.log("Server is listening on port" + port);
  }
});

const result = []


request(
  {
    uri: "https://time.com/",
  },
  function (err, res, body) {
    
    fs.writeFile("Time.html", body, err => {
      if (err) {
        console.error(err);
      }
      
    });
  }
);

fs.readFile("Time.html", "utf8", (err, data) => {
  if (err) {
    console.error(err);
  }
  const data_required = data.split('<li class="latest-stories__item">');// Here i am extracting the required data from the latest-stories
  // console.log(data_required);
  console.log("These are the latest 6 stories from times.com");
  for (var i = 1;i<=6;i++)
  {
    
    const link_part = data_required[i];
    // console.log(link_part);
    const data_part = link_part.split('"');
    // console.log(Answer);
    const link = "https://time.com"+data_part[1]; 
      
    
    const title = data_part[4].split('>')[1].split("</h3")[0] 
    result.push({title,link});
	
	console.log("        ");
    console.log('Title : ' + title); // i am printing the title
	console.log('Link : ' + link); // i am printing the link
    

  }
});

console.log(result);

app.get("/getTimeStories", function (req, res) {
  res.json(result);
});
 

app.listen(8000);