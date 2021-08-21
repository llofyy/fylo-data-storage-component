const counter = document.querySelector('.progress-counter');
const storage = document.querySelector('.message span');
const storage_left = document.querySelector('.number');



let storage_number = 0;
let storage_rest = 0;
const add_storage = setInterval(() => {
    storage_number+=11
    storage_rest = 1000 - storage_number;
    storage.textContent = `${storage_number} GB`;
    storage_left.textContent = storage_rest;
    counter.style.width = `${Math.floor(storage_number / 10)}%`;
}, 1);


setTimeout(() => {
    clearInterval(add_storage);
}, 300)
