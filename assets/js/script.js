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
      "date": "August 28, 2024",
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
    },
    {
      "id": 5,
      "title": "思念我最敬爱的妈妈-我一生中最重要的一个人",
      "date": "August 30, 2024",
      "category": "General",
      "image": "./assets/images/mother.png",
      "text": "思念我最敬爱的妈妈-我一生中最重要的一个人",
      "content": `
    <div class="blog-image">
      <img src="./assets/images/mother.png" alt="Mother Memories" style="width: 100%; height: auto;">
    </div>
    <br>
    <p class='blog-text'>
      这篇文章中，我想分享一首对我和母亲来说特别有意义的歌曲。这首歌是 《是妈妈是女儿》，由 黄绮珊和希林娜依 演唱。希望这首歌能够传达我对母亲的思念和敬意。
    </p>
    <audio controls autoplay hidden>
      <source src="./assets/audio/是妈妈是女儿.mp3" type="audio/mpeg">
      Your browser does not support the audio element.
    </audio>
    <br><br>
    <p class='blog-text'>自从老妈去世以后，我发现我还是常常的非常想念她，很多时候也可能是想要在哪里或则某个地方再看到他的身影， 还是会在周末独自一人的时候，想要拨通她的电话， 和她说说话， 可是却又深知这个电话不可能再有回应了。 后来想了一想，我决定在我自己的个人网站， 写一遍关于我妈妈的博客，不只是为了缅怀他的一生， 更是想纪念我的妈妈， 那一个一直很爱我的妈妈。</p>
    <br><h4 class="h4 blog-item-title">童年回忆</h4>
    <p class='blog-text'>在我很小的时候，估计我也算是一个小淘气，总是给老妈制造了很多的麻烦，但是老妈虽然骂骂咧咧，但是最后也是会来帮我收拾烂摊子， 也许小的时候吧， 管的真的蛮严厉的，我都还隐隐约约记得当时候她在家做家庭教师时候， 我不愿意上课躲在房间里面的时候。后来到了中学，妈妈慢慢的没有管的那么严厉， 但是她也希望我的未来可以过的好，所以还是会希望我能够通过自己的努力，考上政府大学， 我也许记得老妈最常对我说的话， 也许是“什么事情尽力就好”。妈妈可能辛苦了一辈子了， 是真的很不想我们三姐弟再次走回他的老路吧。老妈的爱好像一直是无条件的，后来我也发现这种爱真的在我生命中无比的珍贵。感觉以前最快乐的时候，就是每天晚上的煮饭时间， 我真的很喜欢站在旁边看着老妈煮着各式各样的菜肴，感觉真的很神奇，那时候觉得很正常，但后长大后后来才知道，每天变着花样要煮不一样的食物， 真的是很不容易的事情。</p>
    <br><h4 class="h4 blog-item-title">老妈的奉献和牺牲</h4>
    <p class='blog-text'>老妈的一生真的可以用“奉献”和 “努力”这四个字来形容，小的时候到处打工补贴家用， 后来毕业出来后成功一个补习老师，老妈还会跟我说，当时候她结婚的时候，有一个桌子，就是专门为他的学生准备的。在结婚以后， 老妈也为了家庭和孩子付出了他的所有，哪怕钱包里面没有钱了，也不会让我们三姐弟饿肚子，在最困难的时候，妈妈把她所有的嫁妆，自己努力挣钱存的定期和首饰，都拿来补贴家用了，但是小时候的我没有感觉，她哪怕自己在房间哭，也不曾在我的面前过度抱怨，老妈也曾经告诉我，他最大的愿望，是希望我们都能过得好。虽然我出生在一个重男轻女的家庭，也许一路走来有很多的委屈和不满，但是后来看到妈妈总是那么努力和坚持，让我还是感受到了家应该有的爱。</p>
    <br><h4 class="h4 blog-item-title">老妈的智慧与教导</h4>
    <p class='blog-text'>很多时候老妈真的是我人生道路上的引路人，我到现在都还记得那时候中六，我哭着拿着化学的书跟我妈妈说我真的读不了了，真的太辛苦了，但是妈妈还是希望我再努力一下，也许不用拿很高的分数， 但是还是尽力的去读，去试试，后来出来工作了，很多时候工作真的很不顺利，很不顺心，但是老妈总是都会站在我这边，给与我支持，哪怕也许我的想法很天马行空，她也总是拥有尊重我的想法，并且永远支持着我。</p>
    <br><h4 class="h4 blog-item-title">老妈的影响</h4>
    <p class='blog-text'>其实说真的， 老妈对我的影响还是蛮深远和持久的，你只要提起我妈妈， 我总告诉我朋友， 我妈妈很善良， 很努力， 一生人都在劳累，哪怕受了很大的委屈，到最后他依然对他人有着无限的忍让和善良。哪怕她离开了，我还是会一直记得那些她很多时候说过的话， 常常想起他告诉我的她的经验，她明白的道理，所有她的温柔，并且也努力融入我的生活中。她就像一片黑暗里面最亮的那颗星，时常照耀我的生活。老妈的支持和爱，真的很大的让我在面对人生挑战时候更加坚定和勇敢。</p>
    <br><h4 class="h4 blog-item-title">对老妈的怀念</h4>
    <p class='blog-text'>以前总觉得老妈会永远都在怡保的家， 每次我回来都能和她一起吃早餐，然后逛街看电影聊天，后来在他突然离开的那一刻， 这些时候好像就再也不能在做了，后来我在离开怡保前自己走路到我们常常吃早餐的地方，真的感受到了那种无力的感觉，一切都一摸一样，但是唯独你，再也不回来了。我常常在心里对老妈说，真的很谢谢你，那么努力的爱我，谢谢你给了我那么多的支持和爱，我会永远怀念你的笑容，你的声音，还有所有你曾为我付出的所有事情，真的谢谢。</p>
    <br><h4 class="h4 blog-item-title">结语</h4>
    <p class='blog-text'>老妈真的是我生命中最重要的人之一，她的爱和教导会永远留在我心中。无论未来如何， 我都会带着她的精神，很伤心下面的一段路你不能再陪伴我了，但是生活还是要过，我也想努力，努力成为她希望的，“不再过苦日子了的生活”。我相信，老妈的爱，会一直指引我为我开路，给与我无限的勇气和力量。</p>
    <br><h4 class="h4 blog-item-title">结束语</h4>
    <p class='blog-text'>老妈，不要忘了我，我真的很爱你，也谢谢你，这辈子。下辈子，还做你女儿。愿你再另外一个世界，每天都开开心心，每天都微笑，依然平安。</p>
  `
    }

  ];

  const blogPostsList = document.querySelector(".blog-posts-list");
  const fullBlogPostSection = document.querySelector(".full-blog-post");
  const fullBlogContent = document.querySelector(".full-blog-content");
  const backToListButton = document.querySelector(".back-to-list");
  const audioElement = document.querySelector("audio");
  const searchInput = document.getElementById("searchInput");
  const blogPrevPageBtn = document.getElementById("blogPrevPageBtn");
  const blogNextPageBtn = document.getElementById("blogNextPageBtn");
  const blogPageIndicator = document.getElementById("blogPageIndicator");

  let currentPage = 1;
  const postsPerPage = 4;

  // Sort posts by date in descending order
  blogPosts.sort((a, b) => new Date(b.date) - new Date(a.date));

  function renderBlogPosts(posts) {
    blogPostsList.innerHTML = posts.map(post => `
      <li class="blog-post-item" data-blog-id="${post.id}">
        <a href="./blog/blog-${post.id}.html">
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

  backToListButton.addEventListener("click", function () {
    fullBlogPostSection.style.display = "none";
    blogPostsList.style.display = "grid";

    // Show search bar and pagination controls again
    searchInput.style.display = "block";
    blogPrevPageBtn.style.display = "inline-block";
    blogNextPageBtn.style.display = "inline-block";
    blogPageIndicator.style.display = "inline-block";

    // Stop the audio
    if (audioElement) {
      audioElement.pause();
      audioElement.currentTime = 0; // Reset audio to start
    }
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
      blogPrevPageBtn.style.display = "none";
      blogNextPageBtn.style.display = "none";
      blogPageIndicator.style.display = "none";
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

