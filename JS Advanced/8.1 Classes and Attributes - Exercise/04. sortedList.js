class List {
    constructor() {
        this.list = [];
        this.size = 0;
    }

    add(num) {
        this.size++;
        this.list.push(num);
        this.list.sort((a, b) => a- b);
    }

    remove(index) {
        if (index < 0 || index >= this.list.length) {
            throw new Error("Invalid index")
        } else {
            this.size--;
            this.list.splice(index, 1);
        }
    }

    get(index) {
        if (index < 0 || index >= this.list.length) {
            throw new Error("Invalid index")
        } else {
            return this.list[index];
        }
    }

}


let list = new List();
list.add(5);
list.add(6);
list.add(4);
console.log(list);



