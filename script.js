
function updateCountdown() {
    const currentDate = new Date();
    const targetDate = new Date('2024-06-11T22:59:59');
    
    const difference = targetDate - currentDate;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24))
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);


    document.querySelector('#days').innerText = days + 'd';
    document.querySelector('#hours').innerText = hours + 'h';
    document.querySelector('#minutes').innerText = minutes + 'm';
    document.querySelector('#seconds').innerText = seconds + 's';

    const interval = setInterval(updateCountdown, 1000);

    if(difference < 0) {
        clearInterval(interval);
        document.querySelector('#timer').innerText = "The event has started!";
    }
}

updateCountdown();