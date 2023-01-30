const quote = document.getElementById("quotes");
const author = document.getElementById("author");
const newq = document.getElementById("newq");
let realData = " ";
let quotesData = " ";
 const getNewQuotes = ()=>{
    let rnum = Math.floor(Math.random() * 3000);
    quotesData = realData[rnum];
    quote.innerHTML = `${realData[rnum].text}`;
    quotesData.author == null
    ? (author.innerHTML = "unKnown")
    : (author.innerHTML = `${realData[rnum].author}`);
};

const getQuotes= async () =>{
const api ="https://type.fit/api/quotes";

try {
let data = await fetch(api);
realData = await data.json();
getNewQuotes( );
} catch (error) {

}
}
newq.addEventListener('click', getNewQuotes);
getQuotes();