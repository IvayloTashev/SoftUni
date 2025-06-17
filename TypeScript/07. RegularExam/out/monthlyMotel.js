"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonthlyMotel = void 0;
const partialMonthlyMotel_1 = require("./contracts/partialMonthlyMotel");
class MonthlyMotel extends partialMonthlyMotel_1.PartialMonthlyMotel {
    addedRooms = [];
    bookedRooms = [];
    cancelledRooms = [];
    addRoom(room) {
        function isRoom(obj) {
            const validRoomNumbers = ['A01', 'A02', 'A03', 'B01', 'B02', 'B03'];
            return (typeof obj === 'object' &&
                obj !== null &&
                validRoomNumbers.includes(obj.roomNumber) &&
                typeof obj.totalPrice === 'number' &&
                typeof obj.cancellationPrice === 'number');
        }
        if (!isRoom(room)) {
            return 'Invalid room';
        }
        if (this.addedRooms.includes(room)) {
            return `Room '${room.roomNumber}' already exists.`;
        }
        this.addedRooms.push(room);
        return `Room '${room.roomNumber}' added.`;
    }
    bookRoom(roomNumber, bookedMonth) {
        const rooms = this.addedRooms.map(room => room.roomNumber);
        if (!rooms.includes(roomNumber)) {
            return `Room '${roomNumber}' does not exist.`;
        }
        if (rooms.includes(roomNumber)) {
            const isBooked = this.bookedRooms.some(b => b.room === roomNumber && b.month === bookedMonth);
            if (isBooked) {
                return `Room '${roomNumber}' is already booked for '${bookedMonth}'.`;
            }
        }
        const bookedRoom = { room: roomNumber, month: bookedMonth };
        this.bookedRooms.push(bookedRoom);
        return `Room '${roomNumber}' booked for '${bookedMonth}'.`;
    }
    cancelBooking(roomNumber, bookedMonth) {
        const isRoomExists = this.addedRooms.some(r => r.roomNumber === roomNumber);
        if (!isRoomExists) {
            return `Room '${roomNumber}' does not exist.`;
        }
        const bookingIndex = this.bookedRooms.findIndex(booking => booking.room === roomNumber && booking.month === bookedMonth);
        if (bookingIndex === -1) {
            return `Room '${roomNumber}' is not booked for '${bookedMonth}'.`;
        }
        this.cancelledRooms.push({ room: roomNumber, month: bookedMonth });
        return `Booking cancelled for Room '${roomNumber}' for '${bookedMonth}'.`;
    }
    getTotalBudget() {
        let totalBudget = 0;
        for (const booking of this.bookedRooms) {
            const room = this.addedRooms.find(r => r.roomNumber === booking.room);
            if (room) {
                totalBudget += room.totalPrice;
            }
        }
        for (const cancellation of this.cancelledRooms) {
            const room = this.addedRooms.find(r => r.roomNumber === cancellation.room);
            if (room)
                totalBudget -= room.cancellationPrice;
        }
        return `Motel: ${partialMonthlyMotel_1.PartialMonthlyMotel.MotelName} \nTotal budget: $${totalBudget.toFixed(2)}`;
    }
}
exports.MonthlyMotel = MonthlyMotel;
//# sourceMappingURL=monthlyMotel.js.map