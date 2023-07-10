/**
 * Project objectives:
 * Build a message generator program using JavaScript
 * Use Git version control
 * Use command line
 * Develop locally on your computer
 */
function generateRandomIndexNumber(num){
    return Math.floor(Math.random() * num);
}

function generateRandomQuote(){
    let number = Math.floor(Math.random() * 3);
    let topic = '';
    switch(number){
        case 0:
            topic = 'inspirational';
            break;
        case 1:
            topic = 'funny';
            break;
        case 2:
            topic = 'strength';
            break;
        default:
            console.log('invalid choice');

    }
    return topic;
}


const messageQuotes = {
    inspirational: ["Every day brings new choices. — Martha Beck",
    "Work hard, stay positive, and get up early. It’s the best part of the day. — George Allen, Sr.",
    "I can’t change the direction of the wind, but I can adjust my sails to always reach my destination. — Jimmy Dean",
    "When we love, we always strive to become better than we are. When we strive to become better than we are, everything around us becomes better too. — Paulo Coehlo, The Alchemist",
    "Sometimes good things fall apart so better things can fall together. — Marilyn Monroe",
    "Even if you fall on your face, you’re still moving forward. — Victor Kiam",
    "Once you replace negative thoughts with positive ones, you’ll start having positive results. — Willie Nelson",
    "If you’re not making mistakes, then you’re not doing anything. I’m positive that a doer makes mistakes. — John Wooden"],
    funny:["I generally avoid temptation unless I can't resist it. ― Mae West",
    "Do not take life too seriously. You will never get out of it alive. — Elbert Hubbard",
    "I love mankind... it's people I can't stand!! ― Charles M. Schulz",
    "When life gives you lemons, squirt someone in the eye. ― Cathy Guisewite",
    "I'm not crazy — I've just been in a very bad mood for 40 years. — Ouiser Boudreaux, Steel Magnolias",
    "A woman is like a tea bag: You can't tell how strong she is until you put her in hot water. — Eleanor Roosevelt" ],
    strength:["A truly strong person does not need the approval of others any more than a lion needs the approval of sheep. — Vernon Howard",
    "I like criticism. It makes you strong. —LeBron James",
    "Strength and growth come only through continuous effort and struggle. —Napoleon Hill",
    "Tough times never last, but tough people do. —Robert H. Schuller",
    "Nothing is more beautiful than the smile that has struggled through the tears. —Demi Lovato"]
};

function selectRandomQuote(){
    let topic = generateRandomQuote();
    let index = generateRandomIndexNumber(messageQuotes[topic].length);
    console.log(topic + ' quote: ' + messageQuotes[topic][index]);
};


selectRandomQuote();
