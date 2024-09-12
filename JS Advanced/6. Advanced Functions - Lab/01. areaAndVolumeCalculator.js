function areaAndVolumeCalculator(areaFn, volFn, data) {

    let input = JSON.parse(data);

    let result = input.map(fig => ({
        area: areaFn.call(fig),
        volume: volFn.call(fig)
    }));

    return result;

}

const data = `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
]`

function area() {
    return Math.abs(this.x * this.y);
};

function vol() {
    return Math.abs(this.x * this.y * this.z);
};

areaAndVolumeCalculator(area, vol, data);