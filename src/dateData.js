class DateData {

    // format yyyy/mm/dd : return a string
    currentDay =  new Date().toISOString().split('T')[0].replaceAll('-','/')

    // return a number 
    currentMonth = (new Date().getMonth()) + 1;
    
    compareDay (dueDate) {
        console.log(this.currentDay)
        if(this.currentDay === dueDate) {
            return true
        }
        else return false
    }

    compareMonth (dueDate) {
        const regex = /\/(\d{1,2})\//g;
        let month = dueDate.match(regex);
        month = month[0].match(/\d\d/);
        month = parseInt(month[0]);

        if (this.currentMonth === month) {
            return true
        }
        else return false  
    }

    compareWeek (dueDate) {
        Date.prototype.getWeekNumber = function(){
            var d = new Date(Date.UTC(this.getFullYear(), this.getMonth(), this.getDate()));
            var dayNum = d.getUTCDay() || 7;
            d.setUTCDate(d.getUTCDate() + 4 - dayNum);
            var yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
            return Math.ceil((((d - yearStart) / 86400000) + 1)/7)
          };
        
        const currentWeek = new Date().getWeekNumber();

        const leapYears = function(year) {
            return year % 4 === 0 && ( year % 100 !== 0 || year % 400 === 0);
          };

        const normalYearArray = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        const leapYearsArray = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

        const regexYear = /(\d+)/g;
        let year = dueDate.match(regexYear);
        year = parseInt(year[0]);

        const regexMonth = /\/(\d{1,2})\//g;
        let month = dueDate.match(regexMonth);
        month = month[0].match(/\d\d/);
        month = parseInt(month[0]);

        const regexDay = /(\d+)$/g;
        let day = dueDate.match(regexDay);
        day = parseInt(day[0]);
     
        let sum = 0;

        if (leapYears(year)){
            for (let i = 0 ; i < (month-1); i++) {
                sum += leapYearsArray[i]
            }
        }
        else {
            for (let i = 0 ; i < (month-1); i++) {
                sum += normalYearArray[i]
            }
        }

        const actualWeek = Math.round((sum + day) / 7);

        if (currentWeek === actualWeek){
            return true
        }
        else return false
    }

}

export default DateData;