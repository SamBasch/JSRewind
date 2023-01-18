//entry point AKA controller

function getUserInput() {
    let userInput = document.getElementById('userString').value ;
   revString = reverseTheStringFA(userInput);
   displayString(revString);
}



//logic function
//reverse string



function reverseTheStringFA(string) {

    let revString = '';



    for(let i = string.length - 1; i >= 0; i--) {
           revString += string[i];
           
           
    }
    return revString;

}






//view function
function displayString(revString) {
    document.getElementById('results').textContent = revString;
    document.getElementById('alert').classList.remove('invisible');

}