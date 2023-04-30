fetch('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json')
    .then(response => response.json())
    .then(data => setHeroes(data))
function setHeroes({ squadName, homeTown, formed, members }) {
    document.body.insertAdjacentHTML('afterbegin', `
    <h1>${squadName}</h1>
    <h2>${homeTown}</h2> 
    <h2>Стровено: ${formed} </h2>
    <div class="heroes">${setMembers(members)}</div>
    `)
}

function setMembers(members) {

    return members.map(member => (`
    <div>
     <h3>${member.name}</h3>
     <p>Secret indentity: ${member.secretIdentity}</p>
     <p>Age: ${member.age}</p>
     <p>Super powers:</p>
     <ul>
        ${member.powers.map(power => `<li>${power}</li>`).join(' ')}
     </ul>
    </div>
    `
    ))

}