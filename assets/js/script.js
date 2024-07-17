'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



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


//Blog
document.addEventListener("DOMContentLoaded", function () {
  const blogPosts = document.querySelectorAll(".blog-post-item");
  const blogPostsList = document.querySelector(".blog-posts-list");
  const fullBlogPostSection = document.querySelector(".full-blog-post");
  const fullBlogContent = document.querySelector(".full-blog-content");
  const backToListButton = document.querySelector(".back-to-list");

  blogPosts.forEach(post => {
    post.addEventListener("click", function (event) {
      event.preventDefault();
      const blogId = this.getAttribute("data-blog-id");
      // Load the full blog content based on blogId (e.g., via AJAX or from a predefined list)
      loadFullBlogContent(blogId);
    });
  });

  backToListButton.addEventListener("click", function () {
    fullBlogPostSection.style.display = "none";
    blogPostsList.style.display = "grid";
  });

  function loadFullBlogContent(blogId) {
    // This is just an example. Replace with actual content loading logic.
    const blogContent = {
      1: {
        title: "Design conferences in 2022",
        date: "Feb 23, 2022",
        category: "Design",
        content: "<p class='blog-text'>Full content of the blog post about design conferences in 2022.</p>"
      },
      // Add more blog contents here
    };

    const blog = blogContent[blogId];
    if (blog) {
      fullBlogContent.innerHTML = `
        <h3>${blog.title}</h3>
        <div class="blog-meta">
          <p class="blog-category">${blog.category}</p>
          <span class="dot"></span>
          <time datetime="${blog.date}">${blog.date}</time>
        </div>
        ${blog.content}
      `;
      blogPostsList.style.display = "none";
      fullBlogPostSection.style.display = "block";
    }
  }
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

