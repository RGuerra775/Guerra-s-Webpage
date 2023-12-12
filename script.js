async function showElement() {
    element = document.querySelector('.h3a');
      element.style.visibility = 'visible';
      await sleep(1000)
      element.style.visibility = 'hidden'; 
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function validate() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    if ( username == "root" && password == "root") {
        alert ("Login successfully");
        window.open("https://rguerra775.github.io/Personal-website/main/index")
    }
    else{
        showElement();
    }
}

function show1Element() {
    element = document.querySelector('.btn-login');
        element.style.visibility = 'hidden'
    element = document.querySelector('.login-div');
      element.style.visibility = 'visible';
}
