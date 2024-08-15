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

    const blogContent = {
      1: {
        title: "Welcome to My Blog!",
        date: "Jul 18, 2024",
        category: "Introduction",
        content: `
                <div class="blog-image">
                    <img src="./assets/images/blog-1.png" alt="Welcome To NSY Blog!" style="width: 100%; height: auto;">
                </div>
                <p class='blog-text'>Hello and welcome to my blog! My name is Ng Suit Yan, and I'm thrilled to have you here. I'm a software developer and an online seller passionate about creating and sharing unique content that reflects my interests and experiences.</p>
                <br><h4 class="h4 blog-item-title">About Me</h4>
                <p class='blog-text'>I started my journey in software development with a strong interest in HTML, CSS, JavaScript, and PHP. Over the years, I have honed my skills and worked on various projects, including a published research study on using MCDM for e-voting. Aside from my professional life, I have a deep love for collecting and selling miniature keychains and Gacha from Japan.</p>
                <br><h4 class="h4 blog-item-title">Purpose of the Blog</h4>
                <p class='blog-text'>I decided to start this blog to connect with like-minded individuals and share my experiences and knowledge. Whether you're interested in software development, e-commerce, or the fascinating world of miniature collectibles, you'll find something here. I'll be posting regularly, so stay tuned for fresh and engaging content.</p>
                <br><h4 class="h4 blog-item-title">What You’ll Find Here</h4>
                <p class='blog-text'>In this blog, you can expect to find a variety of topics, including:</p>
                <br><ul class='blog-text'>
                    <li>&#10686; Tips and tricks for software development</li>
                    <li>&#10686; Insights and strategies for succeeding in e-commerce</li>
                    <li>&#10686; Showcases of my favorite miniature keychains and Gacha</li>
                    <li>&#10686; Personal stories and lessons learned from my journey</li>
                </ul>
                <br><h4 class="h4 blog-item-title">My Journey So Far</h4>
                <p class='blog-text'>My career has been filled with exciting milestones, from successfully completing challenging projects to expanding my online business to multiple platforms like Shopee, Lazada, and 小红书. While there have been challenges along the way, each obstacle has taught me valuable lessons and helped me grow.</p>
                <br><h4 class="h4 blog-item-title">Join Me on This Journey</h4>
                <p class='blog-text'>I invite you to join me on this exciting journey. Feel free to leave comments, share your thoughts, and connect with me on social media. Your support and engagement mean the world to me, and I'm eager to hear about your experiences as well.</p>
                <br><h4 class="h4 blog-item-title">Closing Remarks</h4>
                <p class='blog-text'>Thank you for taking the time to visit my blog. I'm excited to share this journey with you and can't wait to see where it takes us. Stay tuned for my next post, where I'll dive into more specific topics and share even more insights.</p>
            `
      },
      // Add more blog contents here
      2: {
        "title": "How to Become a Successful Online Seller",
        "date": "Aug 15, 2024",
        "category": "E-Commerce",
        "content": `
    <div class="blog-image">
      <img src="./assets/images/blog-2.png" alt="Success in Online Selling" style="width: 100%; height: auto;">
    </div>
    <p class='blog-text'>Starting an online selling business is a journey filled with challenges and rewards. Having been an online seller since I was 19, I’ve learned valuable lessons that have shaped my success. In this post, I’ll share practical tips and strategies to help you build and grow your online business.</p>
    <br><h4 class="h4 blog-item-title">1. Choose the Right Products</h4>
    <p class='blog-text'>Selecting the right products is the foundation of your online business. Focus on products that align with your passion and have a proven demand in the market. I chose to sell miniature keychains and Gacha from Japan because they are unique and appeal to a niche audience.</p>
    <br><h4 class="h4 blog-item-title">2. Understand Your Target Audience</h4>
    <p class='blog-text'>Knowing your target audience is crucial. Conduct thorough research to understand their preferences, pain points, and shopping behavior. Tailoring your products and marketing efforts to meet their needs will increase your chances of success.</p>
    <br><h4 class="h4 blog-item-title">3. Build a Strong Online Presence</h4>
    <p class='blog-text'>A strong online presence is essential for attracting and retaining customers. Invest time in creating a professional website, optimizing your product listings, and engaging with your audience on social media. Platforms like Shopee, Lazada, and 小红书 have been instrumental in expanding my reach.</p>
    <br><h4 class="h4 blog-item-title">4. Offer Excellent Customer Service</h4>
    <p class='blog-text'>Customer service can make or break your business. Always prioritize your customers’ needs, respond to inquiries promptly, and handle any issues with care. Positive reviews and word-of-mouth recommendations are powerful tools for growing your business.</p>
    <br><h4 class="h4 blog-item-title">5. Monitor and Adapt</h4>
    <p class='blog-text'>The e-commerce landscape is constantly evolving. Keep an eye on market trends, customer feedback, and competitors. Be willing to adapt your strategies and offerings to stay ahead of the curve. Continuous learning and improvement are key to long-term success.</p>
    <br><h4 class="h4 blog-item-title">Conclusion</h4>
    <p class='blog-text'>Becoming a successful online seller requires dedication, persistence, and a willingness to learn from both successes and failures. By following these tips and staying committed to your goals, you can build a thriving online business. I’m excited to share more insights and experiences with you, so stay tuned for future posts!</p>
  `
      }

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

