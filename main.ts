let Score = 0
input.onGesture(Gesture.Shake, function () {
    Score = randint(80, 100)
    basic.showNumber(Score)
    if (Score >= 80 && Score < 85) {
        basic.showString("A-")
    } else if (Score >= 85 && Score < 90) {
        basic.showString("A")
    } else if (Score >= 90 && Score < 101) {
        basic.showString("A+")
    }
})
basic.forever(function () {
	
})
