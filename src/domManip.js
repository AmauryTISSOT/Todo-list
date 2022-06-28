import AddTodo from "./addTodo";


class DomManipulation {
    
    // Constructor to get todo object info
    constructor(todoObject) {
        this.todoObject = todoObject;
    }
    
    // Class property
    modalE = document.querySelector('.modal');

    
    // Method who inject todo info in DOM
    todoInjection() {
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
        btnModify.className = 'btnModify';
        todoDiv.appendChild(btnModify).textContent = 'Modify';
        
        const btnCheck = document.createElement('button');
        btnCheck.className = 'btnCheck';
        todoDiv.appendChild(btnCheck).textContent = 'Check';

        if (this.todoObject.priority === 'urgent') {
            todoDiv.id = 'urgent'
        }
        else todoDiv.id = 'non-urgent'

        this._checkRemove(btnCheck);
        this._checkModify(btnModify);

    };
      
    
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


    // Private method to remove current todoDiv
    _checkRemove (btnElement) {
        btnElement.addEventListener('click', () => {
            btnElement.parentElement.remove();
            this.todoObject.check = true;
        })
    };

    // Private method to modify current todoDiv
    _checkModify (btnElement){
        btnElement.addEventListener('click', () => {
            this.modalE.style.display = 'block';

            const getTitle = document.getElementById('get-title');
            const getDescription= document.getElementById('get-description');
            const getDueDate = document.getElementById('get-due-date');
            const getPriority = document.getElementById('get-priority');
           
            const formE = document.querySelector('form');

            getTitle.value = this.todoObject.title;
            getDescription.value = this.todoObject.description;
            getDueDate.value = this.todoObject.dueDate;
            getPriority.value = this.todoObject.priority;

            formE.addEventListener('submit', (event) => {
                event.preventDefault();
                
                this.modalE.style.display = 'none';
                this.todoObject.title = getTitle.value;
                this.todoObject.description = getDescription.value;
                this.todoObject.dueDate = getDueDate.value;
                this.todoObject.priority = getPriority.value;
                
                getTitle.value = '';
                getDescription.value = '';
                getDueDate.value = '';

                btnElement.parentElement.remove();
                this.todoObject.check = true;


        })
    })};



}

export default DomManipulation