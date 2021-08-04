const quotes = [
    {
        quote: "절대 어제를 후회하지 마라. 인생은 오늘의  내 안에 있고 내일은 스스로 만드는것이다.",
        author: "론허바드"
    },
    {
        quote: "계단을 밟아야 계단 위에 올라설수 있다",
        author: "조 지라드"
    },
    {
        quote: "좋은 성과를 얻으려면 한 걸음 한 걸음이 힘차고 충실하지 않으면 안 된다",
        author: "단테"
    },
    {
        quote: "평생 살 것처럼 꿈을 꾸어라.그리고 내일 죽을 것처럼 오늘을 살아라",
        author: "제임스 딘"
    },
    {
        quote: "내가 헛되이 보낸 오늘은 어제 죽어간 이들이 그토록 바라던 하루이다 단 하루면 인간적인 모든 것을 멸망시킬수도 다시 소생시킬수도 있다.",
        author: "소포클레스"
    },
    {
        quote: "도중에 포기하지 말라. 망설이지 말라. 최후의 성공을 거둘 때까지 밀고 나가자.",
        author: "헨리포드"
    },
    {
        quote: "문제점을 찾지 말고 해결책을 찾으라",
        author: "헨리포드"
    },
    {
        quote: "절대 어제를 후회하지 마라 . 인생은 오늘의 나 안에 있고 내일은 스스로 만드는 것이다 ",
        author: "L.론허바드"
    },
    {
        quote: "도저히 손댈 수가 없는 곤란에 부딪혔다면 과감하게 그 속으로 뛰어들라 . 그리하면 불가능하다고 생각했던 일이 가능해진다.",
        author: "키케로"
    },
    {
        quote: "작은 기회로 부터 종종 위대한 업적이 시작된다",
        author: "데모스테네스"
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;