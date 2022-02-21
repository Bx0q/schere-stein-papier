let hand = 0
input.onGesture(Gesture.Shake, function () {
    hand = randint(0, 10)
    if (true) {
        basic.showLeds(`
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            `)
    }
})
