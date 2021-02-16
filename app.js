function nowforevers() {
    var aujourdhui = new Date();
    document.getElementById('houre').innerHTML = aujourdhui.toLocaleTimeString('fr-FR');

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('today').innerHTML = aujourdhui.toLocaleDateString('fr-FR', options);
}





function compare(date1, date2) {
    if (date1[0] > date2[0]) {
        return true
    } else {
        if (date1[1] > date2[1]) {
            return true
        } else {
            if (date1[2] > date2[2]) {
                return true
            } else {
                return false
            }

        }
    }



}

function background() {
    var event = new Date();
    var time = [event.getHours(), event.getHours(), event.getSeconds()]
    document.getElementById('lol').innerHTML = compare(time, [14, 19, 48]);

    if (compare(time, [14, 19, 30]) == true) {
        document.getElementById('home').style.backgroundImage = "url('image/hiver/matin.jpg')";



    } else {
        document.getElementById('home').style.backgroundImage = "url('image/hiver/soir.jpg')";


    }
}



function Start() {
    myVar = setInterval(nowforevers, 1);
    myVar2 = setInterval(background, 1);
}

Start()