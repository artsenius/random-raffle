function count() {
    let initialDate = document.getElementById('date-value').value;
    if (initialDate.length < 1) {
        alert('Please specify initial date')
    } else {
        let initialDateMs = new Date(initialDate);
        let addDays = document.getElementById('add-value').value;
        if (addDays.length < 1) {
            alert('Please specify number of days to add')
        } else {
            let futureDateMs = initialDateMs.getTime() + (parseInt(addDays) + 1) * 86400000;
            let futureDate = new Date(futureDateMs).toLocaleDateString()
            document.getElementById('new-value').innerHTML = futureDate;
        }
    }
}