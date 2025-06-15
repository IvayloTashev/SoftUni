import { Room } from "./contracts/room";
import { ValidRoomNumber } from "./types";

export class Apartment implements Room {
    price: number
    roomNumber: ValidRoomNumber
    numberOfGuests: number

    constructor(price: number, roomNumber: ValidRoomNumber, numberOfGuests: number) {
        this.price = price;
        this.roomNumber = roomNumber;
        this.numberOfGuests = numberOfGuests;
    }

    get totalPrice(): number {
        return this.numberOfGuests * this.price;
    }
    get cancellationPrice(): number {
        return (this.numberOfGuests * this.price) * 0.8;
    }
}