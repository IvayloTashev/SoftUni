"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanguageMessageEncoder = void 0;
const partialMessageEncoder_1 = require("./contracts/implemented/partialMessageEncoder");
class LanguageMessageEncoder extends partialMessageEncoder_1.PartialMessageEncoder {
    totalEncodedChars = 0;
    totalDecodedChars = 0;
    constructor(lang, cipher) {
        super(lang, cipher);
    }
    stripForbiddenSymbols(message) {
        let forbiddenSymbols = partialMessageEncoder_1.PartialMessageEncoder.forbiddenSymbols;
        forbiddenSymbols.forEach(x => message = message.replaceAll(x, ''));
        return message;
    }
    encodeMessage(secretMessage) {
        if (typeof secretMessage !== 'string' || secretMessage.length === 0) {
            return "No message.";
        }
        const stripMessage = this.stripForbiddenSymbols(secretMessage);
        const isCompatible = this.language.isCompatibleToCharset(stripMessage);
        if (!isCompatible) {
            return "Message not compatible";
        }
        const encodedMsg = this.cipher.encipher(stripMessage);
        this.totalEncodedChars += encodedMsg.length;
        return encodedMsg;
    }
    decodeMessage(secretMessage) {
        if (typeof secretMessage !== 'string' || secretMessage.length === 0) {
            return "No message.";
        }
        const isCompatible = this.language.isCompatibleToCharset(secretMessage);
        if (!isCompatible) {
            return "Message not compatible";
        }
        const decodedMsg = this.cipher.decipher(secretMessage);
        this.totalDecodedChars += decodedMsg.length;
        return decodedMsg;
    }
    totalProcessedCharacters(type) {
        let processedCharsCount = 0;
        switch (type) {
            case 'Encoded':
                processedCharsCount = this.totalEncodedChars;
                break;
            case 'Decoded':
                processedCharsCount = this.totalDecodedChars;
                break;
            case 'Both':
                processedCharsCount = this.totalDecodedChars + this.totalEncodedChars;
                break;
        }
        return `Total processed characters count: ${processedCharsCount}`;
    }
}
exports.LanguageMessageEncoder = LanguageMessageEncoder;
//# sourceMappingURL=languageMessageEncoder.js.map