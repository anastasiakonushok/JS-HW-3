// convert-text-left-box

function convertText() {
  const pElement = document.createElement("p");

  const text = document.getElementById("textarea").value;

  pElement.innerHTML = text;

  const parentElement = document.querySelectorAll("div.right-text span")[0];

  if (!parentElement) {
    return;
  }

  parentElement.appendChild(pElement);
}

//clear-left-box

function clearLeft() {
  const leftBox = document.querySelectorAll(".label")[0];
  const leftText = leftBox.querySelector("textarea");

  leftBox.removeChild(leftText);

  const newTextarea = document.createElement("textarea");
  leftBox.appendChild(newTextarea);
}

//clear-right-box

function clearRight() {
  const rightBox = document.querySelectorAll("div.right-text")[0];
  const spanElement = rightBox.querySelector("span");

  rightBox.removeChild(spanElement);

  const newSpanRight = document.createElement("span");

  rightBox.appendChild(newSpanRight);
}

//change-Color-Text


function swithColor() {
  const selectEl = document.getElementsByClassName ('color-select')[0];
  const targetEl = document.getElementsByClassName ('right-text')[0];
  targetEl.style= `color: ${selectEl.value}`;
}
