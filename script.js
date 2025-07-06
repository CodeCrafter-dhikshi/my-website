/* ================================
   Personal‑Site Enhancements
   ================================ */

/* ---------- Dark‑mode toggle ---------- */
const themeBtn = document.getElementById("themeToggle");
const userPref = localStorage.getItem("theme");
if (userPref === "dark") document.body.classList.add("dark");
themeBtn.innerHTML = document.body.classList.contains("dark") ? "☀" : "☾";

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  themeBtn.innerHTML = isDark ? "☀" : "☾";
});

/* ---------- Typing effect for headline ---------- */
function typeIt(el, speed = 80) {
  const text = el.textContent;
  el.textContent = "";
  [...text].forEach((ch, i) =>
    setTimeout(() => (el.textContent += ch), i * speed)
  );
}
document.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelector("h1, .hero-title");
  if (hero) typeIt(hero);
});

/* ---------- Scroll‑to‑top button ---------- */
const toTopBtn = document.getElementById("toTop");
window.addEventListener("scroll", () => {
  toTopBtn.style.opacity = window.scrollY > 300 ? 1 : 0;
});
toTopBtn.addEventListener("click", () =>
  window.scrollTo({ top: 0, behavior: "smooth" })
);

/* ---------- Reveal‑on‑scroll ---------- */
const revealOpts = { threshold: 0.15 };
const reveal = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("reveal-in");
      reveal.unobserve(entry.target);
    }
  });
}, revealOpts);

document.querySelectorAll("section, .card, .reveal").forEach((el) => {
  el.classList.add("reveal-out"); // start hidden
  reveal.observe(el);
});


// Greeting based on time
const greet = document.getElementById("greeting");
if (greet) {
  const hour = new Date().getHours();
  let msg = "Hello";
  if (hour < 12) msg = "Good Morning ☀";
  else if (hour < 17) msg = "Good Afternoon 🌼";
  else if (hour < 20) msg = "Good Evening 🌼";
  else msg = "Good night 🌙";
  greet.textContent = `${msg}, Dhikshitha!`;
}


// Floating heart/star effect on click
document.addEventListener("click", function (e) {
  const icon = document.createElement("div");
  icon.textContent = Math.random() < 0.5 ? "💖" : "⭐";
  icon.style.position = "absolute";
  icon.style.left = `${e.clientX}px`;
  icon.style.top = `${e.clientY}px`;
  icon.style.fontSize = "20px";
  icon.style.opacity = "1";
  icon.style.transition = "all 1s ease-out";
  document.body.appendChild(icon);

  setTimeout(() => {
    icon.style.transform = "translateY(-80px)";
    icon.style.opacity = "0";
  }, 0);

  setTimeout(() => {
    icon.remove();
  }, 1000);
});





// Cute title change on tab switch
const originalTitle = document.title;
document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    document.title = "👀 Come back!";
  } else {
    document.title = originalTitle;
  }
});




  /*colour effect in good morning */

const greeting = document.getElementById("greeting");       
let colors = ["#d14ba6", "#5b83c8", "#27ae60" ];
let colorIndex = 0;

setInterval(() => {
  greeting.style.color = colors[colorIndex];
  colorIndex = (colorIndex + 1) % colors.length;
}, 1000);


//floating effect
function createBubble() {
  const bubble = document.createElement("div");
  bubble.className = "bubble";
  const size = Math.random() * 40 + 10;
  bubble.style.width = size + "px";
  bubble.style.height = size + "px";
  bubble.style.left = Math.random() * window.innerWidth + "px";
  document.querySelector(".bubbles-container").appendChild(bubble);

  setTimeout(() => {
    bubble.remove();
  }, 10000);
}

setInterval(createBubble, 500);



// ==============================
// Typewriter Quote Generator
// ==============================

// List of data science–themed motivational quotes
const quotes = [
  "Data is the new oil, but insight is the spark.",
  "Without data, you’re just another person with an opinion. – W. Edwards Deming",
  "In God we trust. All others must bring data.",
  "The goal is to turn data into information, and information into insight. – Carly Fiorina",
  "Big data is not about bits, it’s about talent. – Douglas Merrill",
  "Data science is the art of turning data into decisions."
];

// Function to type out the quote letter by letter
function typeWriter(text, i = 0) {
  if (i < text.length) {
    document.getElementById("typewriter").textContent += text.charAt(i);
    setTimeout(() => typeWriter(text, i + 1), 50); // 50ms delay between letters
  }
}

// Get a random quote and type it
document.addEventListener("DOMContentLoaded", function () {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("typewriter").textContent = ''; // clear any existing text
  typeWriter(randomQuote);
});
