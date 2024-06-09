//attaching event listeners to each li tag 
const items = document.querySelectorAll('li');

//when an event happens inside the browser, the callback fn automatically 
//gives us a parameter called "event"/"e" object
//'e' contains information about the event that happened on the webpage

const button = document.querySelector('button')
const ul = document.querySelector('ul');
button.innerText = "Add new todo";

button.addEventListener('click',()=>{
    const li = document.createElement('li');
    li.textContent = 'new todo';
    ul.prepend(li);
});

//we can't remove the new added tasks and the previous one also don't work
//we solve this using event deligation

/* When an event occurs, like eg click, or whatever element we click, that
element becomes the event target (we can see this using e.target)

JS will always look if an event listener is attached to the element, it will
fire the callback function when event take place,t hat event then bubbles up the dom from the event target to its parent.
JS will look to see that if we have an event listener attached to this element
and will fire the appropriate callback fn
This is called Event bubbling*/

items.forEach((item)=>{
    item.addEventListener('click',(e)=>{
        //console.log(e);//on clicking we get an event object 'pointer event'
        console.log(e.target);
        //in the 'e' object we want to use the target property 
        //(it tells us which element was clicked)
        //e.target.style.textDecoration =  'line-through';
        console.log('event in li');
        e.stopPropagation();
        e.target.remove();
    });
});


ul.addEventListener('click',(e)=>{
    console.log('event in UL');
});

/* now if we click an event in li, then the event is also clicked in ul*/
//we use stop propogation to stop the event bubbling up
