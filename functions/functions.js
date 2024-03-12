"use strict";
(() => {
    const hero = "Flash";
    function returnName() {
        return hero;
    }
    const activateBatiSignal = () => {
        return "BatiSignal On!";
    };
    console.log(typeof activateBatiSignal);
    const heroName = returnName();
})();
