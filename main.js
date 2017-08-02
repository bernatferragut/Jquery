// JQuery - When()

$(document).ready(()=> {
    function taskConsult() {
        // Deferred creation
        const deferred = $.Deferred();
        // Fake answer
        setTimeout( ()=>{
            console.log('2sec just passsed');
        },2000);
        // Promise creation
        return deferred.promise();
    }
    // Promise 2
    function task_2() {
        const deferred = $.Deferred();
        setTimeout(()=> deferred.resolve('999$'), 5000);
        return deferred.promise();
    }
    // Promise 3
    function task_3() {
        const deferred = $.Deferred();
        setTimeout(()=> deferred.resolve('fluid'), 4000);
        return deferred.promise();
    }

    taskConsult()
        .then((res) => console.log(res))

    // only if the 3 promises are successful
    $.when(taskConsult(), task_2(), task_3())
        .then((res) => cosole.log(res, dollars, traffic));
});