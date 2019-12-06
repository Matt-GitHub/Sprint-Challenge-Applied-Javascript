// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then(response => {
    return dataArray(response.data.articles);
  })
  .then(articles => {
    const list = mapList(articles);
    const parentDiv = document.querySelector(".cards-container");
    list.forEach(card => {
      parentDiv.appendChild(card);
    });
  })
  .catch(error => {
    console.log(error);
  });

let cardCreator = array => {
  // ** create element
  let card = document.createElement("div");
  let headlineDiv = document.createElement("div");
  let authorDiv = document.createElement("div");
  let imgDiv = document.createElement("div");
  let img = document.createElement("img");
  let span = document.createElement("span");
  // ** class list
  card.classList.add("card");
  headlineDiv.classList.add("headline");
  authorDiv.classList.add("author");
  imgDiv.classList.add("img-container");
  // ** append
  card.appendChild(headlineDiv);
  card.appendChild(authorDiv);
  authorDiv.appendChild(imgDiv);
  authorDiv.appendChild(span);
  imgDiv.appendChild(img);
  // ** content goes here
  headlineDiv.textContent = array.headline;
  span.textContent = `By ${array.authorName}`;
  img.src = array.authorPhoto;
  img.setAttribute("alt", array.authorName);
  // ! return card
  return card;
};

let mapList = list => {
  return list.map(content => cardCreator(content));
};

let arrayData = [];

let dataArray = data => {
  let convertObject = Object.keys(data);
  convertObject.forEach(input => {
    arrayData = [...arrayData, ...data[input]];
  });
  return arrayData;
};
