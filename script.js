document.getElementById("date").textContent =
    new Date().toLocaleDateString()
;

document
.getElementById("download-btn")
.addEventListener("click", function () {
    document.getElementById("download-btn").style.visibility = "hidden";
    setTimeout(function () {
        document.getElementById("download-btn").style.visibility = "visible";
    }, 2000);
    const element = document.querySelector(".container");
    html2pdf(element);
});