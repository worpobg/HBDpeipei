let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  const slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

// Lightbox
function openLightbox(img) {
  document.getElementById('lightbox').style.display = 'block';
  document.getElementById('lightbox-img').src = img.src;
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}

// Music
function playMusic() {
  const audio = document.getElementById("bgm");
  audio.play().catch(() => {
    alert("⚠️ แตะหน้าจอก่อนเพื่อเปิดเพลงนะครับ");
  });
  alert("เพลงวันเกิดกำลังเล่นน้าาา 🎶 สุขสันต์วันเกิดอีกครั้งนะครับ 💖");
}

// Snow effect
function createSnowflake() {
  const flake = document.createElement("div");
  flake.classList.add("snowflake");
  flake.style.left = Math.random() * window.innerWidth + "px";
  flake.style.animationDuration = (Math.random() * 3 + 2) + "s";
  document.body.appendChild(flake);
  setTimeout(() => flake.remove(), 5000);
}
setInterval(createSnowflake, 200);
