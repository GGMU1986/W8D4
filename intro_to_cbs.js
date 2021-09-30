class Clock {

    constructor() {
        let date = new Date();
        this.hours = date.getHours();
        this.minutes = date.getMinutes();
        this.seconds = date.getSeconds();

        //this.printTime();
        setInterval(() => {
            let new_date = new Date();
            this.hours = new_date.getHours();
            this.minutes = new_date.getMinutes();
            this.seconds = new_date.getSeconds();
            console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
        }, 1000);
    }

    // printTime() {
    //     // let that = this;
    //     console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
    // }

    //_tick() {
        // if (this.seconds === 59){
        //     this.minutes += 1; 
        //     this.seconds = 00;
        // }
           
        // if (this.minutes === 59){
        //     this.hours += 1; 
        //     this.minutes = 00; 
        // }

        // if (this.hours === 24){
        //     this.hours = 00;
        // }

        // this.seconds += 1;
        //this.printTime();   
    // }
}

   
const clock = new Clock();
