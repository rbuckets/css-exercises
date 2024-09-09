const list = document.querySelector("ul");
const button = document.querySelector("button");
const input = document.querySelector("input");

function createItem(name) {
  const item = document.createElement("li");
  item.textContent = name;

  const button = document.createElement("button");
  button.textContent = "Delete"
  button.style.color = "black"
  button.setAttribute("class", "delete")
  button.addEventListener("click", () => {
    item.remove();
    input.focus();
  })

  item.appendChild(button);
  return item;
}

button.addEventListener("click", () => {
  console.log(input.value);
  list.appendChild(createItem(input.value));
  input.focus();
})

document.addEventListener('DOMContentLoaded', (e) => {
  alert("The DOM is fully loaded");
})

document.addEventListener('beforeunload', (e) => {
  alert("are you sure you want to close?")
})

button.addEventListener('contextmenu', (e) => {
  e.preventDefault();
});

// show the mouse event message
button.addEventListener('click', (e) => {
  let keys = [];

  if (e.shiftKey) keys.push('shift');
  if (e.ctrlKey) keys.push('ctrl');
  if (e.altKey) keys.push('alt');
  if (e.metaKey) keys.push('meta');

  let msg = document.querySelector('#message');
  msg.textContent = `Keys: ${keys.join('+')}`;
});

input.addEventListener("keydown", (event) => {
  console.log(event.key)
})