const onClick = (event) => {
    event.preventDefault(); // Prevents the default behavior of the button click



    const birthDate = document.getElementById('birthDay').value;
    const zodiacSign = getZodiacSign(birthDate);

    if (zodiacSign) {
        document.querySelector('#placeToSee').innerText = "Your Zodiac Sign is: " + zodiacSign;
        document.getElementById('reset').style.display = 'inline'; // Show the reset button
    } else {
        document.querySelector('#placeToSee').innerText = "Invalid date or not in range.";
    }
}
document.querySelector('#check').addEventListener('click', onClick)

document.querySelector('#reset').addEventListener('click', function(event) {
    event.preventDefault(); // Prevents the default behavior of the button click

    document.getElementById('birthDay').value = ''; // Clear the input field
    document.querySelector('#placeToSee').innerText = ''; // Clear the displayed zodiac sign
    document.getElementById('reset').style.display = 'none'; // Hide the reset button again
});

function getZodiacSign(dateString) {
    let date = new Date(dateString);
    let month = date.getMonth() + 1;
    let day = date.getDate();

    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
        return "Aries";
    } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
        return "Taurus";
    } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
        return "Gemini";
    } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
        return "Cancer";
    } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
        return "Leo";
    } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
        return "Virgo";
    } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
        return "Libra";
    } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
        return "Scorpio";
    } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
        return "Sagittarius";
    } else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
        return "Capricorn";
    } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
        return "Aquarius";
    } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
        return "Pisces";
    } else {
        return null; // Invalid date
    }
}



// document.querySelector('#check').addEventListener('click', check)


// function check(){
//     let birthDate = document.getElementById('birthDay').value;
    

//     if(birthDate >= '2024-04-20' && birthDate <= '2024-05-20' ){
//         document.querySelector('#placeToSee').innerText = "Taurus"
        
//     }

// }
// document.querySelector('#check').addEventListener('click', function(event) {
//     event.preventDefault(); // Prevents the default behavior of the button click

//     let birthDate = document.getElementById('birthDay').value;

//     if (birthDate >= '2024-04-20' && birthDate <= '2024-05-20') {
//         document.querySelector('#placeToSee').innerText = "Taurus";
//     }
// });