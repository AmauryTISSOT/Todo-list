import AddTodo from "./addTodo";
import DateData from "./dateData";
import DomManipulation from "./domManip";

class GetData extends DateData {
    
    constructor () {
        super();
        this.todoArray = [];
    }

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
            this._print();
        })
    };

    _print(){
        console.table(this.todoArray)
    }

    
    _todayTodo () {
        const todayBtn = document.getElementById('today');
        
        todayBtn.addEventListener('click', () => {
            this._deleteContentElement();
            const todayFilter = this.todoArray.filter((value) => this.compareDay(value.dueDate) && value.check != true);
            this._displayForEach(todayFilter);
        })
    };
    
    _weekTodo () {
        const btn = document.getElementById('week');
        
        btn.addEventListener('click', () => {
            this._deleteContentElement();
            const weekFilter = this.todoArray.filter((value) => this.compareWeek(value.dueDate) && value.check != true);
            this._displayForEach(weekFilter);
        })
    };
    
    _monthTodo () {
        const btn = document.getElementById('month');
        
        btn.addEventListener('click', () => {
            this._deleteContentElement();
            const monthFilter = this.todoArray.filter((value) => this.compareMonth(value.dueDate) && value.check != true);
            this._displayForEach(monthFilter);
           
        })
    };

    _allTodo () {
        const btn = document.getElementById('all');
        
        btn.addEventListener('click', () => {
            this._deleteContentElement();
            const allFilter = this.todoArray.filter((value) => value.check != true)
            this._displayForEach(allFilter);
        })
    }

    _displayForEach (todoArray) {

        todoArray.forEach((value) => {
            const DOM = new DomManipulation(value);
            DOM.todoInjection();
        })
        };

    _deleteContentElement () {
        const e = document.querySelector(".content");
        let first = e.firstElementChild;
        while (first) {
            first.remove();
            first = e.firstElementChild;
        };
    };

    sortByDate (){
        this._allTodo();
        this._todayTodo();
        this._weekTodo();
        this._monthTodo();
        
    }


};

export default GetData