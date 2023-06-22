/**
 * Project objectives:
 * Build a message generator program using JavaScript
 * Use Git version control
 * Use command line
 * Develop locally on your computer
 */

/**
 * Inspirational quotes
 * "Every day brings new choices." — Martha Beck
 * "Work hard, stay positive, and get up early. It’s the best part of the day." — George Allen, Sr.
 * "I can’t change the direction of the wind, but I can adjust my sails to always reach my destination." — Jimmy Dean
 * "When we love, we always strive to become better than we are. When we strive to become better than we are, everything around us becomes better too." — Paulo Coehlo, "The Alchemist"
 * "Sometimes good things fall apart so better things can fall together." — Marilyn Monroe
 * "Even if you fall on your face, you’re still moving forward." — Victor Kiam
 * "Once you replace negative thoughts with positive ones, you’ll start having positive results." — Willie Nelson
 * "If you’re not making mistakes, then you’re not doing anything. I’m positive that a doer makes mistakes." — John Wooden
 */

const messageQuotes = [
    "Every day brings new choices. — Martha Beck",
    "Work hard, stay positive, and get up early. It’s the best part of the day. — George Allen, Sr.",
    "I can’t change the direction of the wind, but I can adjust my sails to always reach my destination. — Jimmy Dean",
    "When we love, we always strive to become better than we are. When we strive to become better than we are, everything around us becomes better too. — Paulo Coehlo, The Alchemist",
    "Sometimes good things fall apart so better things can fall together. — Marilyn Monroe",
    "Even if you fall on your face, you’re still moving forward. — Victor Kiam",
    "Once you replace negative thoughts with positive ones, you’ll start having positive results. — Willie Nelson",
    "If you’re not making mistakes, then you’re not doing anything. I’m positive that a doer makes mistakes. — John Wooden"

];
function randomQuote(){
    const messageQuoteLength = messageQuotes.length;
    return messageQuotes[Math.floor(Math.random() * messageQuoteLength)];
};

console.log(randomQuote());
console.log(randomQuote());
console.log(randomQuote());
