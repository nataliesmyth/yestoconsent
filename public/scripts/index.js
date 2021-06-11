console.log('sanity check')
const rootElement = document.getElementById('rootElement');


const team = [
  {name: 'test', role: 'test', image: 'test', bio: 'test'},
  {name: 'boo', role: 'test', image: 'test', bio: 'test'},
  {name: 'test', role: 'test', image: 'test', bio: 'test'},
  {name: 'test', role: 'test', image: 'test', bio: 'test'},
  {name: 'test', role: 'test', image: 'test', bio: 'test'},
  {name: 'test', role: 'test', image: 'test', bio: 'test'},
  {name: 'test', role: 'test', image: 'test', bio: 'test'},
  {name: 'test', role: 'test', image: 'test', bio: 'test'},
  {name: 'test', role: 'test', image: 'test', bio: 'test'},
  {name: 'test', role: 'test', image: 'test', bio: 'test'},
  {name: 'test', role: 'test', image: 'test', bio: 'test'},
  {name: 'test', role: 'test', image: 'test', bio: 'test'},
  {name: 'test', role: 'test', image: 'test', bio: 'test'},
  {name: 'test', role: 'test', image: 'test', bio: 'test'},
  {name: 'test', role: 'test', image: 'test', bio: 'test'},
  {name: 'test', role: 'test', image: 'test', bio: 'test'},
  {name: 'test', role: 'test', image: 'test', bio: 'test'},
]

const getTeamTemplate = (props) => {
  return `
      <div class="card">
          <h4>${props.name}</h4>
          <p>${props.role}</p>
          <p>${props.image}</p>
          <p>${props.bio}</p>
      </div>
  `;
};

const renderTeam = (teamArray) => {
  rootElement.innerHTML = '';

  const teamTemplates = teamArray.map((team) => {
      return getTeamTemplate(team);
  }).join('');
  
  console.log(teamTemplates)

  rootElement.insertAdjacentHTML('beforeend', teamTemplates);
}

teamBtn.addEventListener('click', () => {
  renderTeam(team);
});








// $('#navbarDropdown').on('show.bs.dropdown', function () {
//     // do something…
//     console.log('hello')
//   })

// $('#home-link').on('click', function() {
//   $('#main-index').hide()
// })