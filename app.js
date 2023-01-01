const squares = document.querySelector('.squares');
for (var i = 1; i < 365; i++) {
  const level = Math.floor(Math.random() * 3);  
  squares.insertAdjacentHTML('beforeend', `<li data-level="${level}"></li>`);
}
const background = document.querySelector(".background");
for (var i = 0; i <= 100; i++) {
  const blocks = document.createElement("div");
  blocks.classList.add("block");
  background.appendChild(blocks);
}
