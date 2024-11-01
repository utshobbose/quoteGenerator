
const data =[
    {
        quotes: "I once had a thousand desires, but in my one desire to know you, all else melted away.", 
        author: "Jalal ad-Din Muhammad ar-Rumi "
    },
    {
        quotes: "In three words I can sum up everything I've learned about life: It goes on.", 
        author: "Robert Frost"
    },
    {
        quotes: "The whole secret of a successful life is to find out what is one's destiny to do, and then do it.", 
        author: "Henry Ford"
    },
    {
        quotes: "To live is the rarest thing in the world. Most people exist, that is all.", 
        author: "Oscar Wilde"
    },
    {
        quotes: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", 
        author: "Ralph Waldo Emerson"
    },
    {
        quotes: "That it will never come again is what makes life so sweet.", 
        author: "Emily Dickinson"
    },
    {
        quotes: "Some people never go crazy. What truly horrible lives they must lead.", 
        author: "Charles Bukowski"
    },
    {
        quotes: " Sometimes you climb out of bed in the morning and you think, I'm not going to make it, but you laugh inside — remembering all the times you've felt that way.", 
        author: "Charles Bukowski"
    },
    {
        quotes: "Dil mera toot gaya, dard-e-jigar se mujhe khabar nahin Kahin aur lagi hai aag, mujhe apni khabar nahin.", 
        author: "Raghupati Sahay Firaq Gorakhpuri"
    }
];

let quoteIndex = 1;

function fetchQuote() {
    const quote = data[quoteIndex];
    document.getElementById('quote').innerText = quote.quotes;
    document.getElementById('author').innerText = quote.author;


    quoteIndex = (quoteIndex + 1) % data.length;
    //quoteIndex = Math.floor(Math.random() * data.length);
    
}
document.getElementById('new-quote-button').addEventListener('click', fetchQuote);
fetchQuote(quoteIndex);

function shareOnFacebook() {
    const quoteText = document.getElementById('quote').innerText;
    const authorText = document.getElementById('author').innerText;
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=https://yourwebsite.com&quote=${encodeURIComponent(document.getElementById('quote').innerText + " - " + document.getElementById('author').innerText)}`;

    window.open(facebookUrl);
}