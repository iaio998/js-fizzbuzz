const wrapperEl = document.getElementById("boxwrapper");

for (let i = 1; i < 101; i++) {
  let bgBox;
  const boxEl = document.createElement("div");
  wrapperEl.append(boxEl);
  boxEl.classList.add(
    "box",
    "border",
    "d-flex",
    "justify-content-center",
    "align-items-center",
    "bg-success",
    "fw-bolder"
  );

  if (i % 3 === 0 && i % 5 === 0) {
    const fizzBuzz = "FizzBuzz";
    console.log(fizzBuzz);
    boxEl.innerHTML = fizzBuzz;
    boxEl.classList.add("bg-info");
  } else if (i % 3 === 0) {
    const fizz = "Fizz";
    console.log(fizz);
    boxEl.innerHTML = fizz;
    boxEl.classList.add("bg-danger");
  } else if (i % 5 === 0) {
    const buzz = "Buzz";
    console.log(buzz);
    boxEl.innerHTML = buzz;
    boxEl.classList.add("bg-warning");
  } else {
    console.log(i);
    boxEl.innerHTML = i;
  }
}
