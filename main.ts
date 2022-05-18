input.onLogoEvent(TouchButtonEvent.Touched, function () {
    music.stopAllSounds()
    basic.showIcon(IconNames.Happy)
})
input.onGesture(Gesture.ThreeG, function () {
	
})
music.stopAllSounds()
basic.showIcon(IconNames.Happy)
basic.pause(2000)
basic.forever(function () {
    if (input.acceleration(Dimension.Strength) > 1200) {
        basic.showIcon(IconNames.Sad)
        for (let index = 0; index < 3; index++) {
            music.playTone(988, music.beat(BeatFraction.Whole))
            music.playTone(523, music.beat(BeatFraction.Whole))
        }
        basic.showIcon(IconNames.Happy)
    }
})
