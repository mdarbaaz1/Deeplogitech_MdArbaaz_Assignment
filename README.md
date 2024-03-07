# Deeplogitech-Md-Arbaaz-Assignment

Pls find all the files if you require any additional file pls mail me i will send it asap Thank you

i have put the pictures of my output pls have a look at it

i am fetching the data from the time.com website which i am storing in a string body and then i am waiting until i get all the source code in the body and once i have all the data from the website then i am processing the data which is a function 

then i am splitting the data with the specified target of the latest stories which will give me the top 6 stories from the website 
now in data_required i have my stories now i am running a for loop to further split each of the story to get my title and the link of these stories and pushing these in a resultarray 

now i am creating a local server in which while the code is running if someone calls a request at getTimeStories end point then if the url matches they will recieve a JSON response of the result as shown in the images

# How To run

Download the zip file and open the folder in any code editor My code editor is Visual studio code

Just open the terminal and simply type -- node Answer.js 

then you will be getting the top 6 stories from Time.com as your output

it may take some time to load so pls wait 
then just open your browser and call your GET request http://localhost:8000/getTimeStories this will give your JSON object 

or

You can use postman to post your GET request while the code is running in background

Make sure that the code is running on the background

go to api->then type this-- localhost:8000/getTimeStories

the you should get your GET request

# Thank You
