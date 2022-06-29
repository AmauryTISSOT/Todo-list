import AddTodo from "./addTodo";
import DateData from "./dateData";
import DomManipulation from "./domManip";

class GetData {
    
    constructor () {
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
        const Date = new DateData()
        let todayArray = [];

        todayBtn.addEventListener('click', () => {
            console.log('today click');
            this.todoArray.forEach((value) => {
                console.log(value)
            var e = document.querySelector(".content");
            var first = e.firstElementChild;
            while (first) {
                first.remove();
                first = e.firstElementChild;
            };
                if(Date.compareDay(value.dueDate)) {
                    todayArray.push(value);
                    const todayTodo = new AddTodo(value.title, value.description, value.dueDate, 
                        value.priority, value.check,value.project);
                    const DOM = new DomManipulation(todayTodo);
                    DOM.todoInjection();
                }
                else console.log('today not match')
            });
           
                })
    };

    _weekTodo () {
        const btn = document.getElementById('week');
        const Date = new DateData()

        btn.addEventListener('click', () => {
            console.log('week click');
            this.todoArray.forEach((value) => {
                let e = document.querySelector(".content");
                let first = e.firstElementChild;
                while (first) {
                    first.remove();
                    first = e.firstElementChild;
                };
                if (Date.compareWeek(value.dueDate)){
                    const todayTodo = new AddTodo(value.title, value.description, value.dueDate, 
                        value.priority, value.check,value.project);
                    const DOM = new DomManipulation(todayTodo);
                    DOM.todoInjection();
                }
                else console.log('week not match')
                }
            );
           
                })
    };

    _monthTodo () {
        const btn = document.getElementById('month');
        const Date = new DateData()
        let todayArray = [];

        btn.addEventListener('click', () => {
            console.log('month click');
            this.todoArray.forEach((value) => {
                
            var e = document.querySelector(".content");
            var first = e.firstElementChild;
            while (first) {
                first.remove();
                first = e.firstElementChild;
            };
                if(Date.compareMonth(value.dueDate)) {
                    todayArray.push(value);
                    const todayTodo = new AddTodo(value.title, value.description, value.dueDate, 
                        value.priority, value.check,value.project);
                    const DOM = new DomManipulation(todayTodo);
                    DOM.todoInjection();
                }
            });
           
                })
    };

    _allTodo () {
        const btn = document.getElementById('all');
        let allTodoArray = [];
        console.table(allTodoArray)

        btn.addEventListener('click', () => {
            console.log(this.todoArray.filter(() => this.todoArray.check === undefined))
            allTodoArray.push(this.todoArray.filter(() => this.todoArray.check === undefined))
            allTodoArray.forEach((value) => {
                var e = document.querySelector(".content");
                var first = e.firstElementChild;
                while (first) {
                    first.remove();
                    first = e.firstElementChild;
                };
                const todayTodo = new AddTodo(value.title, value.description, value.dueDate, 
                    value.priority, value.check,value.project);
                const DOM = new DomManipulation(todayTodo);
                DOM.todoInjection();
            })
        })
    }

    sortByDate (){
        this._allTodo();
        this._todayTodo();
        this._weekTodo();
        this._monthTodo();
        
    }


};

export default GetData