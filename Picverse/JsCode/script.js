document.addEventListener("DOMContentLoaded", function () {
  // Initialize AOS if available
  if (typeof AOS !== 'undefined') {
    AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            offset: 100
        });
  }
});

// header display
document.addEventListener("DOMContentLoaded", () =>{
  fetch('head.html')
    .then(res => res.text())
    .then(data =>{
      document.getElementById('head-placeholder').innerHTML = data;

     // Setelah head dimuat, atur judul halaman
      const path = window.location.pathname;
      let pageTitle = "";

      if (path.includes("gallery.html")) {
        pageTitle = "Gallery";
      } 
      else if (path.includes("submission.html")) {
        pageTitle = "Artwork Submission";
      } 
      else if (path.includes("community.html")) {
        pageTitle = "Community Forum";
      } 
      else if (path.includes("aboutUs.html")) {
        pageTitle = "About Us";
      } 
      else {
        pageTitle = "Welcome to Picverse";
      }

      const pageTitleElement = document.getElementById('page-title');
      if (pageTitleElement) {
        pageTitleElement.textContent = pageTitle;
      }

      // Set active navigation link after header is loaded
      setActiveNavLink();
    });
});

// footer display
document.addEventListener("DOMContentLoaded", () =>{
  fetch('foot.html')
    .then(res => res.text())
    .then(data =>{
      document.getElementById('foot-placeholder').innerHTML = data;
    });
});

// Function to set active navigation link
function setActiveNavLink() {
  const path = window.location.pathname;
  const navLinks = document.querySelectorAll('.navbar-center a');
  const logoLink = document.querySelector('.navbar-left a');
  
// Remove active class from all links and logo
  navLinks.forEach(link => {
    link.classList.remove('active');
  });
  
  if (logoLink) {
    logoLink.classList.remove('active');
  }
  
  // Check if we're on homepage
  const isHomepage = path.includes('homepage.html') || 
                    path.includes('index.html') || 
                    path.endsWith('/') || 
                    path === '' ||
                    path.split('/').pop() === '' ||
                    path.split('/').pop() === 'homepage.html';
  
  if (isHomepage) {
    // Highlight logo for homepage
    if (logoLink) {
      logoLink.classList.add('active');
    }
  } else {
    // Add active class to current page link for other pages
    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      
      if (path.includes(href)) {
        link.classList.add('active');
      }
    });
  }
}