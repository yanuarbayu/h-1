// JavaScript for Sewa Mobil Website

document.addEventListener("DOMContentLoaded", () => {
    // Smooth Scroll for Navbar Links
    const navLinks = document.querySelectorAll(".nav-link");
  
    navLinks.forEach(link => {
      link.addEventListener("click", event => {
        event.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
  
        if (targetSection) {
          window.scrollTo({
            top: targetSection.offsetTop - 80, // Offset for sticky navbar
            behavior: "smooth",
          });
        }
      });
    });
  
    // Update Active Link on Scroll
    const sections = document.querySelectorAll("section");
    const navItems = document.querySelectorAll(".nav-link");
  
    const updateActiveLink = () => {
      let index = sections.length;
  
      while (--index && window.scrollY + 100 < sections[index].offsetTop) {}
  
      navItems.forEach(link => link.classList.remove("active"));
      navItems[index]?.classList.add("active");
    };
  
    window.addEventListener("scroll", updateActiveLink);
  
    // Dynamic Pricing Example (Optional)
    const cards = document.querySelectorAll(".card");
  
    cards.forEach(card => {
      const button = card.querySelector(".btn-primary");
  
      button.addEventListener("click", () => {
        alert("Atur Tanggal Penjemputan dan Sewa Mobil Anda.");
      });
    });
  
    // Placeholder for Form Submission (Login/Sign Up)
    const signupButton = document.querySelector(".btn-primary[href='login.html']");
    const signinButton = document.querySelector(".btn-outline-secondary[href='login.html']");
  
    signupButton?.addEventListener("click", event => {
      event.preventDefault();
      alert("Fitur Sign Up dalam pengembangan.");
    });
  
    signinButton?.addEventListener("click", event => {
      event.preventDefault();
      alert("Fitur Sign In dalam pengembangan.");
    });
  
    // Reviews Section - Dynamic Star Ratings (Example)
    const ratings = document.querySelectorAll(".rating");
  
    ratings.forEach(rating => {
      const stars = rating.innerText.trim().length;
      rating.innerHTML = "★".repeat(stars) + "☆".repeat(5 - stars);
    });
  });
  