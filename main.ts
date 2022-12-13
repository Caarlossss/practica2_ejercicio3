basic.forever(function () {
    if (input.temperature() > 7) {
        music.playTone(784, music.beat(BeatFraction.Half))
    }
    basic.showNumber(input.temperature())
})
