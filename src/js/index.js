$(function () {
  // Initialize Firebase
  const firebaseConfig = {
    apiKey: 'AIzaSyDqNGdd6ZTXd7EKzj2lmeCGbA9rMNNhzqY',
    authDomain: 'blog-collab.firebaseapp.com',
    databaseURL: 'https://blog-collab.firebaseio.com',
    projectId: 'blog-collab',
    storageBucket: 'blog-collab.appspot.com',
    messagingSenderId: '1046185435674',
    appId: '1:1046185435674:web:814f14cc558a3846c827a3',
  };
  firebase.initializeApp(firebaseConfig);
  const fireDb = firebase.database();

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
      });
    } else {
      navButtons.fadeOut();
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

  // sets collab email in firebase
  const setEmailInFirebase = () => {
    const fromEmail = $('#from-email').val();
    const dbRef = fireDb.ref('users/');
    const pushKey = dbRef.push();

    pushKey.set({
      email: fromEmail,
    });
  };

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
    setEmailInFirebase();
    redirectToMail();
  });
});
