var usernamelogin = document.getElementById("usernamelogin");
var user_errorlogin = document.getElementById('userloginerror');
usernamelogin.addEventListener("blur", proveraloginuser);
function proveraloginuser(){
    if(usernamelogin.value == ""){
        user_errorlogin.innerHTML="Enter your username, please!";
    }
}