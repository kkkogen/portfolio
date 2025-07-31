document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slideshow .slide");
  let current = 0;
  const interval = 3000; // 3秒ごとに切り替え

  function showNextSlide() {
    // 現在のスライドを非表示
    slides[current].classList.remove("active");

    // 次のスライドのインデックスを計算
    current = (current + 1) % slides.length;

    // 次のスライドを表示
    slides[current].classList.add("active");
  }

  setInterval(showNextSlide, interval);
});

//ページが読み込まれたときにメイン画像を表示
window.addEventListener("load", function() {
  const mainImage = document.querySelector(".main-image");
  mainImage.classList.add("visible");
});

let lastScrollTop = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // 下にスクロールした → 隠す
    header.classList.add("hide");
  } else {
    // 上にスクロールした → 表示
    header.classList.remove("hide");
  }

  lastScrollTop = scrollTop;
});


// Intersection Observerでフェードイン　About
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in");
    }
  });
}, {
  threshold: 0.2
});

document.querySelectorAll("#about").forEach(el => {
  observer.observe(el);
});


