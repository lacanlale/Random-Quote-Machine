function changeQuote() {
  var quote = "";
  var quoteList = [
    "When you reach the end of your rope, tie a knot in it and hang on. - Franklin D. Roosevelt",
    "But man is not made for defeat. A man can be destroyed but not defeated. - Ernest Hemingway",
    "You cannot shake hands with a clenched fist. - Indira Gandhi",
    "Let us sacrifice our today so that our children can have a better tomorrow. - A. P. J. Abdul Kalam",
    "When something is important enough, you do it even if the odds are not in your favor. - Elon Musk",
    "Life is too short for long-term grudges. - Elon Musk",
    "Patience is a virtue, and I'm learning patience. It's a tough lesson. - Elon Musk",
    "It's really hard to design products by focus groups. A lot of times, people don't know what they want until you show it to them. - Steve Jobs",
    "Being the richest man in the cemetery doesn't matter to me. Going to bed at night saying we've done something wonderful, that's what matters to me. - Steve Jobs",
    "I want to put a ding in the universe. - Steve Jobs"
  ];
  quote = quoteList[Math.floor(Math.random() * 10)];
  document.getElementById("quote-leftside").innerHTML = quote;
}
document.getElementById("quote-leftside").onClick = changeQuote();
