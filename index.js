const names = require('./lib/data/names');
const surnames = require('./lib/data/surnames');
const middleNames = require('./lib/data/middlenames');
const pets = require('./lib/data/pets');
const countries = require('./lib/data/countries');
const cities = require('./lib/data/cities');
const codes = require('./lib/data/phoneCodes');
const mails = require('./lib/data/mails');

class RandomSeed {
  result = {}

  // Get names method
  getNames (amount = 1) {
    if (amount <= 0) {
      throw new Error(`Error, amount should be more or equal to 1, got ${amount}`);
    }

    const randomArrayOfNames = [];

    let i = 0;
    while (i <= amount - 1) {
      randomArrayOfNames.push(names[Math.floor(Math.random() * names.length)]);
      i ++;
    } 

    this.result = { ...this.result, names: randomArrayOfNames };
    return this;
  }

  // Get surnames method
  getSurnames (amount = 1) {
    if (amount <= 0) {
      throw new Error(`Error, amount should be more or equal to 1, got ${amount}`);
    }

    const randomArrayOfSurnames = [];
    
    let i = 0;
    while (i <= amount - 1) {
      randomArrayOfSurnames.push(surnames[Math.floor(Math.random() * surnames.length)]);
      i ++;
    } 

    this.result = { ...this.result, surnames: randomArrayOfSurnames };
    return this;
  }

    // Get middle names method
    getMiddleNames (amount = 1) {
      if (amount <= 0) {
        throw new Error(`Error, amount should be more or equal to 1, got ${amount}`);
      }

      const randomArrayOfMiddleNames = [];
      
      let i = 0;
      while (i <= amount - 1) {
        randomArrayOfMiddleNames.push(middleNames[Math.floor(Math.random() * middleNames.length)]);
        i ++;
      } 
  
      this.result = { ...this.result, middleNames: randomArrayOfMiddleNames };
      return this;
    }
    
    // Get pets names method
    getPetsNames (amount = 1) {
      if (amount <= 0) {
        throw new Error(`Error, amount should be more or equal to 1, got ${amount}`);
      }

      const randomArrayOfPetsNames = [];
      
      let i = 0;
      while (i <= amount - 1) {
        randomArrayOfPetsNames.push(pets[Math.floor(Math.random() * pets.length)]);
        i ++;
      } 
  
      this.result = { ...this.result, pets: randomArrayOfPetsNames };
      return this;
    }

     // Get countries names method
     getCountriesNames (amount = 1) {
      if (amount <= 0) {
        throw new Error(`Error, amount should be more or equal to 1, got ${amount}`);
      }

      const randomArrayOfCountriesNames = [];
      
      let i = 0;
      while (i <= amount - 1) {
        randomArrayOfCountriesNames.push(countries[Math.floor(Math.random() * countries.length)]);
        i ++;
      }
  
      this.result = { ...this.result, countries: randomArrayOfCountriesNames };
      return this;
    }

      // Get cities method
      getCitiesNames (amount = 1) {
        if (amount <= 0) {
          throw new Error(`Error, amount should be more or equal to 1, got ${amount}`);
        }

        const randomArrayOfCitiesNames = [];
        
        let i = 0;
        while (i <= amount - 1) {
          randomArrayOfCitiesNames.push(cities[Math.floor(Math.random() * cities.length)]);
          i ++;
        }
    
        this.result = { ...this.result, cities: randomArrayOfCitiesNames };
        return this;
      }

      // Get phone numbers method
      getPhoneNumbers (amount = 1) {
        if (amount <= 0) {
          throw new Error(`Error, amount should be more or equal to 1, got ${amount}`);
        }
        const randomArrayOfPhoneNumbers = [];
        
        let i = 0;
        while (i <= amount - 1) {
          randomArrayOfPhoneNumbers.push(
            '+' +
            (codes[Math.floor(Math.random() * codes.length)] +
            Math.floor(Math.random() * 9) +
            Math.floor(Math.random() * 9) +
            Math.floor(Math.random() * 9) +
            Math.floor(Math.random() * 9) +
            Math.floor(Math.random() * 9) +
            Math.floor(Math.random() * 9))
            );
          i ++;
        }
      
        this.result = { ...this.result, phoneNumbers: randomArrayOfPhoneNumbers };
        return this;
      }

      // Get age method
      getAges(amount = 1, min = 0, max = 120) {
        if (amount <= 0) {
          throw new Error(`Error, amount should be more or equal to 1, got ${amount}`);
        }
        if (max < min) {
          throw new Error(`Error, max should be more or equal to min, got max: ${max}, min: ${min}`);
        }
        if (max < 0 || min < 0) {
          throw new Error(`Error, min or max should be more or equal to 0, got max: ${max}, min: ${min}`);
        }
        if (min < 0) {
          throw new Error(`Error, min should be more or equal to 0, got ${min}`);
        }
        if (max >= 100000000000000) {
          throw new Error(`Error, min should be less or equal to 100000000000000, got ${max}`);
        }

        const randomArrayOfAges = [];    
    
        max += 1;
        let i = 0;
        while (i <= amount - 1) {
          randomArrayOfAges.push(
            Math.floor(Math.random() * (max - min)) + min
          )
          i++;
        }
      
        this.result = { ...this.result, ages: randomArrayOfAges };
        return this;
      }

      // Get mails method
      getMails(amount = 1) {
        if (amount <= 0) {
          throw new Error(`Error, amount should be more or equal to 1, got ${amount}`);
        }

        const randomArrayOfMails = [];    

        let i = 0;
        while (i <= amount - 1) {
          randomArrayOfMails.push(
            names[Math.floor(Math.random() * names.length)] +
            Math.floor(Math.random() * 9) +
            Math.floor(Math.random() * 9) +
            Math.floor(Math.random() * 9) +
            `@` +
            mails[Math.floor(Math.random() * mails.length)]
            );
          i ++;
        }
    
        this.result = { ...this.result, mails: randomArrayOfMails };
        return this;
      }
}

module.exports = new RandomSeed()
