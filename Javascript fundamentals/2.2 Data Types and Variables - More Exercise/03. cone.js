function cone(radius, height) {

    let volume = 1 / 3 * Math.PI * (radius ** 2) * height;
    let slangHeight = Math.sqrt((radius ** 2) + (height ** 2));
    let area = Math.PI * radius * (radius + slangHeight);

    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${area.toFixed(4)}`);
}

cone(3, 5)
