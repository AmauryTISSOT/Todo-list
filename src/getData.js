import AddTodo from "./addTodo";
import DomManipulation from "./domManip";

class GetData {
    
    todoArray = [];

    getFormInfo () {
        const modalE = document.querySelector('.modal');
        const formE = document.querySelector('form');
        const getTitle = document.getElementById('get-title');
        const getDescription= document.getElementById('get-description');
        const getDueDate = document.getElementById('get-due-date');
        const getPriority = document.getElementById('get-priority');
        
        
        formE.addEventListener('submit', (event) => {
            event.preventDefault();
            const newTodo = new AddTodo(getTitle.value, getDescription.value, getDueDate.value,
                                        getPriority.value);
            //console.log(newTodo);
            modalE.style.display = 'none';
            const DOM = new DomManipulation(newTodo);
            DOM.todoInjection();
            getTitle.value = '';
            getDescription.value = '';
            getDueDate.value = '';
            this.todoArray.push(newTodo);
            console.table(this.todoArray);
        })
    };
};

export default GetData