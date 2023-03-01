function generate(){
const qLibrary ={
    "Euripides" : `"The greatest pleasure of life is love."`,
    "Grandma Moses" : `"Life is what we make it, always has been, always will be."`,
    "Benjamin Franklin" : `"Life’s tragedy is that we get old too soon and wise too late."`,
    "Kevin Kruse" : `"Life is about making an impact, not making an income."`,
    "Michael Jordan" : `"I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed."`,
    "Babe Ruth" : `"Every strike brings me closer to the next home run."`,
    " Mark Twain" : `"The two most important days in your life are the day you are born and the day you find out why."`,
    "Anais Nin" : `"Life shrinks or expands in proportion to one’s courage."`,
    "John Lennon" : `"When I was 5 years old, my mother always told me that happiness was the key to life.  When I went to school, they asked me what I wanted to be when I grew up.  I wrote down ‘happy’.  They told me I didn’t understand the assignment, and I told them they didn’t understand life."`,
    "Neil Armstrong " : `"I believe every human has a finite number of heartbeats. I don’t intend to waste any of mine."`,
    "Mahatma Gandhi" : `"Live as if you were to die tomorrow. Learn as if you were to live forever."`,
    "Bill Clinton" : `"If you live long enough, you’ll make mistakes. But if you learn from them, you’ll be a better person"`,
    "Kate Winslet " : `"Life is short, and it is here to be lived."`,
    "Frank Lloyd Wright" : `"The longer I live, the more beautiful life becomes."`,
    "T.S. Eliot" : `"Every moment is a fresh beginning."`,
    "Malcolm Forbes" : `"When you cease to dream you cease to live."`,
    "Morris West" : `"If you spend your whole life waiting for the storm, you’ll never enjoy the sunshine."`,
    "Dr. Seuss " : `"Don’t cry because it’s over, smile because it happened."`,
    "Leonardo DiCaprio" : `"If you can do what you do best and be happy, you’re further along in life than most people."`,
    "Hillary Clinton" : `"We should remember that just as a positive outlook on life can promote good health, so can everyday acts of kindness."`,
    "Mary Kay Ash " : `"Don’t limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve."`,
    "J. K. Rowling" : `"It is our choices that show what we truly are, far more than our abilities."`,
    "Jeff Bezos" : `"If you’re not stubborn, you’ll give up on experiments too soon. And if you’re not flexible, you’ll pound your head against the wall and you won’t see a different solution to a problem you’re trying to solve."`,
    "Abraham Lincoln" : `"The best way to predict your future is to create it."`,
    "Michael Jordan" : `"You must expect great things of yourself before you can do them."`,
    "Jay-Z" : `"Identity is a prison you can never escape, but the way to redeem your past is not to run from it, but to try to understand it, and use it as a foundation to grow."`,
    "Tina Fey" : `"There are no mistakes, only opportunities."`,
    "Warren Buffett" : `"It takes 20 years to build a reputation and five minutes to ruin it. If you think about that, you’ll do things differently."`,
    "Audrey Hepburn" : `"As you grow older, you will discover that you have two hands, one for helping yourself, the other for helping others."`,
    "Ellen DeGeneres" : `"Sometimes you can’t see yourself clearly until you see yourself through the eyes of others."`,
}


let authors = Object.keys(qLibrary)
let author = authors[Math.floor(Math.random() * authors.length)]
let  quotes = Object.values(qLibrary)
let quote = qLibrary[author]

document.getElementById("quote").innerText = quote

document.getElementById("author").innerText= author


}
