(function () {
  const FLAG_PATH = "/assets/IRAN-FLAG.png"; // موجود در مخزن؛ فایل جدید نساز!

  function makeFooterHTML() {
    const text1 = "کلیه حقوق مادی و معنوی این سایت متعلق به خانه هم‌افزایی انرژی و آب استان خراسان رضوی است.";
    const text2 = "طراحی و تولید: خانه هم‌افزایی انرژی و آب خراسان رضوی";
    return `
      <footer id="global-footer" class="site-footer" dir="rtl">
        <div class="container">
          <span class="footer-wrap">
            <img src="${FLAG_PATH}" alt="پرچم ایران" class="iran-flag" loading="lazy">
            <span class="footer-text">${text1}\n${text2}</span>
          </span>
        </div>
      </footer>
    `;
  }

  function removeDuplicateFooters() {
    const candidates = Array.from(document.querySelectorAll("footer, .footer, #footer"));
    candidates.forEach(el => {
      if (el.id === "global-footer") return;
      const t = (el.textContent || "").replace(/\s+/g, "");
      if (t.includes("کلیهحقوق") || t.includes("خانههم‌افزایی")) {
        el.remove();
      }
    });
  }

  function ensureSingleFooter() {
    if (!document.querySelector("#global-footer")) {
      document.body.insertAdjacentHTML("beforeend", makeFooterHTML());
    }
    // حذف هر فوتر اضافی بعد از درج اصلی
    Array.from(document.querySelectorAll("footer#global-footer")).slice(1).forEach(n => n.remove());
  }

  // اجرا پس از لود DOM
  document.addEventListener("DOMContentLoaded", function () {
    removeDuplicateFooters();
    ensureSingleFooter();
  });
})();
