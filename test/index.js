const { rseed } = require("../dist");

const test = require('node:test');
const assert = require('node:assert/strict');

test('`only` exists tests', () => { assert.strictEqual(!!rseed.only, true); });

test('`only` tests', () => {
  assert.strictEqual(!!rseed.only().getNames, true);
  assert.strictEqual(rseed.only().getNames(3).length, 3);
  assert.strictEqual(rseed.only().getSurnames(3).length, 3);
  assert.strictEqual(rseed.only().getMiddleNames(3).length, 3);
  assert.strictEqual(rseed.only().getPetsNames(3).length, 3);
  assert.strictEqual(rseed.only().getCountriesNames(3).length, 3);
  assert.strictEqual(rseed.only().getCitiesNames(3).length, 3);
  assert.strictEqual(rseed.only().getPhoneNumbers(3).length, 3);
  assert.strictEqual(rseed.only().getAges(3).length, 3);
  assert.strictEqual(rseed.only().getMails(3).length, 3);
  assert.strictEqual(rseed.only().getRandomWords(3).length, 3);
  assert.strictEqual(rseed.only().getTestText(3).length, 3);
});

test('`not only` tests', () => {
  assert.strictEqual(!!rseed.getAges().getNames().result, true);
  assert.strictEqual(!!rseed.getAges().getNames()._result, true);
  assert.strictEqual(rseed.getNames(3).getResult().names.length, 3);
  assert.strictEqual(rseed.getSurnames(3).getResult().surnames.length, 3);
  assert.strictEqual(rseed.getMiddleNames(3).getResult().middleNames.length, 3);
  assert.strictEqual(rseed.getPetsNames(3).getResult().pets.length, 3);
  assert.strictEqual(rseed.getCountriesNames(3).getResult().countries.length, 3);
  assert.strictEqual(rseed.getCitiesNames(3).getResult().cities.length, 3);
  assert.strictEqual(rseed.getPhoneNumbers(3).getResult().phoneNumbers.length, 3);
  assert.strictEqual(rseed.getAges(3).getResult().ages.length, 3);
  assert.strictEqual(rseed.getMails(3).getResult().mails.length, 3);
  assert.strictEqual(rseed.getRandomWords(3).getResult().randomWords.length, 3);
  assert.strictEqual(rseed.getTestText(3).getResult().text.length, 3);
});

test ('multiple data tests', () => {
  const result = rseed
                  .getAges(1)
                  .getCitiesNames(2)
                  .getCountriesNames(3)
                  .getMails(4)
                  .getMiddleNames(5)
                  .getNames(6)
                  .getPetsNames(7)
                  .getPhoneNumbers(8)
                  .getRandomWords(9)
                  .getSurnames(10)
                  .getTestText(11)
                  .getResult();

  const resultArrayForTesting = [
    result.ages.length,
    result.cities.length,
    result.countries.length,
    result.mails.length,
    result.middleNames.length,
    result.names.length,
    result.pets.length,
    result.phoneNumbers.length,
    result.randomWords.length,
    result.surnames.length,
    result.text.length,
  ];

  assert.strictEqual(JSON.stringify(resultArrayForTesting), JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]));
});

/*

  getNames(amount) (names in result object)
  getSurnames(amount) (surnames in result object)
  getMiddleNames(amount) (middleNames in result object)
  getPetsNames(amount) (pets in result object)
  getCountriesNames(amount) (countries in result object)
  getCitiesNames(amount) (cities in result object)
  getPhoneNumbers(amount) (phoneNumbers in result object)
  getAges(amount, min, max) (ages in result object)
  getMails(amount) (mails in result object)
  getRandomWords(amount) (randomWords in result object)
  getTestText(amountOfLetters) (text in result object)

*/
