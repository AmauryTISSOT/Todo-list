class DomManipulation {

    // Constructor to get todo object info
    constructor(todoObject) {
        this.todoObject = todoObject;
    }

    // Method who inject todo info in DOM
    todoInjection() {
        console.log('todoInjection')
        const contentE = document.querySelector('.content');
        const todoDiv = document.createElement('div');
        todoDiv.className = ('todoDiv')
        contentE.appendChild(todoDiv);

        const h3E = document.createElement('h3');
        todoDiv.appendChild(h3E).textContent = this.todoObject.title;

        const descriptionE = document.createElement('p');
        todoDiv.appendChild(descriptionE).textContent = this.todoObject.description;

        const dateE = document.createElement('div')
        dateE.className = 'date';
        todoDiv.appendChild(dateE).textContent = this.todoObject.dueDate;

        const btnModify = document.createElement('button');
        todoDiv.appendChild(btnModify).textContent = 'Modify';

        const btnCheck = document.createElement('button');
        todoDiv.appendChild(btnCheck).textContent = 'Check';
    }

    // Method who manage the popup window
    popUpModal () {
        const modalE = document.querySelector('.modal')
        const addBtn = document.querySelector('.add');
        addBtn.addEventListener('click', () => {
            modalE.style.display = 'block';
        });

        const closeSpan = document.querySelector('#close');
        closeSpan.addEventListener('click', () => modalE.style.display = "none");
        
        window.addEventListener('click', (event) => {
            if (event.target == modalE) {
                  modalE.style.display = "none";
        }});

    };

}

export default DomManipulation