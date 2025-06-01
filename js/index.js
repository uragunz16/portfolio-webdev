document.querySelectorAll('.skill-progress').forEach(bar => {
  bar.style.width = bar.getAttribute('data-width');
});

// 
function openProject(projectName) {
    // Redirect to the new page based on the project name
    window.location.href = projectName + ".html";
}