const titles = document.querySelectorAll(".pl_a");
var project_title = document.getElementById("project_title");
var isClickedTitle;

titles.forEach(title => {
    title.addEventListener("click", (e) => {
        captureTitle(title.text);
    });
});

function captureTitle(title) {
    isClickedTitle = title;
    project_title.innerHTML = "<span class='pointer'>> </span>" + title;
    titles.forEach(title => {
        if (title.text === isClickedTitle) {
            title.style.color = "#7cfc00";
            title.style.borderBottom = "2px solid #7cfc00";
        } else {
            title.style.color = "rgb(245, 245, 245)";
            title.style.borderBottom = "none";
        }
    });
}

