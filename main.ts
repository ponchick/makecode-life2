let k = 0
let l = 0
let n = 0
let life = images.createImage(`
    . . . . .
    . . # . .
    . . # . .
    . . # . .
    . . . . .
    `)
led.setBrightness(33)
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
            if (led.pointBrightness(x, y) > 0) {
                if (n < 3 || n > 4) {
                    life.setPixel(x, y, false)
                }
            } else {
                if (n == 3) {
                    life.setPixel(x, y, true)
                }
            }
        }
    }
    basic.pause(1000)
})
