function showPattern(){
    const colorsArr = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    
    let topPosition = 25;
    let leftPosition = 25;
    let width = 500;
    let height = 500;

    while(width > 50){
        const randomColorIdx = Math.floor(Math.random() * colorsArr.length);

        // creating div element
        const newDiv = document.createElement('div');

        // setting CSS properties to the new div element
        newDiv.style.top = topPosition + 'px';
        newDiv.style.left = leftPosition + 'px';
        newDiv.style.width = width + 'px';
        newDiv.style.height = height + 'px';
        newDiv.style.background = colorsArr[randomColorIdx];

        // attaching the div element in the DOM
        document.body.appendChild(newDiv);

        // still inside the while loop, update the values of these variables. At the next loop iteration, these values will be used to set the properties of the next div that is created
        topPosition += 10;
        leftPosition += 10;
        width -= 20;
        height -= 20;
    }
}