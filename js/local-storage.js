console.log("hello");
localStorage.setItem('num1', 9);


const addToLocalStorage = () => {
    const idInput = document.getElementById('storage-id');
    const id = idInput.value;
    const valueInput = document.getElementById('storage-value');
    const value = valueInput.value;

    //
    if (id && value) {
        localStorage.setItem(id, value);
    }
    idInput.value = '';
    valueInput.value = '';
}

// localStorage.setItem("friends2", JSON.stringify([22,33,44,55]))

/* localStorage.setItem("pen", pen)
localStorage.setItem("pen", JSON.stringify(pen))
const pen2get = localStorage.getItem("pen2")
JSON.parse(pen2get) */