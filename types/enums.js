"use strict";
(() => {
    let audioLevel;
    (function (audioLevel) {
        audioLevel[audioLevel["min"] = 1] = "min";
        audioLevel[audioLevel["medium"] = 5] = "medium";
        audioLevel[audioLevel["max"] = 10] = "max";
    })(audioLevel || (audioLevel = {}));
    let currenAudio = audioLevel.medium;
    console.log(currenAudio);
    console.log(audioLevel);
})();
