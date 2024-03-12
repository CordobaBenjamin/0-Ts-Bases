"use strict";
(() => {
    const fullName = (fistName, ...restArgs) => {
        return `${fistName} ${restArgs.join(" ")}`;
    };
    const superman = fullName("Clark", "Joseph", "Kent", "Cordoba");
    console.log(superman);
})();
