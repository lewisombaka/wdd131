// Select the input element for favorite chapter/book by its ID
const input = document.querySelector('#favchap');

// Select the button element
const button = document.querySelector('button');

// Select the list element where items will be added
const list = document.querySelector('#list');

// // Add a click event listener to the button
// button.addEventListener('click', () => {
//     // Check if the input value is empty
//     if (input.value === '') {
//         // Alert the user to enter a favorite book if the input is empty
//         alert('Enter your favorite book');
//         // Focus the input field for user convenience
//         input.focus();
//         // Exit the function early if input is empty
//         return;
//     }
//     else{
//         // Create a new list item (li) element
//         const li = document.createElement('li');
//         // Create a new button element for deleting the list item
//         const deleteButton = document.createElement('button');
//         // Set the text content of the list item to the input value
//         li.textContent = input.value;
//         // Set the text content of the delete button to a cross mark
//         deleteButton.textContent = '❌';
//         // Append the delete button to the list item
//         li.append(deleteButton);
//         // Append the list item to the list
//         list.append(li);

//         // Clear the input field
//         input.value = '';
//         // Focus the input field for user convenience
//         input.focus();

//         // Add a click event listener to the delete button
//         deleteButton.addEventListener('click', () => {
//         // Remove the list item from the list when the delete button is clicked
//         list.removeChild(li);
//         // Focus the input field for user convenience
//         input.focus();
//         });
//     }
// });

// Focus the input field when the page loads for user convenience
// input.focus();

chaptersArray = getChapterList() || [];
chaptersArray.forEach(chapter=>{
    displayList(chapter);
});

button.addEventListener('click',()=>{
    if(input === ''){
        alert('Enter a book and a chapter');
        input.focus();
        return;
    }
    displayList(input.value); // call the function that outputs the submitted chapter
    chaptersArray.push(input.value);  // add the chapter to the array
    setChapterList(); // update the localStorage with the new array
    input.value = ''; // clear the input
    input.focus(); // set the focus back to the input
    });
    function displayList(item) {
        let li = document.createElement('li');
        let deletebutton = document.createElement('button');
        li.textContent = item; // note the use of the displayList parameter 'item'
        deletebutton.textContent = '❌';
        deletebutton.classList.add('delete'); // this references the CSS rule .delete{width:fit-content;} to size the delete button
        li.append(deletebutton);
        list.append(li);
        deletebutton.addEventListener('click', function () {
        list.removeChild(li);
        deleteChapter(li.textContent); // note this new function that is needed to remove the chapter from the array and localStorage.
        input.focus(); // set the focus back to the input
        });
        console.log('I like to copy code instead of typing it out myself and trying to understand it.');
    }
    function setChapterList() {
        localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
    }
    function getChapterList() {
        return JSON.parse(localStorage.getItem('myFavBOMList'));
    }
    function deleteChapter(chapter) {
        chapter = chapter.slice(0, chapter.length - 1);
        chaptersArray = chaptersArray.filter(item => item !== chapter);
        setChapterList();
    }