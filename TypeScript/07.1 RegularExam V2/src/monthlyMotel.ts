import { PartialMonthlyMotel } from "./contracts/partialMonthlyMotel";
import { Room } from "./contracts/room";
import { Months, RoomNumbers } from "./types";

export class MonthlyMotel<T extends Months> extends PartialMonthlyMotel {
    private rooms: Map<RoomNumbers, Room>;
    private bookedRooms: Map<RoomNumbers, T[]>;
    private budget: number = 0;

    constructor() {
        super();
        this.rooms = new Map<RoomNumbers, Room>();
        this.bookedRooms = new Map<RoomNumbers, T[]>();
    }

    private isRoom(possibleRoom: unknown): possibleRoom is Room {
        return possibleRoom != null && typeof possibleRoom === 'object' && 'roomNumber' in possibleRoom &&
            typeof possibleRoom.roomNumber === 'string' && ['A01', 'A02', 'A03', 'B01', 'B02', 'B03'].includes(possibleRoom.roomNumber) &&
            'totalPrice' in possibleRoom && typeof possibleRoom.totalPrice === 'number' &&
            'cancellationPrice' in possibleRoom && typeof possibleRoom.cancellationPrice === 'number';
    }

    addRoom(room: unknown): string {
        if (this.isRoom(room)) {
            if (this.rooms.has(room.roomNumber)) {
                return `Room '${room.roomNumber}' already exists.`;
            }

            this.rooms.set(room.roomNumber, room);
            this.bookedRooms.set(room.roomNumber, []);
            return `Room '${room.roomNumber}' added.`;
        }

        return `Value was not a Room.`
    }

    bookRoom(roomNumber: RoomNumbers, bookedMonth: T): string {
        let room = this.rooms.get(roomNumber);

        if (!room) {
            return `Room '${roomNumber}' does not exist.`
        }

        let roomBookings = this.bookedRooms.get(roomNumber)!;

        if (roomBookings.some(room => room === bookedMonth)) {
            return `Room '${roomNumber}' is already booked for '${bookedMonth}'.`
        }

        let price = room.totalPrice;
        this.budget += price;
        roomBookings.push(bookedMonth);
        return `Room '${roomNumber}' booked for '${bookedMonth}'.`
    }

    cancelBooking(roomNumber: RoomNumbers, bookedMonth: T): string {
        let room = this.rooms.get(roomNumber);

        if (!room) {
            return `Room '${roomNumber}' does not exist.`
        }

        let roomBookings = this.bookedRooms.get(roomNumber)!;

        if (!(roomBookings.some(room => room === bookedMonth))) {
            return `Room '${roomNumber}' is not booked for '${bookedMonth}'.`
        }

        let cancellationPrice = room.cancellationPrice;
        this.budget -= cancellationPrice;
        let filteredRoomBookings = roomBookings.filter(month => month !== bookedMonth);
        this.bookedRooms.set(roomNumber, filteredRoomBookings);
        
        return `Booking cancelled for Room '${roomNumber}' for '${bookedMonth}'.`;
    }

    getTotalBudget(): string {
        return 'test'
    }

    logRooms(): void {
        console.log('All rooms in the motel:');
        for (const [roomNumber, room] of this.rooms.entries()) {
            console.log(`Room ${roomNumber}:`, room);
        }
    }
}

