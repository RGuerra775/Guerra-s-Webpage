function showElement() {
    element = document.querySelector('.h3a');
      element.style.visibility = 'visible';
}

function hideElement() {
    element = document.querySelector('.h3a');
      element.style.visibility = 'hidden';
}

      function validate() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if ( username == "root" && password == "root") {
        alert ("Login successfully");
        window.open("https://rguerra775.github.io/Personal-website/main/index")
        return false;
    }
    else{
        showElement;
        //await delay(2000);
        //hideElement;
    }
}