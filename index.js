document.addEventListener('DOMContentLoaded', () => {
  console.log("HELLO")


function showSushi(sushi) {
  let sushiMenu = document.querySelector('#sushi-menu')
   sushiMenu.innerHTML +=`<div class="sushi">
       <h3 class="sushi_title">${sushi.name}</h3>
       <img src="${sushi.image_url}">
       <p class="sushi_description">
         ${sushi.description}
       </p>
       <button class="button" data-id=${sushi.id}>Add to Order</button>
</div>`
}




function getSushis(){
  return fetch('http://localhost:3000/sushis')
  .then(response => response.json())
}

getSushis().then(sushiObj => {
  sushiObj.forEach((sushi) => {
    showSushi(sushi)
  })
})



})
