function copyLink() {
  navigator.clipboard.writeText("ntn.mink@gmail.com");
}

function mDown(obj) {
  obj.style = "cursor:url('pubilc/curserCopied.svg') 20 20, auto";
}

function mOut(obj) {
  obj.style =
    "cursor:url('pubilc/curserCopy.svg') 20 20, auto; text-decoration: none;";
}

function mOver(obj) {
  obj.style =
    "cursor:url('pubilc/curserCopy.svg') 20 20, auto; text-decoration: underline;";
}

let myDiv = document.getElementById("mouseDiv");

function isTouchDevice() {
  try {
    document.createEvent("TouchEvent");
    return true;
  } catch (e) {
    return false;
  }
}

const move = (e) => {
  try {
    var x = !isTouchDevice() ? e.pageX : e.touches[0].pageX;
    var y = !isTouchDevice() ? e.pageY : e.touches[0].pageY;
  } catch (e) {}
  myDiv.style = "width: 320px;height:320px;transform: translate(-100%, -50%);";
  myDiv.style.left = x + "px";
  myDiv.style.top = y + "px";
};

function mouseOut() {
  document.addEventListener("mousemove", () => {
    myDiv.style =
      "width: 20px;height: 20px;bottom: 20px;right: 68px;transition: 0.4s ease-out;";
  });
}
function mouseOver() {
  document.addEventListener("mousemove", (e) => {
    move(e);
  });
}
