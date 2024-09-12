class FlightBookingSystem {
    constructor(agencyName) {
        this.agencyName = agencyName;
        this.flights = [];
        this.bookings = [];
        this.bookingsCount = 0;
    }

    addFlight(flightNumber, destination, departureTime, price) {
        let data = this.flights.find(a => a.flightNumber == flightNumber);

        if (data) {
            return `Flight ${flightNumber} to ${destination} is already available.`
        }

        let obj = {
            flightNumber,
            destination,
            departureTime,
            price
        }

        this.flights.push(obj);

        return `Flight ${flightNumber} to ${destination} has been added to the system.`
    }

    bookFlight(passengerName, flightNumber) {
        let data = this.flights.find(a => a.flightNumber == flightNumber);

        if (!data) {
            return `Flight ${flightNumber} is not available for booking.`
        }

        let obj = {
            passengerName,
            flightNumber
        }

        this.bookings.push(obj);

        this.bookingsCount += 1;

        return `Booking for passenger ${passengerName} on flight ${flightNumber} is confirmed.`
    }

    cancelBooking(passengerName, flightNumber) {
        let data = this.bookings.find(x => x.passengerName == passengerName);

        if (data) {
            if (data.flightNumber == flightNumber) {
                this.bookings = this.bookings.filter(x => x.passengerName != passengerName);
                this.bookingsCount -= 1;
                return `Booking for passenger ${passengerName} on flight ${flightNumber} is cancelled.`;
            }
        } else {
            throw new Error(`Booking for passenger ${passengerName} on flight ${flightNumber} not found.`)
        }

    }

    showBookings(criteria) {
        if (this.bookings.length == 0) {
            throw new Error(`No bookings have been made yet.`);
        }

        if (criteria == "all") {
            let res = `All bookings(${this.bookingsCount}):\n`

            for (let booking of this.bookings) {
                res += `${booking.passengerName} booked for flight ${booking.flightNumber}.\n`
            }
            return res.trim()

        } else if (criteria == "cheap") {
            let cheapFlights = this.flights.filter(x => x.price <= 100);
            let numbersRef = [];
            for (let i = 0; i < cheapFlights.length; i++) {
                numbersRef.push(cheapFlights[i].flightNumber);
            }

            let buff = [];
            for (let num of numbersRef) {
                let data = this.bookings.find(x => x.flightNumber == num);
                buff.push({
                    name: data.passengerName,
                    number: num
                })
            }

            if (cheapFlights.length == 0) {
                return `No cheap bookings found.`

            } else {
                let res = `Cheap bookings:\n`

                for (let line of buff) {
                    res += `${line.name} booked for flight ${line.number}.\n`
                }

                return res.trim()
            }
        } else if (criteria == "expensive") {
            let expensiveFlights = this.flights.filter(x => x.price > 100);
            let numbersRef = [];
            for (let i = 0; i < expensiveFlights.length; i++) {
                numbersRef.push(expensiveFlights[i].flightNumber);
            }

            let buff = [];
            for (let num of numbersRef) {
                let data = this.bookings.find(x => x.flightNumber == num);
                buff.push({
                    name: data.passengerName,
                    number: num
                })
            }

            if (expensiveFlights.length == 0) {
                return "No expensive bookings found.";

            } else {
                let res = `Expensive bookings:\n`

                for (let line of buff) {
                    res += `${line.name} booked for flight ${line.number}.\n`
                }

                return res.trim()
            }
        }
    }
}


const system = new FlightBookingSystem("TravelWorld");
console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
console.log(system.bookFlight("Alice", "AA101"));
console.log(system.bookFlight("Bob", "BB202"));
console.log(system.showBookings("expensive"));
console.log(system.showBookings("cheap"));



/*
  Flight AA101 to Los Angeles has been added to the system.
  Flight BB202 to New York has been added to the system.
  Booking for passenger Alice on flight AA101 is confirmed.
  Booking for passenger Bob on flight BB202 is confirmed.
  Expensive bookings:
  Alice booked for flight AA101.
  Bob booked for flight BB202.
  No cheap bookings found.
 */