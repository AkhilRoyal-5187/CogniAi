
const buttons = document.querySelectorAll(".nav-btn");
buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    buttons.forEach(b => {
      b.classList.remove("bg-[#f46800]", "text-white");
      b.classList.add("bg-gray-100", "text-black");
    });
    btn.classList.remove("bg-gray-100", "text-black");
    btn.classList.add("bg-[#f46800]", "text-white");
  });
});