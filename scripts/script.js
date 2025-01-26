const button = document.getElementById('submit-button');

button.addEventListener('click', function(){
    const newDiv = document.createElement('div');
    newDiv.classList.add('recs');
    const newRec = document.getElementById('recs-input').value;
    if (newRec == ""){
        alert("Please enter a recommendation!");
    }else{
        newDiv.textContent = "'"+ newRec +"'";
        document.querySelector('.recs-container').appendChild(newDiv);
        document.getElementById('recs-input').value = null;
        alert("Thank you for submitting a recommendation!")
    }
})