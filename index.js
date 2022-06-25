const names = require('./lib/names');
const surnames = require('./lib/surnames');
const middleNames = require('./lib/middlenames');
const pets = require('./lib/pets');
const countries = require('./lib/countries');
const cities = require('./lib/cities');

class RandomSeed {
  result = {}

  // Get names method
  getNames (amount = 1) {
  let i = 0
    const randomArrayOfNames = [];

    while (i <= amount - 1) {
      randomArrayOfNames.push(names[Math.floor(Math.random() * names.length)]);
      i ++;
    } 

    this.result = { ...this.result, names: randomArrayOfNames };
    return this;
  }

  // Get surnames method
  getSurnames (amount = 1) {
    let i = 0
      const randomArrayOfSurnames = [];
  
      while (i <= amount - 1) {
        randomArrayOfSurnames.push(surnames[Math.floor(Math.random() * surnames.length)]);
        i ++;
      } 
  
      this.result = { ...this.result, surnames: randomArrayOfSurnames };
      return this;
    }

    // Get middle names method
    getMiddleNames (amount = 1) {
      let i = 0
        const randomArrayOfMiddleNames = [];
    
        while (i <= amount - 1) {
          randomArrayOfMiddleNames.push(middleNames[Math.floor(Math.random() * middleNames.length)]);
          i ++;
        } 
    
        this.result = { ...this.result, middleNames: randomArrayOfMiddleNames };
        return this;
      }
    
    // Get pets names method
    getPetsNames (amount = 1) {
      let i = 0
        const randomArrayOfPetsNames = [];
    
        while (i <= amount - 1) {
          randomArrayOfPetsNames.push(pets[Math.floor(Math.random() * pets.length)]);
          i ++;
        } 
    
        this.result = { ...this.result, pets: randomArrayOfPetsNames };
        return this;
      }

     // Get countries names method
     getCountriesNames (amount = 1) {
      let i = 0
        const randomArrayOfCountriesNames = [];
    
        while (i <= amount - 1) {
          randomArrayOfCountriesNames.push(countries[Math.floor(Math.random() * countries.length)]);
          i ++;
        }
    
        this.result = { ...this.result, countries: randomArrayOfCountriesNames };
        return this;
      }

      // Get cities method
      getCitiesNames (amount = 1) {
        let i = 0
          const randomArrayOfCitiesNames = [];
      
          while (i <= amount - 1) {
            randomArrayOfCitiesNames.push(cities[Math.floor(Math.random() * cities.length)]);
            i ++;
          }
      
          this.result = { ...this.result, cities: randomArrayOfCitiesNames };
          return this;
        }
}

module.exports = new RandomSeed()
