(()=>{"use strict";const t=class{constructor(t,e,o,n,d,c){this.title=t,this.description=e,this.dueDate=o,this.priority=n,this.check=d,this.project=c}},e=new t("MCEN","call them before midnight","01/01/2022","urgent");console.table(e);const o=new class{constructor(t){this.todoObject=t}modalE=document.querySelector(".modal");todoInjection(){console.log("todoInjection");const t=document.querySelector(".content"),e=document.createElement("div");e.className="todoDiv",t.appendChild(e);const o=document.createElement("h3");e.appendChild(o).textContent=this.todoObject.title;const n=document.createElement("p");e.appendChild(n).textContent=this.todoObject.description;const d=document.createElement("div");d.className="date",e.appendChild(d).textContent=this.todoObject.dueDate;const c=document.createElement("button");e.appendChild(c).textContent="Modify";const l=document.createElement("button");e.appendChild(l).textContent="Check"}popUpModal(){document.querySelector(".add").addEventListener("click",(()=>{this.modalE.style.display="block"})),document.querySelector("#close").addEventListener("click",(()=>this.modalE.style.display="none")),window.addEventListener("click",(t=>{t.target==this.modalE&&(this.modalE.style.display="none")}))}getFormInfo(){const e=document.querySelector("form"),o=document.getElementById("get-title"),n=document.getElementById("get-description"),d=document.getElementById("get-due-date"),c=document.getElementById("get-priority");e.addEventListener("submit",(e=>{e.preventDefault();const l=new t(o.value,n.value,d.value,c.value);console.table(l),this.modalE.style.display="none"}))}}(e);o.todoInjection(),o.todoInjection(),o.todoInjection(),o.todoInjection(),o.popUpModal(),o.getFormInfo()})();