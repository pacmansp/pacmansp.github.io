const text = 'WHAT WOULD BRIAN DO?';
let index = 0;

function typeText() {
    if (index < text.length) {
        document.getElementById('content').innerHTML += text.charAt(index);
        index++;
        setTimeout(typeText, 150); // Speed of typing
    } else {
        setTimeout(redirectToOtherSite, 2000); // Wait for 2 seconds before redirect
    }
}

function redirectToOtherSite() {
    window.location.href = 'https://www.eyenetsecurity.com'; // Replace with your URL
}

window.onload = typeText;
