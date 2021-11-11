// $(function () {
//   // Typewriting my name
//   const showText = (target, message, index, interval) => {
//     if (index < message.length) {
//       $(target).append(message[index++]);
//       setTimeout(() => showText(target, message, index, interval), interval);
//     }
//   };
//   showText('#myName', 'Anush kumar N', 0, 100);

//   // Onclick for the navigation
//   const navigation = {
//     top: 'intro',
//     center: 'works',
//     bottom: 'contact',
//   };
//   Object.keys(navigation).map((key) => {
//     const navButton = document.querySelector(`#${key}`);
//     navButton.addEventListener('click', () => {
//       $('html, body').animate(
//         {
//           scrollTop: $(`#${navigation[key]}`).offset().top,
//         },
//         500
//       );
//     });
//   });

//   // Hide/show the nav buttons
//   window.onscroll = function () {
//     const navButtons = $('#nav-btns');
//     if (window.pageYOffset + 400 >= window.innerHeight) {
//       navButtons.css('display', 'flex');
//       navButtons.fadeIn();
//     } else {
//       navButtons.fadeOut();
//     }
//   };

//   // // Onclick for projects
//   const projectLinks = {
//     map: 'https://github.com/anush629/Map.io',
//     game: 'https://github.com/anush629/2048',
//     friend: 'https://github.com/anush629/Friend-Finder',
//     split: 'https://github.com/anush629/Splitpanunga',
//   };
//   Object.keys(projectLinks).map((key) => {
//     const redirectBtn = document.querySelector(`#${key}`);
//     redirectBtn.addEventListener('click', (event) => {
//       window.location = projectLinks[event.target.id];
//     });
//   });

//   // Smooth scroll to works section
//   $('#works-btn').click(() => {
//     $('html, body').animate(
//       {
//         scrollTop: $('#works').offset().top,
//       },
//       500
//     );
//   });

//   // Send email
//   const sendEmailBtn = document.querySelector('#sendEmailBtn');
//   if (sendEmailBtn) {
//     sendEmailBtn.addEventListener('click', function () {
//       const nameElement = $('#name');
//       const emailElement = $('#email');
//       const messageElement = $('#message');

//       const url = 'https://formsubmit.co/ajax/18c6dfc44d235115c857808037747faf';
//       const params = {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           Accept: 'application/json',
//         },
//         body: JSON.stringify({
//           name: nameElement.val(),
//           email: emailElement.val(),
//           message: messageElement.val(),
//         }),
//       };

//       fetch(url, params)
//         .then((response) => response.json())
//         .then((data) => {
//           if (data.success) {
//             swal({
//               text: 'Got your mail, will revert you.',
//               icon: 'success',
//               button: false,
//               timer: 2500,
//             });
//           } else {
//             swal({
//               text: 'Oops, Something bad happend',
//               icon: 'success',
//               button: false,
//               timer: 2500,
//             });
//           }
//           nameElement.val('');
//           emailElement.val('');
//           messageElement.val('');
//         })
//         .catch((error) => console.error(error));
//     });
//   }
// });
