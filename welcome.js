// إنشاء عنصر الرسالة الترحيبية
const welcomeMessage = document.createElement("div");
welcomeMessage.textContent = " مرحبا !";
welcomeMessage.style.position = "fixed";
welcomeMessage.style.top = "10px"; // من الأعلى
welcomeMessage.style.left = "50%"; // منتصف العرض
welcomeMessage.style.transform = "translateX(-50%)"; // لتوسيط العنصر
welcomeMessage.style.background = "rgba(0, 123, 255, 0.9)";
welcomeMessage.style.color = "white";
welcomeMessage.style.padding = "15px 20px";
welcomeMessage.style.borderRadius = "50px"; // حواف دائرية بالكامل
welcomeMessage.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
welcomeMessage.style.zIndex = "1000";
welcomeMessage.style.fontSize = "16px";
welcomeMessage.style.fontWeight = "bold";
welcomeMessage.style.transition = "opacity 0.5s ease";
document.body.appendChild(welcomeMessage);

// إخفاء الرسالة بعد ثانيتين
setTimeout(() => {
  welcomeMessage.style.opacity = "0";
  setTimeout(() => welcomeMessage.remove(), 500); // إزالة الرسالة من DOM بعد اختفاءها
}, 2000);
