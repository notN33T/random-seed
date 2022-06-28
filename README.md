
# Random seed

This module was created to simplify process of seeding


## Installing

To install this module run

```bash
  npm install -d rseed
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
```


## All methods

- getNames(amount) (names at result object)
- getSurnames(amount) (surnames at result object)
- getMiddleNames(amount) (middleNames at result object)
- getPetsNames(amount) (pets at result object)
- getCountriesNames(amount) (countries at result object)
- getCitiesNames(amount) (cities at result object)
- getPhoneNumbers(amount) (phoneNumbers at result object)
- getAge(amount, min, max) (ages at result object)


## Roadmap

- Add more methods

