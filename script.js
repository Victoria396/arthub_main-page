document.addEventListener('DOMContentLoaded', function() {
  function moveElementsIfMobile() {
    // main-header
    const content = document.querySelector('.main-header-content');
    const image = document.querySelector('.main-header-image-wrapper');
    const actions = document.querySelector('.main-header-actions');
    if (window.innerWidth <= 900) {
      content.insertBefore(image, actions);
    }
    // features-section
    const featuresText = document.querySelector('.features-text');
    const featuresImage = document.querySelector('.features-image');
    const featuresDev = document.querySelector('.features-dev');
    if (window.innerWidth <= 900) {
      featuresText.insertBefore(featuresImage, featuresDev);
    }
  }
  moveElementsIfMobile();
  window.addEventListener('resize', moveElementsIfMobile);
});
