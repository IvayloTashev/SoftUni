"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonthlyMotel = void 0;
const partialMonthlyMotel_1 = require("./contracts/partialMonthlyMotel");
class MonthlyMotel extends partialMonthlyMotel_1.PartialMonthlyMotel {
    rooms;
    bookedRooms;
    budget = 0;
    constructor() {
        super();
        this.rooms = new Map();
        this.bookedRooms = new Map();
    }
    isRoom(possibleRoom) {
        return possibleRoom != null && typeof possibleRoom === 'object' && 'roomNumber' in possibleRoom &&
            typeof possibleRoom.roomNumber === 'string' && ['A01', 'A02', 'A03', 'B01', 'B02', 'B03'].includes(possibleRoom.roomNumber) &&
            'totalPrice' in possibleRoom && typeof possibleRoom.totalPrice === 'number' &&
            'cancellationPrice' in possibleRoom && typeof possibleRoom.cancellationPrice === 'number';
    }
    addRoom(room) {
        if (this.isRoom(room)) {
            if (this.rooms.has(room.roomNumber)) {
                return `Room '${room.roomNumber}' already exists.`;
            }
            this.rooms.set(room.roomNumber, room);
            this.bookedRooms.set(room.roomNumber, []);
            return `Room '${room.roomNumber}' added.`;
        }
        return `Value was not a Room.`;
    }
    bookRoom(roomNumber, bookedMonth) {
        let room = this.rooms.get(roomNumber);
        if (!room) {
            return `Room '${roomNumber}' does not exist.`;
        }
        let roomBookings = this.bookedRooms.get(roomNumber);
        if (roomBookings.some(room => room === bookedMonth)) {
            return `Room '${roomNumber}' is already booked for '${bookedMonth}'.`;
        }
        let price = room.totalPrice;
        this.budget += price;
        roomBookings.push(bookedMonth);
        return `Room '${roomNumber}' booked for '${bookedMonth}'.`;
    }
    cancelBooking(roomNumber, bookedMonth) {
        let room = this.rooms.get(roomNumber);
        if (!room) {
            return `Room '${roomNumber}' does not exist.`;
        }
        let roomBookings = this.bookedRooms.get(roomNumber);
        if (!(roomBookings.some(room => room === bookedMonth))) {
            return `Room '${roomNumber}' is not booked for '${bookedMonth}'.`;
        }
        let cancellationPrice = room.cancellationPrice;
        this.budget -= cancellationPrice;
        let filteredRoomBookings = roomBookings.filter(month => month !== bookedMonth);
        this.bookedRooms.set(roomNumber, filteredRoomBookings);
        return `Booking cancelled for Room '${roomNumber}' for '${bookedMonth}'.`;
    }
    getTotalBudget() {
        let motelNameString = super.getTotalBudget();
        return `${motelNameString}\nTotal budget: $${this.budget.toFixed(2)}`;
    }
    logRooms() {
        console.log('All rooms in the motel:');
        for (const [roomNumber, room] of this.rooms.entries()) {
            console.log(`Room ${roomNumber}:`, room);
        }
    }
}
exports.MonthlyMotel = MonthlyMotel;
//# sourceMappingURL=monthlyMotel.js.map