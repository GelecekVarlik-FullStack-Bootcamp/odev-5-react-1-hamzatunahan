const person1 = {
    name: 'hakan',
    surname: 'özoğlu',
    age: '30',
    location: 'istanbul',
    gender: 'man',
    score: 10,
    workingDays: 90,
    books: 1,
  }
  const person2 = {
    name: 'akif',
    surname: 'özoğlu',
    age: '32',
    location: 'istanbul',
    gender: 'man',
    score: 17,
    workingDays: 17,
    books: 9,
  }
  const person3 = {
    name: 'beyza',
    surname: 'özoğlu',
    age: '16',
    location: 'trabzon',
    gender: 'woman',
    score: 28,
    workingDays: 64,
    books: 178,
  }
  const person4 = {
      name: 'alp',
      surname: 'öztürk',
      age: '28',
      location: 'aydin',
      gender: 'man',
      score: 28,
      workingDays: 64,
      books: 178,
    }
    const person5 = {
      name: 'serdar',
      surname: 'çakır',
      age: '22',
      location: 'istanbul',
      gender: 'man',
      score: 28,
      workingDays: 64,
      books: 178,
    }
  
    const person6 = {
      name: 'rümeysa',
      surname: 'türkan',
      age: '22',
      location: 'istanbul',
      gender: 'man',
      score: 28,
      workingDays: 64,
      books: 178,
    }
    const person7 = {
      name: 'mehmet ali',
      surname: 'tunay',
      age: '30',
      location: 'istanbul',
      gender: 'man',
      score: 28,
      workingDays: 64,
      books: 178,
    }
  const person8 = {
      name: 'furkan',
      surname: 'atsan',
      age: '23',
      location: 'ankara',
      gender: 'man',
      score: 28,
      workingDays: 64,
      books: 178,
    }
    const person9 = {
      name: 'kader',
      surname: 'arslan',
      age: '24',
      location: 'adana',
      gender: 'man',
      score: 28,
      workingDays: 64,
      books: 178,
    }
  const person10 = {
      name: 'uğurcan',
      surname: 'uçar',
      age: '24',
      location: 'trabzon',
      gender: 'man',
      score: 28,
      workingDays: 64,
      books: 178,
    }

const people = [ person1, person2, person3,person4, person5, person6,person7, person8, person9]


    // şehire göre sıralama
function groupBy(objectArray, property) {
  return objectArray.reduce(function (prev, person) {
    let key = person[property]
    if (!prev[key]) {
      prev[key] = []
    }
    prev[key].push(person)
    return prev
  }, {})
}
let groupedPeople = groupBy(people, 'location')
console.log(groupedPeople)



// İsimlerin ilk harfine göre sıralama

function groupBy2(objectArray, property) {
  return objectArray.reduce(function (prev, person) {
    let key = person[property][0]   // alınan propertynin 0. indexini alıyor ve keye atıyor
    if (!prev[key]) {
      prev[key] = []
    }
    prev[key].push(person)
    return prev
  }, {})
}

let groupedPeople2 = groupBy2(people, 'name')
console.log(groupedPeople2)
