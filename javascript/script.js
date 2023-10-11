const wrapperEl = document.getElementById("boxwrapper");
for (let i = 1; i < 101; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    const fizzbuzz = "Fizzbuzz";
    console.log(fizzbuzz);
  } else if (i % 3 === 0) {
    const fizz = "Fizz";
    console.log(fizz);
  } else if (i % 5 === 0) {
    const buzz = "Buzz";
    console.log(buzz);
  } else {
    console.log(i);
  }
}
