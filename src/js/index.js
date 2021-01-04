$(function () {
  // particlesJS
  particlesJS.load(
    'particles-js',
    'js/libs/particle/particlesjs-config.json',
    function () {
      console.log('callback - particles.js config loaded');
    }
  );

  // Onclick for the navigation
  const navigation = {
    top: 'intro',
    center: 'works',
    bottom: 'contact',
  };
  Object.keys(navigation).map((key) => {
    const navButton = document.querySelector(`#${key}`);
    navButton.addEventListener('click', () => {
      $('html, body').animate(
        {
          scrollTop: $(`#${navigation[key]}`).offset().top,
        },
        500
      );
    });
  });

  // Hide/show the nav buttons
  window.onscroll = function () {
    const navButtons = $('#nav-btns');
    if (window.pageYOffset + 400 >= window.innerHeight) {
      navButtons.fadeIn();
      Object.keys(navigation).map((key) => {
        document.querySelector(`#${key}`).style.color = '#fff';
        document.querySelector('#particles-js').style.backgroundImage = 'url()';
      });
    } else {
      navButtons.fadeOut();
      document.querySelector('#particles-js').style.backgroundImage =
        'url(assets/images/cat-running.gif)';
    }

    if (window.pageYOffset >= 1200) {
      Object.keys(navigation).map((key) => {
        document.querySelector(`#${key}`).style.color = '#00203f';
      });
    }
  };

  // Onclick for projects
  const projectLinks = {
    map: 'https://github.com/anush629/Map.io',
    game: 'https://github.com/anush629/2048',
    senti: 'https://github.com/anush629/Sentiment-Analyser',
    friend: 'https://github.com/anush629/Friend-Finder',
    split: 'https://github.com/anush629/Splitpanunga',
    dash: 'https://github.com/anush629/Dashboard-for-dhanamtechsolutions',
  };
  Object.keys(projectLinks).map((key) => {
    const redirectBtn = document.querySelector(`#${key}`);
    redirectBtn.addEventListener('click', (event) => {
      window.location = projectLinks[event.target.id];
    });
  });

  // smooth scroll to works section
  $('#works-btn').click(() => {
    $('html, body').animate(
      {
        scrollTop: $('#works').offset().top,
      },
      500
    );
  });

  // redirects to mail page
  const redirectToMail = () => {
    const link =
      'mailto:anush.kumar.1998@gmail.com' +
      '?cc=' +
      '&subject=' +
      encodeURIComponent('Ready for collab?') +
      '&body=' +
      encodeURIComponent(
        'Hey Anush,\n\nReady to start a discussion or start collaborating in open source projects?\nI will be waiting for your collaboration.\n\nThanks'
      );
    window.location.href = link;
  };

  // Send emails for collab
  $('#send-mail').click(() => {
    redirectToMail();
  });
});
