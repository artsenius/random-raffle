function validation() {
    const noOfWinners = document.getElementById('no-of-winners').value;
    const participants = document.getElementById('participants').value;
    const partArray = participants.split(',');

    if (noOfWinners.trim().length === 0) {
        alert('Please specify the number of winners');
    } else if (parseInt(noOfWinners) === 0) {
        alert('Number of winners should be between 1 and 999');
    } else if (participants.trim().length === 0) {
        alert('Please specify the participants');
    } else if (parseInt(noOfWinners) >= partArray.length) {
        alert('Number of winners shoulbe be greater than number of participants');
    } else {
        raffle();
    }
}

function raffle() {
    const noOfWinners = document.getElementById('no-of-winners').value;
    const participants = document.getElementById('participants').value;
    const partArray = participants.split(',');
    const winners = [];

    for (let i = 0; i < 9999999; i++) {
        let winner = partArray[Math.floor(Math.random() * partArray.length)];
        if (winners.includes(winner)) {
            continue;
        } else if (winners.includes(winner) === false && winners.length < parseInt(noOfWinners)) {
            winners.push(winner);
        } else {
            break;
        }
    }

    console.log(winners);

    document.getElementById('raffle-holder').innerHTML =
        `<div class="card-holder">
            <div class="card-body">
                <div class="text-center card-title mb-2" id="winners-title">Winners:</div>
                <div>
                    ${winners.map(el => `<div>${el}</div>`).join('')}
                </div>
            </div>
        </div>
        
        <div class="text-center mt-3">
            <button onclick="reload()">New Raffle</button>
        </div
        `;
}

function reload() {
    location.reload();
}