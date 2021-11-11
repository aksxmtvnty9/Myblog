/**
 * @param {string}} leftDiv
 * @param {string} rightDiv
 * @returns
 */
const fadeIn = (leftDiv = '', rightDiv = '') => {
  const introText = document.querySelector(leftDiv);
  const introImg = document.querySelector(rightDiv);
  if (!introText || !introImg) {
    console.error('intro-text or intro-img node not found');
    return;
  }

  setTimeout(() => introText.classList.add('fade-in'), 200);
  setTimeout(() => introImg.classList.add('fade-in'), 500);
};

/**
 * @param {string} type
 */
const onChangeBackgroundTheme = (type = '') => {
  let addTheme = 'main-theme';
  let removeTheme1 = 'about-theme';
  let removeTheme2 = 'projects-theme';
  if (type === 'about') {
    addTheme = 'about-theme';
    removeTheme1 = 'main-theme';
    removeTheme2 = 'projects-theme';
  }
  if (type === 'projects') {
    addTheme = 'projects-theme';
    removeTheme1 = 'main-theme';
    removeTheme2 = 'about-theme';
  }
  document.body.classList.remove(removeTheme1);
  document.body.classList.remove(removeTheme2);
  document.body.classList.add(addTheme);
  document.querySelector('.floating-nav').classList.remove(removeTheme1);
  document.querySelector('.floating-nav').classList.remove(removeTheme2);
  document.querySelector('.floating-nav').classList.add(addTheme);
};

export { fadeIn, onChangeBackgroundTheme };
