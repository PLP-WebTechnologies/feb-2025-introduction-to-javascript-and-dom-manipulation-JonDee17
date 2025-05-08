// Add CSS styling to the document
const styleElement = document.createElement('style');
styleElement.textContent = `
    body {
        font-family: 'Arial', sans-serif;
        background-color: #f5f5f5;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
    }
    
    .container {
        width: 100%;
        max-width: 600px;
        padding: 20px;
    }
    
    .card {
        background-color: white;
        border-radius: 8px;
        padding: 20px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease;
    }
    
    .card:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }
    
    h2 {
        color: #333;
        margin-top: 0;
    }
    
    p {
        color: #666;
    }
    
    button {
        background-color: #4CAF50;
        color: white;
        border: none;
        padding: 10px 15px;
        border-radius: 4px;
        cursor: pointer;
        margin-top: 10px;
        transition: background-color 0.3s;
    }
    
    button:hover {
        background-color: #45a049;
    }
    
    .new-element {
        margin-top: 10px;
        padding: 10px;
        background-color: #f0f0f0;
        border-radius: 4px;
        border-left: 4px solid #4CAF50;
        animation: fadeIn 0.5s;
    }
    
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    
    .highlight {
        background-color: #ffffcc;
    }
`;
document.head.appendChild(styleElement);

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get references to elements
    const title = document.getElementById('title');
    const description = document.getElementById('description');
    const card = document.getElementById('card');
    const toggleButton = document.getElementById('toggleButton');
    const elementsContainer = document.getElementById('elementsContainer');
    
    // Track if elements are added
    let elementsAdded = false;
    
    // 1. Change text content dynamically when title is clicked
    title.addEventListener('click', function() {
        title.textContent = 'Text has been changed!';
        title.style.color = '#4CAF50';
    });
    
    // 2. Modify CSS styles via JavaScript on hover
    card.addEventListener('mouseover', function() {
        description.style.fontWeight = 'bold';
        description.style.color = '#4CAF50';
    });
    
    card.addEventListener('mouseout', function() {
        description.style.fontWeight = 'normal';
        description.style.color = '#666';
    });
    
    // 3. Add or remove elements when button is clicked
    toggleButton.addEventListener('click', function() {
        if (!elementsAdded) {
            // Add three new elements
            for (let i = 1; i <= 3; i++) {
                const newElement = document.createElement('div');
                newElement.className = 'new-element';
                newElement.textContent = `New element ${i} - Click me!`;
                
                // Make each new element interactive too
                newElement.addEventListener('click', function() {
                    this.classList.toggle('highlight');
                    this.textContent = this.classList.contains('highlight') 
                        ? `Element ${i} is now highlighted!` 
                        : `New element ${i} - Click me!`;
                });
                
                elementsContainer.appendChild(newElement);
            }
            toggleButton.textContent = 'Remove Elements';
            elementsAdded = true;
        } else {
            // Remove all elements
            elementsContainer.innerHTML = '';
            toggleButton.textContent = 'Add New Element';
            elementsAdded = false;
        }
    });
});