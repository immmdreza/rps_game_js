// alert("Welcome to Rps game!")

let userCurrentSelection = "";
let userPoint = 0

function randomSelection() {
    let r = Math.floor(Math.random() * 3);
    switch (r) {
        case 0:
            return "✂️";
        case 1:
            return "🪨";
        case 2:
            return "🗞️";
        default:
            return "🖕";
    }
}

function idToEmoji(id) {
    switch (id) {
        case "scissor":
            return "✂️";
        case "rock":
            return "🪨";
        case "paper":
            return "🗞️";
        default:
            return "🖕";
    }
}

function checkWinner(userSelect, oppSelect) {
    if (userSelect == oppSelect) {
        // 0 means draw
        return 0;
    }
    else {
        if (userSelect == "✂️") {
            if (oppSelect == "🪨") {
                // 1 means user is defeated!
                return 1;
            }
            else {
                // 2 means user is victorious
                return 2
            }
        }
        else if (userSelect == "🪨") {
            if (oppSelect == "🗞️") {
                return 1;
            }
            else {
                return 2
            }
        }
        else {
            if (oppSelect == "✂️") {
                return 1;
            }
            else {
                return 2
            }  
        }
    }
}

function itemSelected() {
    userCurrentSelection = this.id.split('-')[1];
    // alert("Selected " + userCurrentSelect);

    // Show user selection
    let shower = document.getElementById("my-slct")
    let userSelect = idToEmoji(userCurrentSelection)
    shower.innerText = userSelect

    // update status
    let status = document.getElementById("status")
    status.innerText = "User selected " + userCurrentSelection + ", Waiting for opponent!"

    // show random selection
    let oppShower = document.getElementById("opp-slct")
    let oppSelect = randomSelection()
    oppShower.innerText = oppSelect

    // find out who is winner
    let winner = checkWinner(userSelect, oppSelect);
    let winnerText = ""
    if (winner == 2) {
        winnerText = "You are the victorious here! 🔥"
        userPoint++;
    }
    else if (winner == 1) {
        winnerText = "Oh you'r defeated :("
        userPoint--;
    }
    else {
        winnerText = "Draw! for now."
    }
    status.innerText = winnerText;

    let pointShower = document.getElementById("point");
    pointShower.innerText = "Your point: " + String(userPoint)
}

document.getElementById("slct-scissor").addEventListener("click", itemSelected);
document.getElementById("slct-paper").addEventListener("click", itemSelected);
document.getElementById("slct-rock").addEventListener("click", itemSelected);