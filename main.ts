input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # # . . .
            # # . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # # .
            . . # # .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . # #
            . . . # #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . # #
            . . . # #
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . # #
            . . . # #
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . # #
            . . . # #
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . # #
            . . . # #
            . . . . .
            . . . . .
            `)
        music.playMelody("G F G F G F G F ", 300)
        basic.showLeds(`
            . . . . .
            . . . # #
            . . . # #
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . # #
            . . . # #
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . # # .
            . . # # .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . # # . .
            . # # . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # # . . .
            # # . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    for (let index = 0; index < 4; index++) {
        music.startMelody(music.builtInMelody(Melodies.PowerDown), MelodyOptions.Once)
        basic.pause(500)
        music.playMelody("F G F G F G F G ", 300)
        basic.pause(500)
        music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
    }
})
input.onButtonPressed(Button.AB, function () {
    for (let x = 0; x <= 4; x++) {
        for (let y = 0; y <= 4; y++) {
            led.plot(x, y)
            basic.pause(500)
        }
    }
    for (let x = 0; x <= 4; x++) {
        for (let y = 0; y <= 4; y++) {
            led.unplot(x, y)
            basic.pause(500)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index <= 3; index++) {
        basic.clearScreen()
        led.plot(index, 0)
        led.plot(index + 1, 1)
        led.plot(index, 1)
        led.plot(index + 1, 0)
        basic.pause(200)
    }
})
