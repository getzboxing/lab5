let miles
let gallons
let mpg
let again = 'y'

do {
  miles = parseFloat(prompt('Enter miles driven'))
  gallons = parseFloat(prompt("How many gallons does your car's tank hold"))
  if (!isNaN(miles) && miles > 0 && !isNaN(gallons) && gallons > 0) {
    mpg = miles / gallons
    console.log(`Your car gets ${mpg.toFixed(2)} miles per gallon.`)
  } else {
    alert('One or both entries are invalid.')
  }
  again = prompt('Run application again? (y or n)', 'y')
} while (again === 'y' || again !== 'n')

// if (again === 'y') "again (true)" the logic statement will short circuit beig it needs only one 'true'
// if (again === 'n') "again (false)" on the left side of the logic statement will render on the right side true only if it is equal to 'anything but 'n', anything else will render the make both sides 'false' and the 'do' loop continues

console.log('Application has exited.')
