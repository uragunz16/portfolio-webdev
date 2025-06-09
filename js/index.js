document.querySelectorAll('.skill-progress').forEach(bar => {
  bar.style.width = bar.getAttribute('data-width');
});

/* 
function openProject(projectName) {
    // Redirect to the new page based on the project name
    // window.location.href = projectName + ".html";

  // const projectURL =  document.getElementById(projectName);
  // if (projectURL) {
  //   window.open(projectName + ".html", "_blank");
  // }

  window.open(projectName + ".html", "_blank");
}
*/ 

document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', function() {
        const projectName = this.getAttribute('onclick').match(/'([^']+)'/)[1]; 
        if (projectName) {
            window.open(projectName + ".html", "_blank"); // Opens in a new tab
        }
    });
});

// function openProject(projectName) {
//   console.log(projectName, "openProject is clicked");
// }