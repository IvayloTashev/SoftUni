import { Cipher } from "./contracts/cipher";
import { PartialMessageEncoder } from "./contracts/implemented/partialMessageEncoder";
import { Language } from "./contracts/language";
import { ProcessedType } from "./types";

export class LanguageMessageEncoder<Tlang extends Language, Tcipher extends Cipher<Tlang>> extends PartialMessageEncoder {
    private totalEncodedChars = 0;
    private totalDecodedChars = 0;

    constructor(lang: Tlang, cipher: Tcipher) {
        super(lang, cipher);
    }

    protected stripForbiddenSymbols(message: string): string {
        let forbiddenSymbols = PartialMessageEncoder.forbiddenSymbols;
        forbiddenSymbols.forEach(x => message = message.replaceAll(x, ''));
        return message;
    }


    public encodeMessage(secretMessage: unknown) {
        if (typeof secretMessage !== 'string' || secretMessage.length === 0) {
            return "No message."
        }

        const stripMessage = this.stripForbiddenSymbols(secretMessage);
        const isCompatible = this.language.isCompatibleToCharset(stripMessage);

        if (!isCompatible) {
            return "Message not compatible"
        }

        const encodedMsg = this.cipher.encipher(stripMessage);
        this.totalEncodedChars += encodedMsg.length

        return encodedMsg
    }

    public decodeMessage(secretMessage: unknown): string {
        if (typeof secretMessage !== 'string' || secretMessage.length === 0) {
            return "No message."
        }

        const isCompatible = this.language.isCompatibleToCharset(secretMessage);

        if (!isCompatible) {
            return "Message not compatible"
        }

        const decodedMsg = this.cipher.decipher(secretMessage);
        this.totalDecodedChars += decodedMsg.length

        return decodedMsg
    }

    public totalProcessedCharacters(type: ProcessedType): string {
        let processedCharsCount = 0;

        switch (type) {
            case 'Encoded': processedCharsCount = this.totalEncodedChars; break;
            case 'Decoded': processedCharsCount = this.totalDecodedChars; break;
            case 'Both': processedCharsCount = this.totalDecodedChars + this.totalEncodedChars; break;
        }

        return `Total processed characters count: ${processedCharsCount}`
    }

}


