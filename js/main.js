document.querySelector('#check').addEventListener('click', check)

function check(){
    let birthDate = document.getElementById('birthDay').value;
    

    if(birthDate == '1997-05-10' ){
        document.querySelector('#placeToSee').innerText = "Taurus"
        
    }

    


}