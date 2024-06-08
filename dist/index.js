"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const names_1 = __importDefault(require("./lib/data/names"));
const surnames_1 = __importDefault(require("./lib/data/surnames"));
const middlenames_1 = __importDefault(require("./lib/data/middlenames"));
const pets_1 = __importDefault(require("./lib/data/pets"));
const countries_1 = __importDefault(require("./lib/data/countries"));
const cities_1 = __importDefault(require("./lib/data/cities"));
const phoneCodes_1 = __importDefault(require("./lib/data/phoneCodes"));
const mails_1 = __importDefault(require("./lib/data/mails"));
const randomWords_1 = __importDefault(require("./lib/data/randomWords"));
const description_1 = __importDefault(require("./lib/data/description"));
class RandomSeed {
    constructor() {
        this.result = {};
        // A method to get one type of data
        this.only = () => {
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
            };
        };
    }
    // Get names method
    getNames(amount = 1) {
        if (amount < 1) {
            throw new Error(`Error, amount should be more or equal to 1, got ${amount}`);
        }
        if (amount >= 100000000) {
            throw new Error(`Error, amount should be less then 100000000, got ${amount}`);
        }
        const randomArrayOfNames = [];
        let i = 0;
        while (i <= amount - 1) {
            randomArrayOfNames.push(names_1.default[Math.floor(Math.random() * names_1.default.length)]);
            i++;
        }
        this.result = Object.assign(Object.assign({}, this.result), { names: randomArrayOfNames });
        return this;
    }
    // Get surnames method
    getSurnames(amount = 1) {
        if (amount < 1) {
            throw new Error(`Error, amount should be more or equal to 1, got ${amount}`);
        }
        if (amount >= 100000000) {
            throw new Error(`Error, amount should be less then 100000000, got ${amount}`);
        }
        const randomArrayOfSurnames = [];
        let i = 0;
        while (i <= amount - 1) {
            randomArrayOfSurnames.push(surnames_1.default[Math.floor(Math.random() * surnames_1.default.length)]);
            i++;
        }
        this.result = Object.assign(Object.assign({}, this.result), { surnames: randomArrayOfSurnames });
        return this;
    }
    // Get middle names method
    getMiddleNames(amount = 1) {
        if (amount < 1) {
            throw new Error(`Error, amount should be more or equal to 1, got ${amount}`);
        }
        if (amount >= 100000000) {
            throw new Error(`Error, amount should be less then 100000000, got ${amount}`);
        }
        const randomArrayOfMiddleNames = [];
        let i = 0;
        while (i <= amount - 1) {
            randomArrayOfMiddleNames.push(middlenames_1.default[Math.floor(Math.random() * middlenames_1.default.length)]);
            i++;
        }
        this.result = Object.assign(Object.assign({}, this.result), { middleNames: randomArrayOfMiddleNames });
        return this;
    }
    // Get pets names method
    getPetsNames(amount = 1) {
        if (amount < 1) {
            throw new Error(`Error, amount should be more or equal to 1, got ${amount}`);
        }
        if (amount >= 100000000) {
            throw new Error(`Error, amount should be less then 100000000, got ${amount}`);
        }
        const randomArrayOfPetsNames = [];
        let i = 0;
        while (i <= amount - 1) {
            randomArrayOfPetsNames.push(pets_1.default[Math.floor(Math.random() * pets_1.default.length)]);
            i++;
        }
        this.result = Object.assign(Object.assign({}, this.result), { pets: randomArrayOfPetsNames });
        return this;
    }
    // Get countries names method
    getCountriesNames(amount = 1) {
        if (amount < 1) {
            throw new Error(`Error, amount should be more or equal to 1, got ${amount}`);
        }
        if (amount >= 100000000) {
            throw new Error(`Error, amount should be less then 100000000, got ${amount}`);
        }
        const randomArrayOfCountriesNames = [];
        let i = 0;
        while (i <= amount - 1) {
            randomArrayOfCountriesNames.push(countries_1.default[Math.floor(Math.random() * countries_1.default.length)]);
            i++;
        }
        this.result = Object.assign(Object.assign({}, this.result), { countries: randomArrayOfCountriesNames });
        return this;
    }
    // Get cities method
    getCitiesNames(amount = 1) {
        if (amount < 1) {
            throw new Error(`Error, amount should be more or equal to 1, got ${amount}`);
        }
        if (amount >= 100000000) {
            throw new Error(`Error, amount should be less then 100000000, got ${amount}`);
        }
        const randomArrayOfCitiesNames = [];
        let i = 0;
        while (i <= amount - 1) {
            randomArrayOfCitiesNames.push(cities_1.default[Math.floor(Math.random() * cities_1.default.length)]);
            i++;
        }
        this.result = Object.assign(Object.assign({}, this.result), { cities: randomArrayOfCitiesNames });
        return this;
    }
    // Get phone numbers method
    getPhoneNumbers(amount = 1) {
        if (amount < 1) {
            throw new Error(`Error, amount should be more or equal to 1, got ${amount}`);
        }
        if (amount >= 100000000) {
            throw new Error(`Error, amount should be less then 100000000, got ${amount}`);
        }
        const randomArrayOfPhoneNumbers = [];
        let i = 0;
        while (i <= amount - 1) {
            randomArrayOfPhoneNumbers.push('+' +
                (phoneCodes_1.default[Math.floor(Math.random() * phoneCodes_1.default.length)] +
                    Math.floor(Math.random() * 9) +
                    Math.floor(Math.random() * 9) +
                    Math.floor(Math.random() * 9) +
                    Math.floor(Math.random() * 9) +
                    Math.floor(Math.random() * 9) +
                    Math.floor(Math.random() * 9)));
            i++;
        }
        this.result = Object.assign(Object.assign({}, this.result), { phoneNumbers: randomArrayOfPhoneNumbers });
        return this;
    }
    // Get age method
    getAges(amount = 1, min = 0, max = 120) {
        if (amount < 1) {
            throw new Error(`Error, amount should be more or equal to 1, got ${amount}`);
        }
        if (amount >= 100000000) {
            throw new Error(`Error, amount should be less then 100000000, got ${amount}`);
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
            randomArrayOfAges.push(Math.floor(Math.random() * (max - min)) + min);
            i++;
        }
        this.result = Object.assign(Object.assign({}, this.result), { ages: randomArrayOfAges });
        return this;
    }
    // Get mails method
    getMails(amount = 1) {
        if (amount < 1) {
            throw new Error(`Error, amount should be more or equal to 1, got ${amount}`);
        }
        if (amount >= 100000000) {
            throw new Error(`Error, amount should be less then 100000000, got ${amount}`);
        }
        const randomArrayOfMails = [];
        let i = 0;
        while (i <= amount - 1) {
            randomArrayOfMails.push(names_1.default[Math.floor(Math.random() * names_1.default.length)] +
                Math.floor(Math.random() * 9) +
                Math.floor(Math.random() * 9) +
                Math.floor(Math.random() * 9) +
                `@` +
                mails_1.default[Math.floor(Math.random() * mails_1.default.length)]);
            i++;
        }
        this.result = Object.assign(Object.assign({}, this.result), { mails: randomArrayOfMails });
        return this;
    }
    // Ger random words method
    getRandomWords(amount = 1) {
        if (amount < 1) {
            throw new Error(`Error, amount should be more or equal to 1, got ${amount}`);
        }
        if (amount >= 100000000) {
            throw new Error(`Error, amount should be less then 100000000, got ${amount}`);
        }
        const randomArrayOfWords = [];
        let i = 0;
        while (i <= amount - 1) {
            randomArrayOfWords.push(randomWords_1.default[Math.floor(Math.random() * randomWords_1.default.length)]);
            i++;
        }
        this.result = Object.assign(Object.assign({}, this.result), { randomWords: randomArrayOfWords });
        return this;
    }
    // Get test text method
    getTestText(amountOfLetters = 50) {
        if (amountOfLetters < 1) {
            throw new Error(`Error, amountOfLetters should be more or equal to 1, got ${amountOfLetters}`);
        }
        if (amountOfLetters >= 100000000) {
            throw new Error(`Error, amount of letters should be less then 100000000, got ${amountOfLetters}`);
        }
        let testText = description_1.default;
        let i = 0;
        while (testText.length < amountOfLetters) {
            testText += description_1.default;
        }
        testText = testText.substring(0, amountOfLetters);
        this.result = Object.assign(Object.assign({}, this.result), { text: testText });
        return this;
    }
}
module.exports = new RandomSeed();
