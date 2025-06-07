document.querySelectorAll('.skill-progress').forEach(bar => {
  bar.style.width = bar.getAttribute('data-width');
});

// 
function openProject(projectName) {
    // // Redirect to the new page based on the project name
    // window.location.href = projectName + ".html";
    // get the content
    let projectContainer = document.getElementById("dashboard");

    // Fetch the project content dynamically
    fetch(projectName + ".html")
    .then(response => response.text())
    .then(data => {
      projectContainer.innerHTML = data;
    })
    .catch(error => console.error("Error loading project", error));
};

