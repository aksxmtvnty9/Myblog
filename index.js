$(document).ready(function () {
  const HGE_URL = 'https://visitcounterapp.herokuapp.com/v1alpha1/graphql'
  const gotToTopBtn = document.querySelector('#myBtn')

  // typewriting my name
  const showText = (target, message, index, interval) => {
    if (index < message.length) {
      $(target).append(message[index++])
      setTimeout(function () {
        showText(target, message, index, interval)
      }, interval)
    }
  }
  setTimeout(function () {
    $(function () {
      showText('#myname', 'Anush kumar N', 0, 150)
    })
  }, 2400)

  // update visits counter
  const updateVisitor = () => {
    const requestURL = new Request(HGE_URL)
    const options = {
      method: 'POST',
      body: JSON.stringify({
        query: `
          mutation update_counter {
              update_counter(
                 where: {id: {_eq: 1}},
                 _inc: {counts: 1}
              ) {
                 affected_rows
                    returning {
                       id
                       counts
                    }
                 }
           }
          `,
      }),
    }
    fetch(requestURL, options)
      .then((response) => {
        if (response.status === 200) {
          console.log('request sent to server')
        } else {
          console.error(
            'An error happened while sending the request',
            response.statusText
          )
        }
      })
      .catch((err) =>
        console.error('An error occured while sending the request', err)
      )
  }

  // retirve the visits of page
  const retriveVisits = () => {
    const requestURL = new Request(HGE_URL)
    const options = {
      method: 'POST',
      body: JSON.stringify({
        query: `
            query{
              counter{
                  id
                  counts
              }
            }`,
      }),
    }
    fetch(requestURL, options)
      .then((res) => res.json())
      .then((myJson) => {
        for (i = 0; i < myJson.data.counter.length; i++)
          $('#visits').append(
            '<p id="nos">' + myJson.data.counter[i].counts + '</p>'
          )
      })
  }

  // hide/show the goto top button
  const scrollFunction = () => {
    if (
      document.body.scrollTop > 150 ||
      document.documentElement.scrollTop > 150
    ) {
      document.getElementById('myBtn').style.display = 'block'
    } else {
      document.getElementById('myBtn').style.display = 'none'
    }
  }

  // to go to the top of the page
  const totop = () => {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }

  // smooth scroll to specific division
  $('#about').click(function () {
    $('html, body').animate(
      {
        scrollTop: $('#aboutdiv').offset().top,
      },
      500
    )
  })

  $('#projects').click(function () {
    $('html, body').animate(
      {
        scrollTop: $('#projectsdiv').offset().top,
      },
      500
    )
  })

  $('#contacts').click(function () {
    $('html, body').animate(
      {
        scrollTop: $('#contactsdiv').offset().top,
      },
      500
    )
  })

  //scrollReval.js for items
  ScrollReveal().reveal('#home', { delay: 400 })
  ScrollReveal().reveal('#about', { delay: 800 })
  ScrollReveal().reveal('#projects', { delay: 1200 })
  ScrollReveal().reveal('#contacts', { delay: 1600 })
  ScrollReveal().reveal('#myname', { delay: 2000 })
  ScrollReveal().reveal('#message', { delay: 3200 })
  ScrollReveal().reveal('#aboutme', { delay: 300 })
  ScrollReveal().reveal('#pic', { delay: 600 })
  ScrollReveal().reveal('#intro', { delay: 900 })
  ScrollReveal().reveal('#social', { delay: 300 })
  ScrollReveal().reveal('#social-1', { delay: 600 })
  ScrollReveal().reveal('#social-2', { delay: 900 })
  ScrollReveal().reveal('#social-3', { delay: 1200 })
  ScrollReveal().reveal('#social-4', { delay: 1500 })
  ScrollReveal().reveal('#social-5', { delay: 1800 })
  ScrollReveal().reveal('#social-6', { delay: 2100 })
  ScrollReveal().reveal('#social-7', { delay: 2400 })
  ScrollReveal().reveal('#social-8', { delay: 2700 })
  ScrollReveal().reveal('#myproject', { delay: 300 })
  ScrollReveal().reveal('#project-1', { delay: 600 })
  ScrollReveal().reveal('#project-2', { delay: 1200 })
  ScrollReveal().reveal('#project-3', { delay: 2100 })
  ScrollReveal().reveal('#project-4', { delay: 1800 })
  ScrollReveal().reveal('#project-5', { delay: 1500 })
  ScrollReveal().reveal('#project-6', { delay: 900 })
  ScrollReveal().reveal('#visits', { delay: 7000 })

  //to show the scroll to top button
  window.onscroll = function () {
    scrollFunction()
  }

  gotToTopBtn.addEventListener('click', totop)

  updateVisitor()
  retriveVisits()
})

$(window).scroll(function () {
  if ($(this).scrollTop() > 500) {
    $('body').addClass('change-color-1')
  }
  if ($(this).scrollTop() > 1200) {
    $('body').addClass('change-color-2')
  }
  if ($(this).scrollTop() > 1900) {
    $('body').addClass('change-color-3')
  }
  if ($(this).scrollTop() < 500) {
    $('body').removeClass('change-color-1')
  }
  if ($(this).scrollTop() < 1200) {
    $('body').removeClass('change-color-2')
  }
  if ($(this).scrollTop() < 1900) {
    $('body').removeClass('change-color-3')
  }
})
