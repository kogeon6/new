const images=["5.jpg","6.jpg","7.jpg"]

const chosenImage=images[Math.floor(Math.random() * images.length)]

const bgImage = document.createElement("img")

bgImage.src=`./image/${chosenImage}`;

document.body.appendChild(bgImage);