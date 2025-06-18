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

    bookRoom(roomNumber: string, bookedMonth: string): string {

        return 'test'
    }

    cancelBooking(roomNumber: string, bookedMonth: string): string {

        return 'test'
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

