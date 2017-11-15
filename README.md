# hw-13 - FriendFinder

## Live Link (If relevant)
 - www.example.com

## Description on how to use the app

- (need to add)

## Requirements

- Create a friend finder application that takes a users input and outputs a match
- User will be prompted to enter name and attach picture
- They will then be asked 10 questions and will be required to answer on a scale of 1 to 5
- Upon submit, a modal will appear with the best match for the user

## Technologies Used

- Javascript
- Express
- Node
- Heroku

## Code Explaination
- Here, you can either provide a brief summary about your code and perhaps what you learned or you can go into specif detail about how you tackled certain tasks.
- Use code snippets for placing example code and then describing it
- Use subheaders to organize your thoughts
- This is the most important part as it will show other what your code does with out having to download the code. 
- In essense, this will also be a form of notes that you may later reference weeks later

-------------

##Here is an example of what a Readme could look like:

### AJAX Request to Giphy (Example)
I created a function that allowed me to make an AJAX request to the Giphy API and then allowed me to pass through a callback function in order to further process the JSON object that was returned. 

```
var settings = {
  "url": "http://api.giphy.com/v1/gifs/search?q=funny%20cat&api_key=dc6zaTOxFJmzC",
  "method": "GET"
  }
}
function getGiphyList(cb){
	$.ajax(settings).done(function (response) {
	  cb(response)
	});
}