const btn = document.querySelector(".btn");
const activity = document.querySelector(".activity");
const type = document.querySelector(".type");
const participants = document.querySelector(".participants");

btn.onclick = () => {
  fetch("https://www.boredapi.com/api/activity")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      activity.innerText = data.activity;
      type.innerText = data.type;
      participants.innerText = data.participants;
    });
};
