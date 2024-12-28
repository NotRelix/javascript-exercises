const findTheOldest = function(array) {
  let oldestPerson = array[0]
  array.map(person => {
    const oldestPersonDeath = ('yearOfDeath' in oldestPerson) 
    ? oldestPerson.yearOfDeath
    : new Date().getFullYear()
    
    const currentPersonDeath = ('yearOfDeath' in person) 
    ? person.yearOfDeath
    : new Date().getFullYear()
    
    const oldestPersonAge = oldestPersonDeath - oldestPerson.yearOfBirth;
    const currentPersonAge = currentPersonDeath - person.yearOfBirth;
    if (currentPersonAge > oldestPersonAge) {
      oldestPerson = person;
    }
  })
  return oldestPerson
};

// Do not edit below this line
module.exports = findTheOldest;
