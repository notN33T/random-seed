
# Random seed

A lightweight package that provides any amount of randomized data. You can use it to seed your database or for any other such purpose.


## Installing

To install this module run

```bash
  npm install -D rseed
```


## Usage/Examples

```javascript
const rseed = require('rseed')

rseed.getNames(5).getSurnames(2).result

// Result will be like  
// {
//   names: [ 'Bojan', 'Abdeus', 'Alvaro', 'Job', 'Adoniram' ],
//   surnames: [ 'Seter', 'Hodne' ]
// }

rseed.only().getNames(5)

// Result will be like  
// [ 'Bojan', 'Abdeus', 'Alvaro', 'Job', 'Adoniram' ]
```


## All methods

- getNames(amount) (names in result object)
- getSurnames(amount) (surnames in result object)
- getMiddleNames(amount) (middleNames in result object)
- getPetsNames(amount) (pets in result object)
- getCountriesNames(amount) (countries in result object)
- getCitiesNames(amount) (cities in result object)
- getPhoneNumbers(amount) (phoneNumbers in result object)
- getAges(amount, min, max) (ages in result object)
- getMails(amount) (mails in result object)
- getRandomWords(amount) (randomWords in result object)
- getTestText(amountOfLetters) (text in result object)


## Roadmap

- More methods 💪



## What's new in version 2.0.0

- Added typing 🎊
