var linkedinBtn = document.getElementById("linkedin-btn");
var githubBtn = document.getElementById("github-btn");

linkedinBtn.addEventListener("click", function() {
    console.log("LinkedIn button clicked");
    window.location.href = "https://linkedin.com/in/jonathan-tanadi";
});

githubBtn.addEventListener("click", function() {
    console.log("GitHub button clicked");
    window.location.href = "https://github.com/JonathanSamuelTan";
});
