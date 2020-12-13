window.onload = replacePlaceholder;

let today = new Date().toLocaleDateString();

function replacePlaceholder() {
    document.getElementById('today-value').innerHTML = today;
}

function count() {
    let addDays = document.getElementById('add-value').value;
    if (addDays.length < 1) {
        alert('Add number of days')
    } else {
        let futureDateMs = Date.now() + parseInt(addDays) * 86400000;
        let futureDate = new Date(futureDateMs).toLocaleDateString()
        document.getElementById('new-value').innerHTML = futureDate;
    }
}