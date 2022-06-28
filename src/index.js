import AddTodo from "./addTodo";
import DomManipulation from "./domManip";
import GetData from "./getData";
import DateData from "./dateData";

const load = new DomManipulation();
load.popUpModal();

const data = new GetData();
data.getFormInfo();

const date = new DateData();
console.log(date.compareMonth('2022/06/28'));
console.log(date.compareWeek('2022/06/28'));
console.log(date.compareDay('2022/06/28'));