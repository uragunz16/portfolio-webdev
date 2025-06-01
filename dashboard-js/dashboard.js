// Navigation functionality
document.querySelectorAll('nav a:not(.logout)').forEach(link => {
    link.addEventListener('click', function(e) {
    e.preventDefault();                
// Remove active class from all links
    document.querySelectorAll('nav a').forEach(l => l.classList.remove('active'));
                
// Add active class to clicked link
    this.classList.add('active');
    
    showSuccess('Navigation updated');
    });
});

// Profile viewing functionality
function viewProfile(name) {
    showSuccess(`Viewing ${name}'s profile`);
    console.log(`Loading profile for: ${name}`);
}

// View details functionality
function viewDetails(id) {
    showSuccess(`Loading details for employee ID: ${id}`);
    console.log(`Viewing details for employee ID: ${id}`);
}

// Settings toggle
function toggleSettings() {
    showSuccess('Settings panel toggled');
    console.log('Settings toggled');
}

// Logout functionality
function handleLogout() {
    if (confirm('Are you sure you want to log out?')) {
    showSuccess('Logging out...');
    setTimeout(() => {
        console.log('User logged out');
        // In a real app, redirect to login page
        }, 1000);
    }
}

// Success message display
function showSuccess(message) {
    const successMsg = document.getElementById('successMessage');
    successMsg.textContent = message;
    successMsg.classList.add('show');
    
    setTimeout(() => {
        successMsg.classList.remove('show');
    }, 3000);
}

// Add hover effects to table rows
document.querySelectorAll('.table tbody tr').forEach(row => {
    row.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.02)';
        this.style.transition = 'transform 0.2s ease';
    });
            
    ow.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// Initialize dashboard
document.addEventListener('DOMContentLoaded', function() {
    showSuccess('Dashboard loaded successfully');
            
// Add loading animation to buttons when clicked
    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', function() {
            const originalText = this.textContent;
            this.innerHTML = '<div class="loading"></div>';
            
            setTimeout(() => {
                this.textContent = originalText;
            }, 1000);
        });
    });
});

// Search functionality (bonus feature)
function searchEmployees(query) {
    const rows = document.querySelectorAll('.table tbody tr');
    
    rows.forEach(row => {
        const name = row.cells[1].textContent.toLowerCase();
        const dept = row.cells[2].textContent.toLowerCase();
        
        if (name.includes(query.toLowerCase()) || dept.includes(query.toLowerCase())) {
            row.style.display = '';
        } else { 
            row.style.display = 'none';
        }
    });
}

// Real-time clock update (bonus feature)
function updateClock() {
    const now = new Date()
    const timeString = now.toLocaleTimeString();
            
    // Update the title with current time
    document.title = `Attendance Dashboard - ${timeString}`;
}

 // Update clock every second
setInterval(updateClock, 1000);