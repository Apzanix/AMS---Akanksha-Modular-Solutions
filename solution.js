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

// Floating Chatbot Script

  const whatsappBtn = document.getElementById("whatsappBtn");
  const messageBtn = document.getElementById("messageBtn");
  const whatsappBox = document.getElementById("whatsappBox");
  const messageBox = document.getElementById("messageBox");
  document.getElementById("closeWhatsapp").onclick = () => whatsappBox.classList.remove("active");
  document.getElementById("closeMessage").onclick = () => messageBox.classList.remove("active");

  whatsappBtn.onclick = () => {
    whatsappBox.classList.toggle("active");
    messageBox.classList.remove("active");
  };
  messageBtn.onclick = () => {
    messageBox.classList.toggle("active");
    whatsappBox.classList.remove("active");
  };

  // Expanded responses
  const responses = [
    // Greetings & Small Talk
    { keywords: ["hi", "hello", "hey"], reply: "Hi there 👋 Welcome to AKANKSHA MODULAR SOLUTIONS How can I assist you today?" },
    { keywords: ["how are you"], reply: "I’m doing great, thanks for asking! How about you? 😊" },
    { keywords: ["who are you", "about you"], reply: "I’m your virtual assistant 🤖 here to help you with company info, products, services, and more." },

    // Company Info
    { keywords: ["company", "about company", "tell me about company"], reply: "We are AKANKSHA MODULAR SOLUTIONS (WMSPL), specialists in modular hospital infrastructure and OT solutions." },
    { keywords: ["address", "location", "where located", "map"], reply: "📍 Plot No - 4508, Megheswar Colony, Lane No - 5, P.O - Badagada Brit Colony, Bhubaneswar - 751018. Would you like me to share a Google Map link?" },
    { keywords: ["contact", "phone", "call", "email"], reply: "📞 +91 9437807895 | 📧 akankshamodulars@gmail.com" },

    // Products & Services
    { keywords: ["products", "what do you sell"], reply: "We provide Wall Panels, Ceiling Systems, Sliding Doors, Ambient Lights, X-Ray Viewers, and much more." },
    { keywords: ["solutions", "services"], reply: "Our solutions include Modular Operation Theaters, Cleanroom Systems, and Hospital Infrastructure." },
    { keywords: ["projects"], reply: "We’ve successfully completed hospital and OT setup projects across India 🏥." },

    // Website Pages
    { keywords: ["home"], reply: "Our homepage welcomes you to explore our solutions and services." },
    { keywords: ["blogs"], reply: "Our blogs cover the latest updates in hospital infrastructure and healthcare technology." },
    { keywords: ["about"], reply: "The About Us page shares our journey, vision, and values." },

    // Business Info
    { keywords: ["timing", "hours", "open", "working"], reply: "Our office hours are 🕙 Monday–Saturday, 10 AM – 6 PM IST. Closed on Sundays." },
    { keywords: ["pricing", "cost", "charges"], reply: "Pricing depends on project size and requirements. Can I connect you with our sales team for details?" },

    // Help & Support
    { keywords: ["support", "help", "assistance"], reply: "Sure! I can guide you about company details, products, solutions, and contact information." },
    { keywords: ["thanks", "thank you"], reply: "You’re welcome! 🙏 Always happy to help." },
    { keywords: ["bye", "goodbye", "see you"], reply: "Goodbye 👋 Have a great day ahead!" }
  ];

  // Function to get bot reply
  function getBotReply(userText) {
    userText = userText.toLowerCase();

    for (let item of responses) {
      if (item.keywords.some(keyword => userText.includes(keyword))) {
        return item.reply;
      }
    }
    return "🤔 I’m not sure about that. You can ask me about our company, products, solutions, contact details, or timings.";
  }

  // Function to handle chat
  function handleChat(inputId, chatId) {
    const input = document.getElementById(inputId);
    const chat = document.getElementById(chatId);
    const userText = input.value.trim();
    if (!userText) return;

    // Append user message
    const userMsg = document.createElement("div");
    userMsg.classList.add("user-msg");
    userMsg.textContent = userText;
    chat.appendChild(userMsg);

    // Bot reply
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

  // WhatsApp Box Send
  document.getElementById("whatsappSend").onclick = () => handleChat("whatsappInput", "whatsappChat");
  document.getElementById("whatsappInput").addEventListener("keypress", (e) => {
    if (e.key === "Enter") handleChat("whatsappInput", "whatsappChat");
  });

  // Message Box Send
  document.getElementById("messageSend").onclick = () => handleChat("messageInput", "messageChat");
  document.getElementById("messageInput").addEventListener("keypress", (e) => {
    if (e.key === "Enter") handleChat("messageInput", "messageChat");
  });