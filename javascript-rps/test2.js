const link = document.querySelector("a");

link.textContent = "Mozilla Developer Network";

link.href = "https://developer.mozilla.org";

const sect = document.querySelector("section");

const para = document.createElement("p");
para.textContent = "We hope you enjoyed the ride.";
para.style.color = "red";

sect.appendChild(para);

const text = document.createTextNode(
  " — the premier source for web development knowledge.",
);

const linkPara = document.querySelector("p");
linkPara.appendChild(text);

const clone = linkPara.cloneNode(deep=true);

sect.appendChild(clone);

clone.remove();

para.setAttribute("class", "highlight")

