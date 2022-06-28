import AddTodo from "./addTodo";
import DomManipulation from "./domManip";
import GetData from "./getData";

const load = new DomManipulation();
load.popUpModal();

const data = new GetData();
data.getFormInfo();