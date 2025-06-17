"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DNACodeLanguage = void 0;
class DNACodeLanguage {
    _charset = new Set(["A", "C", "G", "T"]);
    get charset() {
        return this._charset;
    }
    isCompatibleToCharset(message) {
        // for (let char of message) {
        //     if (!this._charset.has(char as DNAcharsetType)) {
        //         isCompatible = false
        //     }
        // }
        const messageChars = message.split('');
        const allowedChars = Array.from(this.charset.values());
        const isCompatible = messageChars.every(char => allowedChars.includes(char));
        return isCompatible;
    }
}
exports.DNACodeLanguage = DNACodeLanguage;
//# sourceMappingURL=DNACodeLanguage.js.map