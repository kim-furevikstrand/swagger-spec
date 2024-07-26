const button = document.createElement("button");
button.innerText = "Copy Spec";
button.classList.add("btn");
document.querySelector(".auth-wrapper").prepend(button);

button.addEventListener("click", function () {
  const { spec } = ui?.getConfigs();

  if (spec) {
    console.log(spec);
    navigator.clipboard.writeText(JSON.stringify(spec));
  }
});
