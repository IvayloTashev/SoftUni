function cats(arr) {

    class Cat {
        name;
        age;

        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }

    }

    let catData = [];

    for (let i = 0; i < arr.length; i++) {
        let tokens = arr[i].split(` `);
        let name = tokens[0];
        let age = Number(tokens[1]);

        let cat = new Cat(name, age);

        catData.push(cat);

    }

    for (let cat of catData) {
        cat.meow();

    }
    
}

cats(['Candy 1', 'Poppy 3', 'Nyx 2'])