//Dom elements

const timeElement = document.querySelector(".smartwatch_innerpart-text2 h1");
const topTime = document.querySelector(".smartwatch_innerpart-text1 p");
const day = document.querySelector(".smartwatch_innerpart-text2 h3");

//Creating a new Date obj from DATE class(function constructor)
// const time = new Date();

//Updating the UI for Time
const updateClock = () => {
  timeElement.textContent = new Date().toLocaleTimeString(); //gives Current Time
  topTime.textContent = new Date().toLocaleTimeString().substring(0, 5);
};

setInterval(updateClock, 1000); //set interval to update time every 1sec

//Updating UI for Day
const updateDay = () => {
  const Day = new Date().getDay();
  const d = toKnowDay(Day);
  //   console.log(Day);
  day.textContent = d;
};

const toKnowDay = (day) => {
  switch (day) {
    case 0:
      return "Sunday";
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
  }
};

window.onload = () => {
  setInterval(updateClock, 1000);
  updateDay();
};
