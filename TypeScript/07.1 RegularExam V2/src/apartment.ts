import { Room } from "./contracts/room";
import { RoomNumbers } from "./types";

export class Apartment implements Room {
    public readonly roomNumber: RoomNumbers
    protected _price: number
    protected _numberOfGuests: number

    constructor(price: number, roomNumber: RoomNumbers, numberOfGuests: number) {
        this._price = price;
        this.roomNumber = roomNumber;
        this._numberOfGuests = numberOfGuests;
    }

    public get totalPrice(): number {
        return this._numberOfGuests * this._price;
    }

    public get cancellationPrice() {
        return (this._numberOfGuests * this._price) * 0.8;
    }

}