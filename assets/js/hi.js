function hi() {
    var time = new Date().getHours();
    var greeting = document.getElementById('greeting')

    if (time => 0 && time <= 5) {
        greeting.textContent = "You should be in bed, but hello! "
    }
    if (time => 5 && time <= 12) {
        greeting.textContent = "Morning sunshine! ";
    }
    if (time => 12 && time <= 18) {
        greeting.textContent = "Good afternoon, ";
    }
    if (time => 18 && time <= 23) {
        greeting.textContent = "Good evening, ";
    }
}