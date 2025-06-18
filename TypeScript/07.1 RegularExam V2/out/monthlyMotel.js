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
        return 'test';
    }
    cancelBooking(roomNumber, bookedMonth) {
        return 'test';
    }
    getTotalBudget() {
        return 'test';
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