
function generatePassword(){
    
    let uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let lowercase = 'abcdefghijklmnopqrstuvwxyz'
    let numbers = '1234567890';
    let specialCharacter = '!@#$%&*';
    let allCharacters = lowercase + uppercase + numbers + specialCharacter; 
    
    let password = '';
    password += uppercase[Math.floor(Math.random()*uppercase.length)];
    password += lowercase[Math.floor(Math.random()*lowercase.length)];
    password += numbers[Math.floor(Math.random()*numbers.length)];
    password += specialCharacter[Math.floor(Math.random()*specialCharacter.length)];
    
    for(let i=4;i<10;i++){
        password += allCharacters[Math.floor(Math.random() * allCharacters.length)]
    }
    console.log(password)
    
    let output = document.getElementById("output");
    output.innerHTML= password;

    
}
// generatePassword()
// console.log(password)

 let button = document.getElementById("btn");
button.addEventListener('click',generatePassword);

function copy(){
    let passwordTxt =  document.getElementById("output").innerText;
    console.log(passwordTxt)


    navigator.clipboard.writeText(passwordTxt).then(function() {
        alert("Text copied to clipboard!");
    }).catch(function(error) {
        alert("Failed to copy text: ", error);
    });
}  



let copybutton =  document.getElementById("copy");

 copybutton.addEventListener("click",copy)

 document.addEventListener('DOMContentLoaded', function () {
    generatePassword();  // Call generatePassword when the page loads
});