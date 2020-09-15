// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
  // Created HTML Elements
  const headerWrapper = document.createElement("div");
  const date = document.createElement("span");
  const header = document.createElement("h1");
  const temp = document.createElement("span");

  // Added Classes
  headerWrapper.classList.add("header");
  date.classList.add("date");
  temp.classList.add("temp");

  // Added Text Content
  date.textContent = "March 28, 2020";
  header.textContent = "Lambda Times";
  temp.textContent = "98°";

  // Created HTML Structure
  headerWrapper.append(date, header, temp);

  return headerWrapper;
}

const headerContainer = document.querySelector(".header-container");
headerContainer.appendChild(Header());
