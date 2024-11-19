// ملف musicController.js

// إنشاء عنصر الموسيقى
let audio;
const musicSrc = "music.mp3"; // استبدل بـ مسار ملف الموسيقى الخاص بك

// التأكد من تحميل الصوت مرة واحدة فقط
if (!window.musicPlayer) {
  // تعيين العنصر كمشغل عام لتجنب التكرار
  window.musicPlayer = true;

  // إنشاء عنصر الصوت
  audio = new Audio(musicSrc);
  audio.loop = true;

  // استعادة حالة التشغيل السابقة
  if (localStorage.getItem("isMusicPlaying") === "true") {
    audio.play();
  }

  // التعامل مع تشغيل وإيقاف الموسيقى عبر الزر
  document.addEventListener("click", (e) => {
    if (e.target.id === "toggleMusic") {
      if (audio.paused) {
        audio.play();
        localStorage.setItem("isMusicPlaying", "true");
      } else {
        audio.pause();
        localStorage.setItem("isMusicPlaying", "false");
      }
    }
  });

  // حفظ حالة الموسيقى قبل الخروج
  window.addEventListener("beforeunload", () => {
    localStorage.setItem("isMusicPlaying", audio.paused ? "false" : "true");
  });
}