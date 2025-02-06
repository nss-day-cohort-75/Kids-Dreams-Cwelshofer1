# Events and Debugging Assessment

Time to assess how well you have learned to use the debugging tools in Chrome Dev Tools, and writing click event listeners. This application is to show kids with illnesses and the memories the would like to make. Celebrities sign up to help kids make memories.

> 🧨 Make sure you answer the vocabulary and understanding questions at the end of this document before notifying your coaches that you are done with the project

## Event Listeners to Create

1. When the kid name is clicked, it should display their wish.
1. When the celebrity name is clicked, it should display their sport.
1. The pairings list should should contain the pairing in the following format.
    ```html
    {child name} will be making memories with {celebrity name}, a {celebrity sport} star, by {child wish}
    ```

Below is an animation showing how the application should look when complete and how the event listeners should work.

<img src="./images/debugging-events-assessment.gif" width="700px">

## Setup

Your instruction team will provide a link for you to create your assessment repository. Once your repo is created, clone it to your machine.

1. Make sure you are in your `workspace` directory.
1. `git clone {github repo SSH string}`.
1. `cd` into the directory it creates.
1. `code .` to open the project code.
1. Use the `serve` command to start the web server.
1. Open the URL provided in Chrome.

Make sure your Developer Tools are open at all times while working on this project. Use the messages provided in the Console to determine what code needs to be fixed or implemented, and use breakpoints in the Sources tab to step through your code as you debug.

## Vocabulary and Understanding

Before you click the "Complete Assessment" button on the Learning Platform, add your answers below each question and make a commit.

1. When a child is clicked on in the browser, which module contains the code that will execute on that event happening? Can you explain the algorithm of that logic?

   > Kids.js is the module that will execute the code, document.addEventListener() is a function where document represents your webpage, and addEventListener() sets up a function to be executed on the DOM. In this case we are defining a "click" function inside the document.addEventListener function. Next to click on specific kids we have to target them using .target. We use datasets to store data in the HTML to access so we can use that data to make the code execute exactly the way we want in the event Listener. We also use things like for and if statements so that when the child is clicked on, we get a specfic thing to happen for this click event listener. So after one child is clicked on in the browser, it goes through all of the code inside the document.addEventListener and takes that code and executes to make what is inside the Event listener to happen when clicked on.

2. In the **Pairings** module, why must the `findCelebrityMatch()` function be invoked inside the `for..of` loop that iterates the kids array?

   > Because it needs the information from the kids array in the database to function correctly. In the function, to find the match of the celebrity to the child we need data from both kids and celebrities arrays inside the database. We need to compare the celebrity id to the kids celebrityId to make sure they match up. Where findCelebrityMatch is defined, it only iterates through the celebrites list and not the kids one. We cannot make a match of the two ids needed from kids celebrityId and celebrity id. So when it is invoked through the for loop that iterates the kids array, it can function properly and compare the two ids one from the celebrities array and one from the kids array. That way we know the right kid is being assigned to the right celebrity. 

3. In the **CelebrityList** module, can you describe how the name of the sport that the celebrity plays can be displayed in the window alert text?

   > Yes, it all starts with the document.addEventListener() as stated before we are doing the same thing here as the kids on question 1. When you click on the celebrity the name of the sport is displayed in a window.alert. A window.alert is a function that pops up on the top of the page giving you information when executed. So to get to the point where we are getting the information from the database about what sport the clicked celebrity plays we have to go through some steps in the addEventListener. first we want to know that what we are clicking on is a celebrity. We use the .target function and datasets in an if statement to ensure what we are clicking on is a celebrity. if (itemClicked.dataset.type === "celebrity") is an if statement that targets the HTML datasets to make sure whatever we click on has the dataset type of celebrity. If that is true we move on to the next part of the code. There is a for loop iterating over the celebrities array so we can get that information to use in another if statement, and also use to get the information from the celebrites array about which celebrity plays what sport. Next we check if the celebrity id we clicked on and the celebrity id from the database match, so we know when it is clicked on, the clicked on name is display the sport they play, and not someone elses. lastly, the window.alert is a function that displays the window alert text, and function we use template literals to pass in the informations from the celebrities array. So we put this information inside the window.alert function: ` `${celebrity.name} is a ${celebrity.sport}` since we are still in the for loop and have iterated over the celebrites array we can get the information of the celebrity name and sport. Now when we click on the celebrity we get the correct celebrity and the sports information from them to display when clicked on. Because it is a click event it runs all code in document.eventlistener() as described and display the correct celebrity and the sport they play.

4. Can you describe, in detail, the algorithm that is in the `main` module?

   > The main.js starts off by importing the functions Pairings, Celebrities, and Kids. The name of the functions is the same as the module that they come from. After that a variable mainContainer is made with the function document.querySelector("#container"). This is to target the index.html specifically the main from the HTML as it has an id="container", the document.querySelector is using #'s to target this specific id, the main apart of the index.html. The next code that happens is that another variable is made, applicationHTML and this holds HTML template literals which allows you to embed expressions inside a string. There is more HTML written inside the template literals such as h1 section and article this is html that is going to be inserted in to the DOM later. After that we have the expression Kids which holds the kids function. This function from kids.js holds a template literal that holds an expression that displays kid.name Because this expression is in a for loop it iterates through all of the kids names and makes a list of them. Then it is written to return the template literal of all the kids names at the end of the function. So when Kids() is called on main.js, the list kids names is displayed on the  template literal. Then there is more HTML of the same mentioned before. After that there is another expression with the function ${Celebrities()}. This is almost exactly the same has the Kids function, it generates a list of celebrities names to be put on the template literal. Then there is more HTML again as mentioned and the last expression is function ${Pairings()} This one is a bit different from the Kids function and the Celebrities function. It is taking information from two functions and using the information to be put into expressions on the template literal. It is iterating though the kids array from the database using a for loop to get data and the two functions are iterating through the celebrities array to get data for the template literal. So what gets displayed from calling this function has data from the kids array and the celebrities array. It is a list of wishes includings of childern names, and the celebrities names, the sport the celebrities play and the childs wish all into one sentence. After that there is just a little more HTML and then the end of the template literal. The last line of code is mainContainer.innerHTML = applicationHTML. mainContainer is taking the function document.querySelector and still targeting (#container) on index.html. InnerHMTL is targeting the content inside the main id="container" and putting in all of the template literal, applicationHMTL. That way all of the information stored in the template literal will now be put in the content for main id="container". So it will all render on the DOM correctly and list everything that was returned by those functions put in expressions for the template literal. That way everything is displayed correctly and is in order.