let errorMsg = document.getElementById("error-msg");
let emaildId = document.getElementById("email-id");
let emailRegex =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function checker(){
    if(emaildId.value.match(emailRegex)){
        console.log("shit matches yo");
        return true;
    }
    else{
        console.log("bricked");
        errorMsg.style.display="inline-block";
        emaildId.style.border= '1px solid hsl(354, 100%, 66%)';
        return false;
    }
    
}