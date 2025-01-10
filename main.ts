/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Maria Varghese
 * Created on: Jan 2025
 * This program uses servo and robotbit
*/

//variable
const S1 = robotbit.Servos.S1

//setup
basic.showIcon(IconNames.Happy)

//when button A is pressed 
input.onButtonPressed(Button.A, function() {
    robotbit.Servo(S1,162)
    basic.showIcon(IconNames.Happy)
    basic.clearScreen()
})

//when button B is pressed 
input.onButtonPressed(Button.B, function () {
    robotbit.Servo(S1, 50)
    basic.showIcon(IconNames.Happy)
    basic.clearScreen()
})

//cleanup
basic.clearScreen()
