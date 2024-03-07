# Deeplogitech-Md-Arbaaz-Assignment

Pls find all the files if you require any additional file pls mail me i will send it asap Thank you

i have put the pictures of my output pls have a look at it

# This is the part where i downloaded the source code from Time.com

To extract the latest-stories i have requested the source code and write it in a HTML file 
When ever we run the code it will write the latest source code of Time Website in that HTML File 
This will Help us to recieve the latest Stories as the HTML file is Dynamically Updated and you can cross-check the output by just checking if the latest stories match or not 

# This is the processing part of the HTML file with basic Javascript 
Then we are reading the HTML file

Now using this HTML file i have extracted the data_required by splitting all the li-class_item where our top 6 latest stories are present  which we require and then i am further spliting to extract the title and link from the each of the data_part 
Then i have just pushed the tile and link in the result Array and printed our required output as required in the assignment

Then i have  created a GET request at localhost:8000 and the end point as /getTimeStories.


# How To run

Download the zip file and open the folder in any code editor My code editor is Visual studio code

Just open the terminal and simply type -- node Answer.js 

then you will be getting the top 6 stories from Time.com as your output

You can use postman to post your GET request while the code is running in background

Make sure that the code is running on the background

go to api->then type this-- localhost:8000/getTimeStories

the you should get your GET request

# Thank You
