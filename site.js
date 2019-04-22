

function doClick() {
    alert('Click');
}

bbb.onclick = function(event) {
    event.stopPropagation();
    alert( 'Спасибо' );
  };


  bbb.onclick = function() {
    alert( 'Пожалуйста' );
  };


bbb.addEventListener( 'click', doClick );
//bbb.addEventListener( 'click' , function() {alert('Спасибо!')});
bbb.removeEventListener( 'click', doClick );
bbb.removeEventListener( 'click' , function() {alert('Спасибо!')});


const slides = [
  {id: 1, name: 'Derek Anderson1', job: 'BRITISH COMEDIAN', video: 'some src', title: 'ENQUIRE ABOUT DEREK' },
  {id: 2, name: 'Derek Anderson2', job: 'BRITISH COMEDIAN', video: 'some src', title: 'ENQUIRE ABOUT DEREK' },
  {id: 3, name: 'Derek Anderson3', job: 'BRITISH COMEDIAN', video: 'some src', title: 'ENQUIRE ABOUT DEREK' },
  {id: 4, name: 'Derek Anderson4', job: 'BRITISH COMEDIAN', video: 'some src', title: 'ENQUIRE ABOUT DEREK' }
];

let currentSlide = 1;
const leftArrowElement = document.querySelector('.slider-left-arrow');
const rightArrowElement = document.querySelector('.slider-right-arrow');

function doSlide(direction) {
  currentSlide += direction;
  document.querySelector('h1').innerText = slides[currentSlide].name;
  // change video
  // change title
  // change job
  // change slider-page
  if (currentSlide === 0) {
    leftArrowElement.classList.add('disabled');
  } else {
    leftArrowElement.classList.remove('disabled');
  }
}

// leftArrowElement.addEventListener( 'click', function() {doSlide(-1)});
// rightArrowElement.addEventListener( 'click', function() {doSlide(1)});
