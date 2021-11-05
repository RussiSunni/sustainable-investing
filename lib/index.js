/*
 * Ref: Find parents
 * https://stackoverflow.com/a/64035024
 */
function getParent(el, selector) {
  let parent_container = el;
  do {
    parent_container = parent_container.parentNode;
  } while (
    !parent_container.matches(selector) &&
    parent_container !== document.body
  );

  return parent_container === document.body ? null : parent_container;
}

function showModuleAnswerFeedback(el) {
  const parent = getParent(el, ".answer");
  if (!parent) return;

  parent.querySelector(".option").classList.add("hidden");

  // check value
  if (el.value === "true") {
    parent.querySelector(".correct").classList.remove("hidden");
  }

  if (el.value === "false") {
    parent.querySelector(".incorrect").classList.remove("hidden");
  }
}

function showSubmoduleAnswerFeedback(el, result) {
  const parent = getParent(el, ".answer");
  if (!parent) return;

  parent.querySelector(".option").classList.add("hidden");
  parent.querySelector(".feedback").classList.remove("hidden");

  // display "next" button once answered
  document.getElementById("module-1").style.display = "block";

  if (result == 1) {
    score = localStorage.getItem("score");
    score++;
    localStorage.setItem("score", score);
  }

  console.log(localStorage.getItem("score"));

  document.getElementById("button1").disabled = true;
  document.getElementById("button1").style.borderColor = "lightgray";

  document.getElementById("button2").disabled = true;
  document.getElementById("button2").style.borderColor = "lightgray";

  document.getElementById("button3").disabled = true;
  document.getElementById("button3").style.borderColor = "lightgray";

  if (document.getElementById("button4")) {
    document.getElementById("button4").disabled = true;
    document.getElementById("button4").style.borderColor = "lightgray";
  }
}

function resetScore() {
  score = localStorage.getItem("score");
  score = 0;
  localStorage.setItem("score", score);
}

// flip cards
function flip(event) {
  var element = event.currentTarget;
  if (element.className === "flip-card") {
    if (element.style.transform == "rotateY(180deg)") {
      element.style.transform = "rotateY(0deg)";
    } else {
      element.style.transform = "rotateY(180deg)";
    }
  }
}

// responsive sidebar
function openNav() {
  document.getElementById("left").style.width = "100%";
  document.getElementById("left").style.padding = "1.25rem";
  document.getElementById("header").style.height = "0px";
  document.getElementById("main").style.marginTop = "0px";
}

function closeNav() {
  document.getElementById("left").style.width = "0";
  document.getElementById("left").style.padding = "0rem";
  document.getElementById("main").style.marginTop = "148px";
  document.getElementById("header").style.height = "148px";
}
