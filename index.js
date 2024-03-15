const Input = document.querySelector("#inp");
const Button = document.querySelector("#btn");
const UlList = document.querySelector(".list");

Button.addEventListener("click", () => {
  let inputvalue = Input.value.trim();
  const li = document.createElement("li");
  const input = document.createElement("input");
  input.type = "checkbox";
  const span = document.createElement("span");
  const removeButton = document.createElement("button");
  removeButton.textContent = "delete";
  if (inputvalue !== "") {
    span.textContent = inputvalue;
    li.appendChild(input);
    UlList.appendChild(li);
    li.appendChild(span);
    li.appendChild(removeButton);
    input.onchange = () => {
      span.classList.toggle("span_style");
    };
    removeButton.addEventListener("click", () => {
      li.remove();
    });
    li.classList.add("list_item");
    Input.value = "";
    console.log(UlList);
  }
});
