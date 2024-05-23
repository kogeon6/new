const quotes =[
    {
        quote : "Just do it!",
        author : "NIKE",
    },
    {
        quote : "Impossible is Nothing",
        author : "Adidas",
    },
    {
        quote : "Work Hard. Have Fun. Make History.",
        author : "Amazon"
    }

]

const quote = document.querySelector("#quote span:first-child")
const author=document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)]

quote.innerText=todaysQuote.quote
author.innerText=todaysQuote.author