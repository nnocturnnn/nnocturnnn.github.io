const form = document.getElementById("form");
const name = document.getElementById("name");


form.addEventListener("submit", (e) => {
    let mess = [];
    if (name.value === "" || name.value == null || name.value[0] !=  name.value[0].toUpperCase() ) {
        name.style += ";border: 1px solid;border-color: red; ";
        e.preventDefault();
    }
});