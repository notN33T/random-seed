type resultObject = {
    names?: string[];
    surnames?: string[];
    middleNames?: string[];
    pets?: string[];
    countries?: string[];
    cities?: string[];
    phoneNumbers?: string[];
    ages?: number[];
    mails?: string[];
    randomWords?: string[];
    text?: string;
};
declare class RandomSeed {
    private _result;
    /**
    * @deprecated since version 3.0. Will be removed in the future.
   */
    get result(): resultObject;
    getNames(amount?: number): this;
    getSurnames(amount?: number): this;
    getMiddleNames(amount?: number): this;
    getPetsNames(amount?: number): this;
    getCountriesNames(amount?: number): this;
    getCitiesNames(amount?: number): this;
    getPhoneNumbers(amount?: number): this;
    getAges(amount?: number, min?: number, max?: number): this;
    getMails(amount?: number): this;
    getRandomWords(amount?: number): this;
    getTestText(amountOfLetters?: number): this;
    getResult(): resultObject;
    only: () => {
        getNames: (amount: number) => string[] | undefined;
        getSurnames: (amount: number) => string[] | undefined;
        getMiddleNames: (amount: number) => string[] | undefined;
        getPetsNames: (amount: number) => string[] | undefined;
        getCountriesNames: (amount: number) => string[] | undefined;
        getCitiesNames: (amount: number) => string[] | undefined;
        getPhoneNumbers: (amount: number) => string[] | undefined;
        getAges: (amount?: number, min?: number, max?: number) => number[] | undefined;
        getMails: (amount: number) => string[] | undefined;
        getRandomWords: (amount: number) => string[] | undefined;
        getTestText: (amountOfLetters: number) => string | undefined;
    };
}
declare const rseed: RandomSeed;
export { rseed };
