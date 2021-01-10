// ---------------How to use foreach -----------------------------------
var arrays = [ 1, 2, 3, 4, 5];

// [1]
// arrays.forEach( function( value, index, array ) {
// 　　　　　array[ index ] = value * 2;
// });
// console.log( arrays );

// [2]
// arrays.forEach((value, index, array) => {
//     array[index] = value*2;
//     console.log(array[index]);
// });

// [3]
arrays.forEach((value) => console.log(value*2));

// ----------------------------------------------------------------------


const modal = document.querySelector('.modal');
const previews = document.querySelectorAll('.gallery img');
const original = document.querySelector('.full-img');
const caption = document.querySelector('.caption');

// make sure how to get previews pics in foreach
// 4 pics = index = 0, 1, 2, 3
// preview = value = each element wwhich is pic
previews.forEach(function(preview, index){
    console.log(index, preview);
});


// Open modal(full-img)
previews.forEach(preview => {

    //console.log(preview);

    preview.addEventListener('click', ()=> {
        modal.classList.add('open');
        original.classList.add('open');

        // Change the img and text
        const originalSrc = preview.getAttribute('data-original');
        //console.log(originalSrc);
        original.src = `./full/${originalSrc}`;
        const altText = preview.alt;
        caption.textContent = altText;
    });
});

// Close modal(full-img)
modal.addEventListener('click', (e) => {
    if(e.target.classList.contains('modal')){
        modal.classList.remove('open');
        original.classList.remove('open');
    }
});
