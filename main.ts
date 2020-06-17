input.onButtonPressed(Button.A, function () {
    life.setPixelBrightness(randint(0, 4), randint(0, 4), 200)
life.showImage(0)
})
input.onButtonPressed(Button.B, function () {
    life.setPixelBrightness(randint(0, 4), randint(0, 4), 200)
life.showImage(0)
})
input.onGesture(Gesture.Shake, function () {
    life.setPixelBrightness(randint(0, 4), randint(0, 4), 200)
life.showImage(0)
})
let k = 0
let l = 0
let n = 0
let life: Image = null
life = images.createImage(`
    . . . . .
    . . # . .
    . . # . .
    . . # . .
    . . . . .
    `)
led.setBrightness(200)
basic.forever(function () {
    life.showImage(0)
    for (let y = 0; y <= 4; y++) {
        for (let x = 0; x <= 4; x++) {
            n = 0
            for (let j = 0; j <= 2; j++) {
                l = y + (j - 1)
                for (let i = 0; i <= 2; i++) {
                    k = x + (i - 1)
                    if (k >= 0 && k <= 4) {
                        if (l >= 0 && l <= 4) {
                            if (led.pointBrightness(k, l) > 0) {
                                n += 1
                            }
                        }
                    }
                }
            }
            if (led.pointBrightness(x, y) >= 10) {
                if (n < 3 || n > 4) {
                    life.setPixel(x, y, false)
                } else {
                    life.setPixelBrightness(x, y, led.pointBrightness(x, y)-20)
                }
            } else {
                if (n == 3) {
                    life.setPixelBrightness(x, y, 200)
                }
            }
        }
    }
    basic.pause(1000)
})
