// comment

let counter = 0
basic.showNumber(0)

while (counter < 5) {
  basic.showNumber(counter)
  console.log(counter)
  counter++
}

while (true) {
  if (input.buttonIsPressed(Button.A) === true) {
    basic.showNumber(1)
  }
}
