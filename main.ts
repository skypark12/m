input.onButtonPressed(Button.A, function () {
    state2 = 3
    basic.showString("driving")
    state2 = 1
})
input.onButtonPressed(Button.AB, function () {
    state2 = 0
})
input.onButtonPressed(Button.B, function () {
    state2 = 3
    basic.showString("line tracking")
    state2 = 2
})
let s = 0
let state2 = 0
state2 = 0
basic.forever(function () {
    if (state2 == 1) {
        basic.showLeds(`
            . . . . .
            . . # # .
            # # # # .
            # # # # .
            . # . # .
            `)
        s = randint(0, 1)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 200)
        if (s == 0) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 200)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 200)
        } else if (s == 1) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 200)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 200)
        }
    } else {
    	
    }
})
