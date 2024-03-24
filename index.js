/*we need to save a reference to our display DOM elements*/

let display = document.getElementById('display');

/*We will store the button references in an array by converting it to an array using Array.form()*/

let buttons = Array.from(document.getElementsByClassName('button'));

/*The next step is to add event listener to the buttons and build the functions. To do this we will map through the buttons and add a click event listener for each. We will use e.target.innerText, which will simply give back the label of the button that was clicked.*/

buttons.map(button => {
button.addEventListener('click',(e) => {
switch(e.target.innerText){

    /*When 'AC' button is clicked the display would be cleared. This is achieved by setting the innerText to an empty string. Use of 'break' at the end is needed to prevent the execution of the code defined in other case blocks.*/
 
    case 'AC':
        display.innerText = '';
        break;

/*For the equal button we will use the built in JS 'eval' function.The display's content uses 'eval' and return the result by calling the display's innerText. To handle errors it has been wrapped into a 'try catch' block.*/
   
    case '=':
         try {
            display.innerText = eval(display.innerText);

        }catch {
             display.innerText = "Error"    
        }
        break;

/*Back arrow functions through use of String.slice() method.*/
    case '←':
        if(display.innerText){
           display.innerText = display.innerText.slice(0,-1);
        }
        break;

/*In the default case, so whenever the user don't hit these special symbols we just want to append the clicked button's innerText to the display's innerText. We can use += operator to do that.*/
    default:
        display.innerText += e.target.innerText;
}
});

});