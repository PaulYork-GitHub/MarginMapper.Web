document.addEventListener("DOMContentLoaded", function() {
    //const tenant = "marginmapper";
    //const policy = "B2C_1_sign_up_and_sign_in";
    //const clientId = "a78da87e-734e-425c-8f02-2d3ac735aa4d";
    //const redirectUri = encodeURIComponent(window.location.origin + "/signin-mm");

    const appUrl = "https://localhost:7008";

    // Get all elements with the "app-signin" class (buttons and anchors)
    const signinElements = document.querySelectorAll(".app-auth-link");

    // Loop through each element and attach the click event
    signinElements.forEach(function(element) {
        element.addEventListener("click", function(event) {
            event.preventDefault();  // Prevent default action (for links)
            window.location.href = appUrl;
        });
    });
});