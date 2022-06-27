import AddTodo from "./addTodo";
import DomManipulation from "./domManip";

const addTodo = new AddTodo('MCEN', 'call them before midnight', '01/01/2022', 'urgent');
console.table(addTodo);


const DOM = new DomManipulation(addTodo);
DOM.todoInjection();
DOM.todoInjection();
DOM.todoInjection();
DOM.todoInjection();
DOM.popUpModal();