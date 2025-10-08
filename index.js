 // back to top

 
const btn = document.getElementById("btn7");

window.onscroll = function() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    btn.classList.add("show");  // fade in
  } else {
    btn.classList.remove("show"); // fade out
  }
};

// Scroll to top when button is clicked
btn.addEventListener("click", function() {
  window.scrollTo({top: 0, behavior: 'smooth'});
});

// ===== Mobile Menu Toggle =====
const toggleBtn = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

toggleBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// ===== Smooth Scroll for Anchor Links =====
const links = document.querySelectorAll("a[href^='#']");

links.forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 70,
        behavior: "smooth"
      });
      navLinks.classList.remove("active"); // ✅ matches toggle
    }
  });
});




 // ===== showcase =====

  
    const card = document.getElementById("card");

    card.addEventListener("touchstart", function () {
      card.classList.add("active");
    });

    document.addEventListener("touchstart", function (e) {
      if (!card.contains(e.target)) {
        card.classList.remove("active");
      }
    
    });


 // ===== testimonials =====
    const cards = document.querySelectorAll('.testimonial-card');
let index = 0;

function showNextTestimonial() {
  cards[index].classList.remove('active');
  index = (index + 1) % cards.length;
  cards[index].classList.add('active');
}

setInterval(showNextTestimonial, 5000);

 


  // Floating Chatbot Script

  document.addEventListener("DOMContentLoaded", () => {
  // ===== Floating Chat Buttons =====
  const whatsappBtn = document.getElementById("whatsappBtn");
  const messageBtn = document.getElementById("messageBtn");
  const whatsappBox = document.getElementById("whatsappBox");
  const messageBox = document.getElementById("messageBox");
  const closeWhatsapp = document.getElementById("closeWhatsapp");
  const closeMessage = document.getElementById("closeMessage");

  // Open / Close WhatsApp Box
  if (whatsappBtn && whatsappBox) {
    whatsappBtn.addEventListener("click", () => {
      whatsappBox.classList.toggle("active");
      if (messageBox) messageBox.classList.remove("active");
    });
  }

  if (closeWhatsapp && whatsappBox) {
    closeWhatsapp.addEventListener("click", () => {
      whatsappBox.classList.remove("active");
    });
  }

  // Open / Close Message Box
  if (messageBtn && messageBox) {
    messageBtn.addEventListener("click", () => {
      messageBox.classList.toggle("active");
      if (whatsappBox) whatsappBox.classList.remove("active");
    });
  }

  if (closeMessage && messageBox) {
    closeMessage.addEventListener("click", () => {
      messageBox.classList.remove("active");
    });
  }

  // ===== Bot Responses =====
  const responses = [
    { keywords: ["hi", "hello", "hey"], reply: "Hi 👋 Welcome to Akanksha Modular Solutions!" },
    { keywords: ["how are you"], reply: "I’m doing great, thanks! How about you? 😊" },
    { keywords: ["company"], reply: "We are AKANKSHA MODULAR SOLUTIONS (AMS), specialists in modular hospital infrastructure and OT solutions." },
    { keywords: ["address", "location"], reply: "📍 Plot No - 4508, Megheswar Colony, Lane No - 5, Bhubaneswar - 751018." },
    { keywords: ["contact", "phone"], reply: "📞 +91 9437807895 | 📧 akankshamodulars@gmail.com" },
    { keywords: ["products"], reply: "We provide Wall Panels, Ceiling Systems, Sliding Doors, Ambient Lights, X-Ray Viewers, and more." },
    { keywords: ["services"], reply: "We offer Modular OTs, Cleanroom Systems, and Hospital Infrastructure solutions." },
    { keywords: ["thanks"], reply: "You’re welcome! 🙏 Always happy to help." },
    { keywords: ["bye"], reply: "Goodbye 👋 Have a great day ahead!" }
  ];

  function getBotReply(userText) {
    userText = userText.toLowerCase();
    for (let item of responses) {
      if (item.keywords.some(keyword => userText.includes(keyword))) {
        return item.reply;
      }
    }
    return "🤔 I’m not sure about that. You can ask me about our company, products, solutions, or contact details.";
  }

  function handleChat(inputId, chatId) {
    const input = document.getElementById(inputId);
    const chat = document.getElementById(chatId);
    if (!input || !chat) return;

    const userText = input.value.trim();
    if (!userText) return;

    // Add user message
    const userMsg = document.createElement("div");
    userMsg.classList.add("user-msg");
    userMsg.textContent = userText;
    chat.appendChild(userMsg);

    // Add bot reply
    setTimeout(() => {
      const botMsg = document.createElement("div");
      botMsg.classList.add("bot-msg");
      botMsg.textContent = getBotReply(userText);
      chat.appendChild(botMsg);
      chat.scrollTop = chat.scrollHeight;
    }, 600);

    input.value = "";
    chat.scrollTop = chat.scrollHeight;
  }

  // WhatsApp Send
  const whatsappSend = document.getElementById("whatsappSend");
  const whatsappInput = document.getElementById("whatsappInput");
  if (whatsappSend && whatsappInput) {
    whatsappSend.addEventListener("click", () => handleChat("whatsappInput", "whatsappChat"));
    whatsappInput.addEventListener("keypress", e => {
      if (e.key === "Enter") handleChat("whatsappInput", "whatsappChat");
    });
  }

  // Message Send
  const messageSend = document.getElementById("messageSend");
  const messageInput = document.getElementById("messageInput");
  if (messageSend && messageInput) {
    messageSend.addEventListener("click", () => handleChat("messageInput", "messageChat"));
    messageInput.addEventListener("keypress", e => {
      if (e.key === "Enter") handleChat("messageInput", "messageChat");
    });
  }
});

 const modal = document.getElementById("consultModal");
    const openBtn = document.getElementById("openModal");
    const closeBtn = document.getElementById("closeModal");

    // Open modal
    openBtn.onclick = function(e) {
      e.preventDefault();
      modal.style.display = "flex";
    }

    // Close modal
    closeBtn.onclick = function() {
      modal.style.display = "none";
    }

    // Close modal on outside click
    window.onclick = function(event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    }
