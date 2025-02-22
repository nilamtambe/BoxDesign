// function expandBox(boxId) {
//     const boxes = document.querySelectorAll('.box');
//     const selectedBox = document.getElementById(boxId);

//     // Reset all boxes to their original state
//     boxes.forEach(box => {
//         box.classList.remove('expanded');
//          // Hide the content in the non-selected boxes
//     });

//     // Add the expanded class to the selected box and show content
//     selectedBox.classList.add('expanded');
//     selectedBox.querySelector('p').style.display = 'block'; // Show content inside the expanded box
// }
// expandBox()




// const boxes = document.querySelectorAll('.box');




//     boxes.addEventListener('click', () => {
//         // Toggle 'active' class for each box when clicked
//         box.classList('expanded');
//         let selectorContainer = document.createElement("div");
//         let labelContainer = document.createElement("div");
//         let selectContainer = document.createElement("div");
//         selectorContainer.className ="selector-container"; 
//         labelContainer.className = "label-container";
//         selectContainer.className ="select-container"; 
//     });

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
