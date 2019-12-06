// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

let tabCreator = topic => {
  let div = document.createElement("div");
  div.classList.add("tab");
  div.textContent = topic;

  return div;
};

let topics = document.querySelector(".topics");
axios
  .get("https://lambda-times-backend.herokuapp.com/topics")
  .then(response => {
    response.data.topics.forEach(input => {
      const newTab = tabCreator(input);
      // ** Append div.appendChild(newTab)
      topics.appendChild(newTab);
    });
    console.log(response);
  })
  .catch(error => {
    console.log("Checkout this" + " " + error);
  });
