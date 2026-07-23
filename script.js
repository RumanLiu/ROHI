const nav = document.querySelector(".site-nav");

window.addEventListener("scroll", () => {
  nav.classList.toggle("scrolled", window.scrollY > 24);
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((element) => {
  observer.observe(element);
});

const contactForm = document.querySelector("#contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.querySelector("#name").value.trim();
    const feedback = document.querySelector("#feedback");

    feedback.textContent = `感谢您，${name || "朋友"}！您的咨询已记录，ROHI 团队将尽快与您联系。`;
    contactForm.reset();
  });
}
/* ROHI AI FILM / INNOVATION PAGE */

document.addEventListener("DOMContentLoaded", function () {
  const filmPage = document.querySelector(".ifilm");

  if (!filmPage) {
    return;
  }

  const revealItems = filmPage.querySelectorAll(".ifilm-reveal");

  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      function (entries, observer) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("ifilm-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px"
      }
    );

    revealItems.forEach(function (item) {
      revealObserver.observe(item);
    });
  } else {
    revealItems.forEach(function (item) {
      item.classList.add("ifilm-visible");
    });
  }

  const heroVideo = document.getElementById("ifilmHeroVideo");
  const soundButton = document.getElementById("ifilmSoundButton");
  const soundIcon = document.getElementById("ifilmSoundIcon");
  const soundText = document.getElementById("ifilmSoundText");

  if (heroVideo && soundButton && soundIcon && soundText) {
    heroVideo.muted = true;

    soundButton.addEventListener("click", function () {
      if (heroVideo.muted) {
        heroVideo.muted = false;
        heroVideo.volume = 1;
        heroVideo.play();

        soundIcon.textContent = "🔊";
        soundText.textContent = "关闭声音";
        soundButton.setAttribute("aria-pressed", "true");
      } else {
        heroVideo.muted = true;

        soundIcon.textContent = "🔇";
        soundText.textContent = "开启声音";
        soundButton.setAttribute("aria-pressed", "false");
      }
    });
  }
});