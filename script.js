let buttons = document.querySelectorAll("button");
let screen = document.getElementById("screenValue");
//created a varible to store the user input so that can evaluate it
let userValue = "";
//iterating buttons using forEach loop which stored in buttons variable
// e is a variable to iterate each button
buttons.forEach((e) => {
  //adding eventListener for each button using iterating varible "e"
  e.addEventListener("click", (f) => {
    // f is event object
    console.log(f.target);
    //f.target returns the button which is clicked
    //f.target.innerText returns the value of button which is clicked
    let buttonText = f.target.innerText;
    //  created a variable to store the buttons inner text value
    // and making input field value equal to the clicked buttons values
    screen.value += buttonText;
    console.log(buttonText);
    console.log(e);
    if (buttonText == "X") {
      //making X to * whenever user clicking X
      buttonText = "*";
      //making buttons clicked value equal to uservalue
      userValue += buttonText;
      //displaying buttons value in the input field(buttonText)
      screen.value = buttonText;
    } else if (buttonText == "C") {
      userValue = "";
      //clearing the input field
      screen.value = userValue;
    } else if (buttonText == "=") {
//evaluating user input using inbuilt javaScript function called eval

      screen.value = eval(userValue);
    } else {
/*simply storing storing the user input and displaying 
that input in the input field if nothing above conditions happend*/
      userValue += buttonText;
      screen.value = userValue;
    }
  });
});
