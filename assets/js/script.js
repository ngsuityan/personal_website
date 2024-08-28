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
  const blogPosts = [
    {
      id: 1,
      title: "Welcome to My Blog!",
      date: "Jul 18, 2024",
      category: "Introduction",
      image: "./assets/images/blog-1.png",
      text: "Hello and welcome to my blog! My name is Ng Suit Yan, and I'm thrilled to have you here...",
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
    {
      id: 2,
      title: "How to Become a Successful Online Seller",
      date: "Aug 15, 2024",
      category: "E-Commerce",
      image: "./assets/images/blog-2.png",
      text: "Starting an online selling business is a journey filled with challenges and rewards...",
      content: `
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
    },
    {
      id: 3,
      title: "Starting My Freelance Journey in September",
      date: "August 23, 2024",
      category: "Freelancing",
      image: "./assets/images/freelance.png",
      text: "As September approaches, I find myself at the cusp of an exciting new chapter...",
      content: `
        <div class="blog-image">
          <img src="./assets/images/freelance.png" alt="Freelance Journey" style="width: 100%; height: auto;">
        </div>
        <p class='blog-text'>As September approaches, I find myself at the cusp of an exciting new chapter—starting my journey as a freelancer and working from home. After years in traditional job settings, I'm ready to embrace the flexibility and independence that freelancing offers.</p>
        <br><h4 class="h4 blog-item-title">Why Freelancing?</h4>
        <p class='blog-text'>The decision to transition to freelancing wasn't made lightly. It stems from my desire for more control over my work-life balance and the opportunity to pursue projects that genuinely interest me. The idea of working from home, setting my own schedule, and choosing my clients is incredibly appealing.</p>
        <br><h4 class="h4 blog-item-title">Preparing for the Transition</h4>
        <p class='blog-text'>To ensure a smooth transition, I've been diligently preparing. This includes setting up my workspace, researching freelance platforms, and refining my personal brand. I'm also focusing on leveraging my skills in software development and online selling to build a solid foundation for my freelance career.</p>
        <br><h4 class="h4 blog-item-title">Challenges Ahead</h4>
        <p class='blog-text'>While the prospect of freelancing is exciting, I’m fully aware of the challenges ahead. Stepping away from a steady paycheck and navigating the uncertainties of freelance work is daunting. However, I’m confident that with dedication, a strong work ethic, and a passion for what I do, I can overcome these hurdles.</p>
        <br><h4 class="h4 blog-item-title">What I Hope to Achieve</h4>
        <p class='blog-text'>In this new chapter, I aim to take on diverse projects, connect with clients from around the world, and continuously grow both personally and professionally. My goal is to build a successful freelance career that allows me to explore my creativity and make a meaningful impact through my work.</p>
        <br><h4 class="h4 blog-item-title">Conclusion</h4>
        <p class='blog-text'>As I embark on this journey, I’m filled with anticipation and optimism. I look forward to sharing my experiences, challenges, and successes with you through this blog. Stay tuned for more updates as I navigate the exciting world of freelancing!</p>
      `
    },
    // Add more blog posts here
    {
      "id": 4,
      "title": "The Lesson I Learned About the Importance of a Handover Checklist",
      "date": "August 26, 2024",
      "category": "Workplace Tips",
      "image": "./assets/images/handover_checklist.png",
      "text": "I recently learned a valuable lesson about the importance of preparing a detailed handover checklist before leaving a job...",
      "content": `
    <div class="blog-image">
      <img src="./assets/images/handover_checklist.png" alt="Handover Checklist" style="width: 100%; height: auto;">
    </div>
    <p class='blog-text'>I recently learned a valuable lesson about the importance of preparing a detailed handover checklist before leaving a job. It wasn't something I had considered crucial until an issue arose after my departure that could have resulted in serious consequences for me.</p>
    <br><h4 class="h4 blog-item-title">My Experience</h4>
    <p class='blog-text'>When I was preparing to leave my last job, I focused on completing my tasks but didn’t think much about creating a handover checklist. No one explicitly told me to do it, so I assumed it wasn’t necessary. However, after I left, a problem came up that made me realize how critical it is to have everything documented. It was a close call that could have ended up with me being held accountable for not completing the handover properly.</p>
    <br><h4 class="h4 blog-item-title">Why a Handover Checklist Matters</h4>
    <p class='blog-text'>A handover checklist ensures clear communication, accountability, and prevents important details from being overlooked. It’s not just a formality; it’s a crucial tool that protects both you and the company during any transition.</p>
    <br><h4 class="h4 blog-item-title">What I Learned</h4>
    <p class='blog-text'>This experience taught me that no matter how straightforward the transition seems, taking the time to prepare a thorough handover checklist is essential. It’s a small effort that can save you from big problems down the road.</p>
    <br><h4 class="h4 blog-item-title">Conclusion</h4>
    <p class='blog-text'>If you’re ever in a position to hand over responsibilities, don’t overlook the importance of a handover checklist. It’s a step that ensures a smooth transition and provides peace of mind. Trust me, you’ll be glad you did.</p>
  `
    }

  ];

  const blogPostsList = document.querySelector(".blog-posts-list");
  const fullBlogPostSection = document.querySelector(".full-blog-post");
  const fullBlogContent = document.querySelector(".full-blog-content");
  const backToListButton = document.querySelector(".back-to-list");
  const searchInput = document.getElementById("searchInput");
  const prevPageBtn = document.getElementById("prevPageBtn");
  const nextPageBtn = document.getElementById("nextPageBtn");
  const pageIndicator = document.getElementById("pageIndicator");

  let currentPage = 1;
  const postsPerPage = 4;

  // Sort posts by date in descending order
  blogPosts.sort((a, b) => new Date(b.date) - new Date(a.date));

  function renderBlogPosts(posts) {
    blogPostsList.innerHTML = posts.map(post => `
      <li class="blog-post-item" data-blog-id="${post.id}">
        <a href="#">
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

    const blogPostItems = document.querySelectorAll(".blog-post-item");
    blogPostItems.forEach(post => {
      post.addEventListener("click", function (event) {
        event.preventDefault();
        const blogId = this.getAttribute("data-blog-id");
        loadFullBlogContent(blogId);
      });
    });
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
    prevPageBtn.disabled = currentPage === 1;
    nextPageBtn.disabled = currentPage === Math.ceil(filteredPosts.length / postsPerPage);
    pageIndicator.textContent = `Page ${currentPage}`;
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

  prevPageBtn.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      updateBlogPosts();
    }
  });

  nextPageBtn.addEventListener("click", () => {
    if (currentPage < Math.ceil(searchBlogPosts(searchInput.value).length / postsPerPage)) {
      currentPage++;
      updateBlogPosts();
    }
  });

  backToListButton.addEventListener("click", function () {
    fullBlogPostSection.style.display = "none";
    blogPostsList.style.display = "grid";

    // Show search bar and pagination controls again
    searchInput.style.display = "block";
    prevPageBtn.style.display = "inline-block";
    nextPageBtn.style.display = "inline-block";
    pageIndicator.style.display = "inline-block";
  });

  function loadFullBlogContent(blogId) {
    const blog = blogPosts.find(post => post.id == blogId);
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

      // Hide search bar and pagination controls
      searchInput.style.display = "none";
      prevPageBtn.style.display = "none";
      nextPageBtn.style.display = "none";
      pageIndicator.style.display = "none";
    }
  }


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

