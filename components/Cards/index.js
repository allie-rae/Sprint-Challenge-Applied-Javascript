// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response => {
    let cardsContainer = document.querySelector('.cards-container')

    let arrayValues = Object.values(response.data.articles);

    return arrayValues.forEach(element => {
        element.forEach(article => {
      cardsContainer.appendChild(createCard(article)
      )
    });
    })
    })
.catch(error => {
  console.log(error)
})

function createCard(info) {
        let card = document.createElement('div');
        card.classList.add('card');
        
        let headline = document.createElement('div');
        headline.classList.add('headline');
        headline.textContent = info.headline

        let author = document.createElement('div');
        author.classList.add('author')

        let imgContainer = document.createElement('div');
        imgContainer.classList.add('img-container');

        let cardImg = document.createElement('img')
        cardImg.setAttribute('src', info.authorphoto)

        let cardSpan = document.createElement('span');
        cardSpan.textContent = `By ${info.authorName}`

        card.appendChild(headline)
        headline.appendChild(author)
        author.appendChild(imgContainer)
        imgContainer.appendChild(cardImg)
        imgContainer.appendChild(cardSpan)

        return card
    }