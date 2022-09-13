input.onButtonPressed(Button.A, function () {
    if (random_number == 0) {
        basic.showString("DARE")
    }
    if (random_number == 1) {
        basic.showString("TRUTH")
    }
    random_number = randint(0, 1)
})
input.onButtonPressed(Button.B, function () {
    if (random_number2 == 1) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    }
    if (random_number2 == 2) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    }
    if (random_number2 == 3) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    }
    if (random_number2 == 4) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    }
    random_number2 = randint(0, 4)
})
let random_number2 = 0
let random_number = 0
basic.showString("TRUTH  OR  DARE")
random_number = randint(0, 1)
random_number2 = randint(0, 4)
