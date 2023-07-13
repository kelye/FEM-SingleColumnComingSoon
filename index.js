function ValidateEmail(emailtest){
    var emailRegex =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    // var test = emailtest
    // console.log(test);
    

    if(emailtest.value.match(emailRegex)){
        alert("shit matches yo");
        // document.emailform.emailname.focus()
    }
    else{
        // document.emailform.emailname.focus()
        alert("bricked");
    }
    
}