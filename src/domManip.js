import AddTodo from "./addTodo";


class DomManipulation {
    
    // Constructor to get todo object info
    constructor(todoObject) {
        this.todoObject = todoObject;
    }
    
    modalE = document.querySelector('.modal');

    
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
        const addBtn = document.querySelector('.add');
        addBtn.addEventListener('click', () => {
            this.modalE.style.display = 'block';
        });
        
        const closeSpan = document.querySelector('#close');
        closeSpan.addEventListener('click', () => this.modalE.style.display = "none");
        
        window.addEventListener('click', (event) => {
            if (event.target == this.modalE) {
                this.modalE.style.display = "none";
        }});

    };

    // Method to get info from form

    getFormInfo () {
        const formE = document.querySelector('form');
        const getTitle = document.getElementById('get-title');
        const getDescription= document.getElementById('get-description');
        const getDueDate = document.getElementById('get-due-date');
        const getPriority = document.getElementById('get-priority');
        
        
        formE.addEventListener('submit', (event) => {
            event.preventDefault();
            const newTodo = new AddTodo(getTitle.value, getDescription.value, getDueDate.value,
                                        getPriority.value);
            console.table(newTodo);
            this.modalE.style.display = 'none';
        })
    }

}

export default DomManipulation