function getdata(){
    let datacur=document.querySelector('.jokes');
fetch('https://api.chucknorris.io/jokes/random')
 .then(response => response.json())
  .then(data =>{ console.log(data)
    datacur.innerHTML=data.value;
  }
  )
 .catch(err =>console.error())
 

}