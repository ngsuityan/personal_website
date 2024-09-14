'use strict';

// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

document.addEventListener('DOMContentLoaded', function () {
  // Function to show the correct article
  function showArticle(articleId) {
    // Find all potential article containers
    const articles = document.querySelectorAll('article[id], div[id], section[id]');

    // Remove 'active' class from all potential articles
    articles.forEach(article => {
      article.classList.remove('active');
    });

    // Add 'active' class to the target article
    const targetArticle = document.getElementById(articleId);
    if (targetArticle) {
      targetArticle.classList.add('active');
    } else {
      console.error(`Article with id "${articleId}" not found`);
      // If no matching article, try to show the about article
      const aboutArticle = document.getElementById('about');
      if (aboutArticle) {
        aboutArticle.classList.add('active');
      } else {
        console.error('About article not found');
      }
    }
  }

  // Function to handle navigation
  function handleNavigation(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').split('#')[1];
    showArticle(targetId);
    // Update the URL without reloading the page
    history.pushState(null, '', `#${targetId}`);
  }

  // Get the hash from the URL (e.g., #about, #resume, etc.)
  let hash = window.location.hash.substring(1); // Remove the '#'

  // If there's a hash, show the corresponding article
  if (hash) {
    showArticle(hash);
  }

  // Add click event listeners to navigation links
  const navLinks = document.querySelectorAll('a[href^="#"]');
  if (navLinks.length > 0) {
    navLinks.forEach(link => {
      link.addEventListener('click', handleNavigation);
    });
  } else {
    console.error('No navigation links found');
  }
});

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
// modalCloseBtn.addEventListener("click", testimonialsModalFunc);
// overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}

//Portfolio
document.addEventListener("DOMContentLoaded", function () {
  const portfolioItems = [
    {
      id: 1,
      title: "Feasibility Study on using MCDM for E-Voting",
      category: "web development",
      image: "./assets/images/evoting.png",
      description: "Web development<br>Google Scholar Link:https://shorturl.at/euSr3"
    },
    {
      id: 2,
      title: "Simple E-Invoice System for Internal Use",
      category: "web development",
      image: "./assets/images/LCL.png",
      description: "I helped create a simple e-invoicing system for Lim Chai Lan Cleaning Services to generate their monthly customer invoices."
    },
    // Add all portfolio items here...
    {
      id: 3,
      title: "SouthSteel Website Rebranding & Maintenance",
      category: "web development",
      image: "./assets/images/ssb.png",
      description: "I assisted in rebranding and maintaining the website for Southern Steel Berhad, ensuring a modern and user- friendly design."
    },
    {
      id: 4,
      title: "Convert PDF document to Google Docs",
      category: "docs conversion",
      image: "./assets/images/docs1.png",
      description: "I provided a service to convert PDFs into editable Google Docs, ensuring accurate and seamless conversions."
    },
    {
      id: 5,
      title: "Design Vibrant Flyer Design",
      category: "design",
      image: "./assets/images/design1.png",
      description: "I create a vibrant flyer with the help of AI and modified using graphic design tools."
    },
    {
      id: 6,
      title: "Responsive HTML Email Template",
      category: "html/css/js",
      image: "./assets/images/html email template.png",
      description: "I provide service that help to create the responsive email template that responsive and meet all requirements of the client."
    },
    {
      id: 7,
      title: "Claim Form Management System for Internal Use",
      category: "web development",
      image: "./assets/images/Claim Form Management System.png",
      description: "I helped create a Claim Form Management System that help company to let their customer able to raise claim for local and oversea."
    },
    {
      id: 8,
      title: "Youtube Thumbnails",
      category: "design",
      image: "./assets/images/Thumbnails1.png",
      description: "I helped created an eye-catching thumbnail design inspired by Cristiano Ronaldo’s Sueños Cumplidos to engage viewers and drive traffic."
    },
    {
      id: 9,
      title: "Vibrant and Engaging Poster Design For Weekly Zumba Class",
      category: "design",
      image: "./assets/images/zumba poster.png",
      description: "I designed a vibrant poster for our company's weekly Zumba class using AI and Canva."
    },

  ];

  const portfolioList = document.getElementById("portfolioList");
  const portfolioPrevPageBtn = document.getElementById("portfolioPrevPageBtn");
  const portfolioNextPageBtn = document.getElementById("portfolioNextPageBtn");
  const portfolioPageIndicator = document.getElementById("portfolioPageIndicator");
  const filterButtons = document.querySelectorAll("[data-filter-btn]");

  let currentPage = 1;
  const itemsPerPage = 6; // Adjust the number of items per page
  let currentFilter = 'all'; // Default filter

  function renderPortfolioItems(items) {
    portfolioList.innerHTML = items.map(item => `
      <li class="project-item active" data-filter-item data-category="${item.category}">
        <a href="#">
          <figure class="project-img">
            <div class="project-item-icon-box">
              <ion-icon name="eye-outline"></ion-icon>
            </div>
            <img src="${item.image}" alt="${item.title}" loading="lazy">
          </figure>
          <h3 class="project-title">${item.title}</h3>
          <p class="project-category">${item.description}</p>
        </a>
      </li>
    `).join("");
  }

  function filterItems(filter) {
    if (filter === 'all') {
      return portfolioItems;
    } else {
      return portfolioItems.filter(item => item.category === filter);
    }
  }

  function paginate(items) {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return items.slice(start, end);
  }

  function updatePaginationButtons(filteredItems) {
    portfolioPrevPageBtn.disabled = currentPage === 1;
    portfolioNextPageBtn.disabled = currentPage === Math.ceil(filteredItems.length / itemsPerPage);
    portfolioPageIndicator.textContent = `Page ${currentPage}`;
  }

  function updatePortfolioItems() {
    const filteredItems = filterItems(currentFilter);
    const paginatedItems = paginate(filteredItems);
    renderPortfolioItems(paginatedItems);
    updatePaginationButtons(filteredItems);
  }

  filterButtons.forEach(button => {
    button.addEventListener("click", function () {
      filterButtons.forEach(btn => btn.classList.remove("active"));
      this.classList.add("active");
      currentFilter = this.getAttribute("data-category"); // Update current filter based on data attribute
      currentPage = 1; // Reset to the first page on filter change
      updatePortfolioItems();
    });
  });

  portfolioPrevPageBtn.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      updatePortfolioItems();
    }
  });

  portfolioNextPageBtn.addEventListener("click", () => {
    if (currentPage < Math.ceil(filterItems(currentFilter).length / itemsPerPage)) {
      currentPage++;
      updatePortfolioItems();
    }
  });

  // Initial render
  updatePortfolioItems();
});


//Blog
document.addEventListener("DOMContentLoaded", function () {
  const blogPosts = [
    {
      id: 1,
      title: "Welcome to My Blog!",
      date: "Jul 18, 2024",
      category: "Introduction",
      image: "./assets/images/blog-1.png",
      text: "Hello and welcome to my blog! My name is Ng Suit Yan, and I'm thrilled to have you here...",
      link: "./blog/blog-1.html"
    },
    {
      id: 2,
      title: "How to Become a Successful Online Seller",
      date: "Aug 15, 2024",
      category: "E-Commerce",
      image: "./assets/images/blog-2.png",
      text: "Starting an online selling business is a journey filled with challenges and rewards...",
      link: "./blog/blog-2.html"
    },
    {
      id: 3,
      title: "Starting My Freelance Journey in September",
      date: "August 23, 2024",
      category: "Freelancing",
      image: "./assets/images/freelance.png",
      text: "As September approaches, I find myself at the cusp of an exciting new chapter...",
      link: "./blog/blog-3.html"
    },
    {
      id: 4,
      title: "The Lesson I Learned About the Importance of a Handover Checklist",
      date: "August 28, 2024",
      category: "Workplace Tips",
      image: "./assets/images/handover_checklist.png",
      text: "I recently learned a valuable lesson about the importance of preparing a detailed handover checklist before leaving a job...",
      link: "./blog/blog-4.html"
    },
    {
      id: 5,
      title: "思念我最敬爱的妈妈-我一生中最重要的一个人",
      date: "August 30, 2024",
      category: "General",
      image: "./assets/images/mother.png",
      text: "思念我最敬爱的妈妈-我一生中最重要的一个人",
      link: "./blog/blog-5.html"
    },

  ];

  const blogPostsList = document.querySelector(".blog-posts-list");
  const blogPrevPageBtn = document.getElementById("blogPrevPageBtn");
  const blogNextPageBtn = document.getElementById("blogNextPageBtn");
  const blogPageIndicator = document.getElementById("blogPageIndicator");
  const searchInput = document.getElementById("searchInput");

  let currentPage = 1;
  const postsPerPage = 4;

  // Sort posts by date in descending order
  blogPosts.sort((a, b) => new Date(b.date) - new Date(a.date));

  function renderBlogPosts(posts) {
    blogPostsList.innerHTML = posts.map(post => `
      <li class="blog-post-item">
        <a href="${post.link}">
          <figure class="blog-banner-box">
            <img src="${post.image}" alt="${post.title}" loading="lazy">
          </figure>
          <div class="blog-content">
            <div class="blog-meta">
              <p class="blog-category">${post.category}</p>
              <span class="dot"></span>
              <time datetime="${post.date}">${post.date}</time>
            </div>
            <h3 class="h3 blog-item-title">${post.title}</h3>
            <p class="blog-text">${post.text}</p>
          </div>
        </a>
      </li>
    `).join("");
  }

  function paginate(posts) {
    const start = (currentPage - 1) * postsPerPage;
    const end = start + postsPerPage;
    return posts.slice(start, end);
  }

  function searchBlogPosts(query) {
    return blogPosts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()));
  }

  function updatePaginationButtons(filteredPosts) {
    blogPrevPageBtn.disabled = currentPage === 1;
    blogNextPageBtn.disabled = currentPage === Math.ceil(filteredPosts.length / postsPerPage);
    blogPageIndicator.textContent = `Page ${currentPage}`;
  }

  function updateBlogPosts() {
    const query = searchInput.value;
    const filteredPosts = searchBlogPosts(query);
    const paginatedPosts = paginate(filteredPosts);
    renderBlogPosts(paginatedPosts);
    updatePaginationButtons(filteredPosts);
  }

  searchInput.addEventListener("input", () => {
    currentPage = 1; // Reset to first page on search
    updateBlogPosts();
  });

  blogPrevPageBtn.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      updateBlogPosts();
    }
  });

  blogNextPageBtn.addEventListener("click", () => {
    if (currentPage < Math.ceil(searchBlogPosts(searchInput.value).length / postsPerPage)) {
      currentPage++;
      updateBlogPosts();
    }
  });

  // Initial render
  updateBlogPosts();
});

//Hobbies
// Carousel functionality
function setupCarousels() {
  const carousels = document.querySelectorAll('.hobby-carousel');

  carousels.forEach(carousel => {
    const slides = carousel.querySelector('.hobby-carousel-inner');
    const prevBtn = carousel.querySelector('.hobby-carousel-prev');
    const nextBtn = carousel.querySelector('.hobby-carousel-next');
    let currentIndex = 0;

    function showSlide(index) {
      slides.style.transform = `translateX(-${index * 100}%)`;
    }

    prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + slides.children.length) % slides.children.length;
      showSlide(currentIndex);
    });

    nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % slides.children.length;
      showSlide(currentIndex);
    });
  });
}

// Full-size image modal
function setupImageModal() {
  const modal = document.getElementById('fullSizeImageModal');
  const modalImg = document.getElementById('fullSizeImage');
  const captionText = document.getElementById('imageCaption');
  const closeBtn = document.getElementsByClassName('close')[0];

  document.querySelectorAll('.hobby-image').forEach(img => {
    img.addEventListener('click', function () {
      modal.style.display = 'block';
      modalImg.src = this.src;
      captionText.innerHTML = this.nextElementSibling.innerHTML;
    });
  });

  closeBtn.onclick = function () {
    modal.style.display = 'none';
  }

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  }
}

// Initialize carousels and modal when the page loads
document.addEventListener('DOMContentLoaded', () => {
  setupCarousels();
  setupImageModal();
});

