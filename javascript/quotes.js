const quotes = [
  { quote: "hello", author: "me" },
  { quote: "hello2", author: "me2" },
  { quote: "hello3", author: "me3" },
  { quote: "hello4", author: "me4" },
  { quote: "hello5", author: "me5" },
  { quote: "hello6", author: "me6" },
  { quote: "hello7", author: "me7" },
  { quote: "hello8", author: "me8" },
  { quote: "hello9", author: "me9" },
  { quote: "hello10", author: "me10" },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
