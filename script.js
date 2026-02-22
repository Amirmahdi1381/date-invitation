const noBtn = document.getElementById("nooo");
const yesBtn = document.getElementById("yessir");

yesBtn?.addEventListener("click", () => {
  window.location.href = "cafes.html";
});

const noTexts = [
  "No",
  "Are you sure?💚",
  "Think again🩵 ",
   "Wait… really? 💔",
  "Just one coffee 🤍",
  "Pretty please? 💙",
   "Don’t run away 😭",
  "Ok... maybe? 🩵",
  "Fine… I’ll ask nicely again 💘"
];

let i = 0;

function changeNoText() {
  i = (i + 1) % noTexts.length;
  noBtn.textContent = noTexts[i];
}

noBtn.addEventListener("mouseenter", changeNoText);

noBtn.addEventListener("touchstart", (e) => {
  e.preventDefault(); 
  changeNoText();
});
