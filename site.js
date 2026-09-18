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



const key = "It's a secret to everybody."

localStorage.setItem(key, "It’s dangerous to go alone! Take this. I did search up the reference lol, but i am a big fan of zelda, and might get the Ocarina of Time Remake")