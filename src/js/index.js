// particlesJS
particlesJS.load(
  'particles-js',
  '/src/js/libs/particle/particlesjs-config.json',
  function () {
    console.log('callback - particles.js config loaded')
  }
)

// Onclick for projects
const projectLinks = {
  map: 'https://github.com/anush629/Map.io',
  game: 'https://github.com/anush629/2048',
  senti: 'https://github.com/anush629/Sentiment-Analyser',
  friend: 'https://github.com/anush629/Friend-Finder',
  split: 'https://github.com/anush629/Splitpanunga',
  dash: 'https://github.com/anush629/Dashboard-for-dhanamtechsolutions',
}
Object.keys(projectLinks).map((key) => {
  const redirectBtn = document.querySelector(`#${key}`)
  redirectBtn.addEventListener('click', (event) => {
    window.location = projectLinks[event.target.id]
  })
})

// smooth scroll to works section
$('#works-btn').click(() => {
  $('html, body').animate(
    {
      scrollTop: $('#works').offset().top,
    },
    500
  )
})

// Onclick for the navigation
const navigation = {
  top: 'intro',
  center: 'works',
  bottom: 'contact',
}
Object.keys(navigation).map((key) => {
  const navButton = document.querySelector(`#${key}`)
  navButton.addEventListener('click', () => {
    $('html, body').animate(
      {
        scrollTop: $(`#${navigation[key]}`).offset().top,
      },
      500
    )
  })
})
