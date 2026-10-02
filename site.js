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

localStorage.setItem(key, "It’s dangerous to go alone! Take this. I did search up the referen ce lol, but i am a big fan of zelda, and might get the Ocarina of Time Remake")

const urls = [
    'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/933964/pexels-photo-933964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1251861/pexels-photo-1251861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
].map(url => { (new Image()).src = url; return url })

const images = document.querySelectorAll('#carousel img')

let currentImage = 0
const showImages = () => {
    const offset = currentImage % urls.length
    images.forEach((image, index) => {
        const imageIndex = (index + offset + urls.length) % urls.length
        image.src = urls[imageIndex]
    })
}

showImages()
//for the pevious picture
document.querySelector('#prev').addEventListener('click', () => {
    currentImage++
    showImages()
})
//for the next picture
document.querySelector('#next').addEventListener('click', () => {
    currentImage--
    showImages()
})
setInterval(() => {
    currentImage--
    showImages()
}, 5000)
