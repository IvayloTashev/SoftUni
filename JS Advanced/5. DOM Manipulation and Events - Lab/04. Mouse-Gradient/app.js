function attachGradientEvents() {
    let gradient = document.getElementById(`gradient`);
    let result = document.getElementById(`result`);

    gradient.addEventListener(`mousemove`, gradientMove);
    gradient.addEventListener(`mouseout`, gradientOut);

    function gradientMove(event) {
        let gradientBoxWidth = event.target.clientWidth;
        let positionOfTheMouse = event.offsetX / (gradientBoxWidth - 1);
        let persentage = Math.trunc(positionOfTheMouse * 100);
        result.textContent = `${persentage}%`;
    }

    function gradientOut (event) {
        result.textContent = ``;
    }

}