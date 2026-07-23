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
const innovationVideo =
  document.querySelector("#innovationHeroVideo");

const innovationSoundButton =
  document.querySelector("#innovationSoundButton");

const innovationSoundIcon =
  document.querySelector("#innovationSoundIcon");

const innovationSoundText =
  document.querySelector("#innovationSoundText");

if (
  innovationVideo &&
  innovationSoundButton &&
  innovationSoundIcon &&
  innovationSoundText
) {
  innovationSoundButton.addEventListener("click", async () => {
    if (innovationVideo.muted) {
      innovationVideo.muted = false;
      innovationVideo.volume = 1;

      try {
        await innovationVideo.play();

        innovationSoundIcon.textContent = "🔊";
        innovationSoundText.textContent = "关闭声音";
      } catch (error) {
        innovationVideo.muted = true;

        innovationSoundIcon.textContent = "🔇";
        innovationSoundText.textContent = "开启声音";
      }
    } else {
      innovationVideo.muted = true;

      innovationSoundIcon.textContent = "🔇";
      innovationSoundText.textContent = "开启声音";
    }
  });
}