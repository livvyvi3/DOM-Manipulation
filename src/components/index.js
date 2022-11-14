
//make use of a json API to imporve the code

const btn = document.getElementById('changeQuote');
let quote = document.querySelector('.quote');
let author = document.querySelector('.author');

const data = [
    {
      "quote": "Sometimes the idea behind a program is one small creative effort.",
      "Author": "Dan Bricklin"
    },
    {
      "quote": "As a rule, software systems do not work well until they have been used, and have failed repeatedly, in real applications.",
      "Author": "Dave Parnas"
    },
    {
      "quote": "Complexity has nothing to do with intelligence, simplicity does.",
      "Author": "Larry Bossidy"
    },
    {
      "quote": "The task of the software development team is to engineer the illusion of simplicity.",
      "Author": "Grady Booch"
    },
    {
      "quote": "Any optimization that is not about the bottleneck is an illusion of improvement.",
      "Author": "Federico Toledo"
    },
    {
      "quote": "A good programmer is someone who always looks both ways before crossing a one-way street.",
      "Author": "Doug Linder"
    }
  ];
  


btn.addEventListener('click', function handleClick(){

    let random = Math.floor(Math.random() * data.length);

    quote.innerText = data[random].quote;
    author.innerText = data[random].Author;

})