function carFactory(input) {

    let result = {
        model: input.model,
        engine: null,
        carriage: null,
        wheels: []
    }

    if (input.power <= 90) {
        result.engine = {
            power: 90, volume: 1800
        }
    } else if (input.power <= 120) {
        result.engine = {
            power: 120, volume: 2400
        }
    } else {
        result.engine = {
            power: 200, volume: 3500
        }
    }

    result.carriage = {
        type: input.carriage,
        color: input.color
    }

    let correctSize = input.wheelsize;

    if (input.wheelsize % 2 == 0) {
        correctSize = input.wheelsize -= 1;
    }

    result.wheels = [correctSize, correctSize, correctSize, correctSize]

    return result;

}

carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
})