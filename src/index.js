// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let obj = {};
    if (currency > 10000) {
        obj.error = "You are rich, my friend! We don't have so much coins for exchange";
    }
    else {
        while (currency > 0) {
            for (let i = 1; currency >= 50; i++) {
                currency -= 50;
                obj.H = i;
            }
            for (let i = 1; currency >= 25; i++) {
                obj.Q = i;
                currency -= 25;
            }
            for (let i = 1; currency >= 10; i++) {
                obj.D = i;
                currency -= 10;
            }
            for (let i = 1; currency >= 5; i++) {
                obj.N = i;
                currency -= 5;
            }
            for (let i = 1; currency >= 1; i++) {
                obj.P = i;
                currency -= 1;
            }
        }

    }

    return obj;
}
