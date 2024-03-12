"use strict";
(() => {
    const fullName = (firstName, lastName, upper) => {
        if (upper) {
            return `${firstName} ${lastName}`.toUpperCase();
        }
        else {
            return `${firstName} ${lastName}`.toLowerCase();
        }
        // return `${firstName} ${lastName || ""}`;
    };
    const name = fullName("Tony", "Stark", true);
    console.log({ name });
})();
