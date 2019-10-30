const person = {
  name: 'Brian',
  age: 33,
  location: {
    city: 'Lagos',
    country: 'Nigeria',
     temp:37
    
  }
}
// const { name:firstName ='Anonymous', age } = person
// const {city, country, temp:temperature} = person.location
// console.log(`${firstName} is ${age}`)

// if (city, country, temperature) {
//   console.log(` ${city} in ${country}  is ${temperature} today`)
// }

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// }

// const {title, author} = book
// const {name: publisherName = 'self-published'} = book.publisher

// console.log(publisherName)

// const address = [
//   '1299 Natasha Street', 'Lagos'
// ]


// const [street, state='Delta State'] = address


const item = ['Coffee (hot)', '$2:00', '$2.5', '$2.75']

const [coffee, , , medium] = item
console.log(`A cup of ${coffee} cost ${medium}`)