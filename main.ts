input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.lightLevel())
    if (input.lightLevel() < 15) {
        basic.showString("Perfekt")
    }
})
