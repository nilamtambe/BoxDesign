
const boxes = document.querySelectorAll('.box');
const toggleBox = document.getElementById('toggleBox');
const selectorContainer = document.querySelector('.selector-container');


function resetBoxes() {
  boxes.forEach(box => {
    box.classList.remove('expanded');
    selectorContainer.style.display = 'none';
  });
}


boxes.forEach(box => {
  box.addEventListener('click', (event) => {
   
    event.stopPropagation();

    
    if (!box.classList.contains('expanded')) {
      resetBoxes(); 
      box.classList.add('expanded');  
      selectorContainer.style.display = 'block';   
      
    
    }
    
  });

 

});


document.body.addEventListener('click', resetBoxes);
