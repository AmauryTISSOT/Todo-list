import AddTodo from "./addTodo";
import DomManipulation from "./domManip";
import GetData from "./getData";
import DateData from "./dateData";

const load = new DomManipulation();
load.popUpModal();

const data = new GetData();
data.getFormInfo();
data.sortByDate();







