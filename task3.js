const temperatur = {
    temperaturBase: 10,
    toFahrenhite: function () {
        return this.temperaturBase * 9 / 5 + 32;
    },
    toKelvin: function () {
        return this.temperaturBase + 273.15;
    },
    toReamur: function () {
        return this.temperaturBase * 4 / 5;
    }
};

console.log(temperatur.toFahrenhite()); 
console.log(temperatur.toKelvin());     
console.log(temperatur.toReamur());     


