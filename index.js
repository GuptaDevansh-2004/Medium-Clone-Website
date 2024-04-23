// To push headlines under Trending on Medium from store

const content_upper = document.querySelector("#content");
let content = "";

lower_upper.forEach((item) => {
  content += `
  <div class="part">
    <div id="number">${item.number}</div>
    <div id="bod">
     <div id="head">
        <img src=${item.image} alt="image"></img>
        <div id="topic">${item.head}</div>
      </div>
      <div id="sub-bod"><h4>${item.body}</h4></div>
      <div id="foot"><h5>${item.Date}</h5></div>
    </div>
  </div>`;
});

content_upper.innerHTML = content;

// To push news at bottom from store

let contentlower = document.querySelector(".lower-left");
let items = "";

news.forEach((item) => {
  items += `
  <div class="news">
    <div class="left-col">
      <a href="#">
        <div id="head">
          <img src=${item.image1} alt="image"></img>
          <span>${item.head}</span>
        </div>
      </a>
      <a href="#"><div id="up-bod">${item.upper}</div></a>
      <a href="#"><div id="down-bod">${item.lower}</div></a>
      <div id="foot">
        <span>${item.foot}</span>
        <a href="#">${item.button}</a>
      </div>
    </div>
    <div class="image">
      <a href="#"><img src=${item.image2} alt="image"></a>
    </div>
  </div>`;
});

contentlower.innerHTML = items;

// For Navigation Bar dynamic colour change on scrolling

let styles = `border: 0.8rem solid rgb(26, 137, 23); background-color: rgb(26, 137, 23); transition: linear; transition-duration: 0.29s;`;
let styles_reverse = `border: 0.8rem solid black;  background-color: black; transition: linear; transition-duration: 0.29s;`;

window.addEventListener("scroll", (event) => {
  if (window.scrollY > 500) {
    document.querySelector("header").style = `background-color: white; transition: linear; transition-duration: 0.29s;`;
    document.querySelector(".nav-options li a > button").style = styles;
  } else {
    document.querySelector(".nav-options li a > button").style = styles_reverse;
    document.querySelector("header").style = `background-color: #FFC017; transition: linear; transition-duration: 0.29s;`;
  }
});