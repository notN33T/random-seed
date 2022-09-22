const names = require('./lib/data/names');
const surnames = require('./lib/data/surnames');
const middleNames = require('./lib/data/middlenames');
const pets = require('./lib/data/pets');
const countries = require('./lib/data/countries');
const cities = require('./lib/data/cities');
const codes = require('./lib/data/phoneCodes');
const mails = require('./lib/data/mails');
const randomWords = require('./lib/data/randomWords');
const description = require('./lib/data/description');

class RandomSeed {
  result = {}

  // Get names method
  getNames (amount = 1) {
    if (amount < 1) {
      throw new Error(`Error, amount should be more or equal to 1, got ${amount}`);
    }
    if (amount >= 100000000) {
      throw new Error(`Error, amount should be less then 100000000, got ${amountOfLetters}`);
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
    if (amount < 1) {
      throw new Error(`Error, amount should be more or equal to 1, got ${amount}`);
    }
    if (amount >= 100000000) {
      throw new Error(`Error, amount should be less then 100000000, got ${amountOfLetters}`);
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
      if (amount < 1) {
        throw new Error(`Error, amount should be more or equal to 1, got ${amount}`);
      }
      if (amount >= 100000000) {
        throw new Error(`Error, amount should be less then 100000000, got ${amountOfLetters}`);
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
      if (amount < 1) {
        throw new Error(`Error, amount should be more or equal to 1, got ${amount}`);
      }
      if (amount >= 100000000) {
        throw new Error(`Error, amount should be less then 100000000, got ${amountOfLetters}`);
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
      if (amount < 1) {
        throw new Error(`Error, amount should be more or equal to 1, got ${amount}`);
      }
      if (amount >= 100000000) {
        throw new Error(`Error, amount should be less then 100000000, got ${amountOfLetters}`);
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
        if (amount < 1) {
          throw new Error(`Error, amount should be more or equal to 1, got ${amount}`);
        }
        if (amount >= 100000000) {
          throw new Error(`Error, amount should be less then 100000000, got ${amountOfLetters}`);
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
        if (amount < 1) {
          throw new Error(`Error, amount should be more or equal to 1, got ${amount}`);
        }
        if (amount >= 100000000) {
          throw new Error(`Error, amount should be less then 100000000, got ${amountOfLetters}`);
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
        if (amount < 1) {
          throw new Error(`Error, amount should be more or equal to 1, got ${amount}`);
        }
        if (amount >= 100000000) {
          throw new Error(`Error, amount should be less then 100000000, got ${amountOfLetters}`);
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
        if (amount < 1) {
          throw new Error(`Error, amount should be more or equal to 1, got ${amount}`);
        }
        if (amount >= 100000000) {
          throw new Error(`Error, amount should be less then 100000000, got ${amountOfLetters}`);
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

      // Ger random words method
      getRandomWords(amount = 1) {
        if (amount < 1) {
          throw new Error(`Error, amount should be more or equal to 1, got ${amount}`);
        }
        if (amount >= 100000000) {
          throw new Error(`Error, amount should be less then 100000000, got ${amountOfLetters}`);
        }
    
        const randomArrayOfWords = [];
    
        let i = 0;
        while (i <= amount - 1) {
          randomArrayOfWords.push(randomWords[Math.floor(Math.random() * randomWords.length)]);
          i ++;
        }
    
        this.result = { ...this.result, randomWords: randomArrayOfWords };
        return this;
      }

      // Get test text method
      getTestText(amountOfLetters = 50) {
        if (amountOfLetters < 1) {
          throw new Error(`Error, amountOfLetters should be more or equal to 1, got ${amount}`);
        }
        if (amountOfLetters >= 100000000) {
          throw new Error(`Error, amount of letters should be less then 100000000, got ${amountOfLetters}`);
        }

        let testText = description;
        let i = 0;
        while (testText.length < amountOfLetters) {
          testText += description;
        }

        testText = testText.substring(0, amountOfLetters);

        this.result = { ...this.result, text: testText }
        return this
      }

      // A method to get one type of data
      only = () => {
        return {
          getNames: (amount) => {
            return this.getNames(amount).result.names;
          },
          getSurnames: (amount) => {
            return this.getSurnames(amount).result.surnames;
          },
          getMiddleNames: (amount) => {
            return this.getMiddleNames(amount).result.middleNames;
          },
          getPetsNames: (amount) => {
            return this.getPetsNames(amount).result.pets;
          },
          getCountriesNames: (amount) => {
            return this.getCountriesNames(amount).result.countries;
          },
          getCitiesNames: (amount) => {
            return this.getCitiesNames(amount).result.cities;
          },
          getPhoneNumbers: (amount) => {
            return this.getPhoneNumbers(amount).result.phoneNumbers;
          },
          getAges: (amount = 1, min = 0, max = 120) => {
            return this.getAges(amount, min, max).result.ages;
          },
          getMails: (amount) => {
            return this.getMails(amount).result.mails;
          },
          getRandomWords: (amount) => {
            return this.getRandomWords(amount).result.randomWords;
          },
          getTestText: (amountOfLetters) => {
            return this.getTestText(amountOfLetters).result.text;
          },
        }
      }
}

module.exports = new RandomSeed()
