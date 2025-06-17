import { Language } from "./contracts/language";
import { DNAcharsetType } from "./types";

export class DNACodeLanguage implements Language {
    private _charset: Set<DNAcharsetType> = new Set(["A", "C", "G", "T"]);

    get charset() {
        return this._charset;
    }

    isCompatibleToCharset(message: string): boolean {
        // for (let char of message) {
        //     if (!this._charset.has(char as DNAcharsetType)) {
        //         isCompatible = false
        //     }
        // }

        const messageChars = message.split('');
        const allowedChars: string[] = Array.from(this.charset.values());
        const isCompatible = messageChars.every(char => allowedChars.includes(char))

        return isCompatible
    }
}