const hours = new Date().getHours();

const isMorning = hours >= 4 && hours < 12;
const isAfternoon = hours >= 12 && hours < 17;
const isEvening = hours >= 17 || hours < 4;

if (isMorning)
{message = "Good Morning, Go get yourself an energy drink!"}
else if (isAfternoon)
{message = "Good Afternoon, if you didnt buy an energy drink, now is your last chance!!!"}
else if (isEvening)
{message = "Good Evening, just buy another energy drink (;"}

document.getElementById("welcome").textContent = message;