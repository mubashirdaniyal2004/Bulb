let btn = document.getElementById("toggleBtn");

let bulb = document.getElementById("bulb");

btn.addEventListener("click", toggleBulb);

function toggleBulb(e) {
  if (btn.textContent.includes("On")) {
    bulb.src = "./source/On bulb.jpg";
    btn.textContent = "Turn Off";
  } else {
    bulb.src = "./source/Off bulb.jpg";
    btn.textContent = "Turn On";
  }
}
