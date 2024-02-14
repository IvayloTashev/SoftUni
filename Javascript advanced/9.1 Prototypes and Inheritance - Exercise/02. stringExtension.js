(function () {
    String.prototype.ensureStart = function (inputStr) {
        if (!this.startsWith(inputStr)) {
            return inputStr + this.toString();
        }
        return this.toString()
    };

    String.prototype.ensureEnd = function (inputStr) {
        if (!this.endsWith(inputStr)) {
            return this.toString() + inputStr;
        }
        return this.toString()
    };

    String.prototype.isEmpty = function () {
        return (this.length == 0)
    };

    String.prototype.truncate = function (n) {
        if (n < 4) {
            return ".".repeat(n);
        }

        if (this.length <= n) {
            return this.toString()

        } else {
            if (this.includes(` `)) {
                let words = this.split(` `);
                let result = [];
                for (let word of words) {
                    if (result.join(` `).length + word.length + 3 <= n) {
                        result.push(word);
                    } else {
                        break;
                    }
                }
                return result.join(` `) + "...";

            } else {
                return this.slice(0, n - 3) + "...";
            }
        }
    }

    String.format = function (string, ...params) {
        let result = string;

        for (let i = 0; i < params.length; i++) {
            result = result.split(`{${i}}`).join(params[i]);
        }

        return result;
    }

})();


