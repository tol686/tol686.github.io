document.getElementById('year').textContent = new Date().getFullYear();

const facts = [
  "War Thunder",
  "Pubg",
  "CS2",
  "Rust",
  "Raft",
  "Squad"
];

let fi = 0;
const factEl = document.getElementById('fun-fact');
const btn = document.getElementById('next-fact');

function showFact(i) {
  factEl.style.opacity = 0;
  setTimeout(() => {
    factEl.textContent = facts[i];
    factEl.style.opacity = 1;
  }, 180);
}

btn && btn.addEventListener('click', () => {
  fi = (fi + 1) % facts.length;
  showFact(fi);
});

showFact(fi);