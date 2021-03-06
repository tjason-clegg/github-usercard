/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/


// axios.get(`https://api.github.com/users/tjason-clegg`)
// .then(response => {
//   console.log(response)
// })

// .catch(error =>{
//   console.log(error)
// })

// .finally(() => {
//   console.log('done')
// })
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/


const followersArray = [
  'songamugenzi',
  'iatechristmas',
  'Vippsi',
  'Jeffreyo3',
  'bigknell',
];

const entryPoint = document.querySelector('.cards')

cardMaker = (attrs) => {
  const {avatar_url, name, username, location, profile, followers, following, bio, html_url} = attrs

  const card = document.createElement('div')
  const cardImg = document.createElement('img')
  const cardInfo = document.createElement('div')
  const cardTitle = document.createElement('h3')
  const cardUsername = document.createElement('p')
  const cardLocation = document.createElement('p')
  const cardProfile = document.createElement('p')
  const cardFollowers = document.createElement('p')
  const cardFollowing = document.createElement('p')
  const cardBio = document.createElement('p')
  const cardLink = document.createElement('a')

  entryPoint.appendChild(card)
  card.appendChild(cardImg)
  card.appendChild(cardInfo)
  cardInfo.appendChild(cardTitle)
  cardInfo.appendChild(cardUsername)
  cardInfo.appendChild(cardLocation)
  cardInfo.appendChild(cardProfile)
  cardInfo.appendChild(cardFollowers)
  cardInfo.appendChild(cardFollowing)
  cardInfo.appendChild(cardBio)

  card.classList.add('card')
  cardInfo.classList.add('card-info')
  cardTitle.classList.add('name')
  cardUsername.classList.add('username')
  
  cardImg.src = avatar_url
  cardTitle.textContent = name
  cardUsername.textContent = username
  cardLocation.textContent = `Location: ${location}`
  cardProfile.textContent = `Profile: `
  cardFollowers.textContent = `Followers: ${followers}`
  cardFollowing.textContent = `Following: ${following}`
  cardBio.textContent = `Bio ${bio}`
  cardLink.href = html_url

  cardLink.textContent = html_url

  cardProfile.appendChild(cardLink)
  return card

}

const getUser = (username) => {
  axios.get(`https://api.github.com/users/${username}`)
  .then(response => {

    const user = cardMaker(response.data)

    entryPoint.appendChild(user)
    
  })

}

  followersArray.forEach(follower => {
    getUser(follower)
  
 })


/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/



/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
