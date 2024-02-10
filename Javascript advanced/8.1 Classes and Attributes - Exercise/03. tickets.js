function tickets(arr, sortType) {

    let result = [];

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status
        }
    }

    for (let info of arr) {
        let [destination, price, status] = info.split(`|`);
        price = Number(price);

        let obj = new Ticket(destination, price, status);
        result.push(obj);
    }

   sorting(result, sortType);

    function sorting(arr, sortType) {

        if (sortType == "price") {
            return arr.sort((a, b) => {
                return a[sortType] - b[sortType];
            });
        
        } else {
            return arr.sort((a, b) => {
                return a[sortType].localeCompare(b[sortType]);
            });
        }
    }

    return result;

}

tickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'price'
)