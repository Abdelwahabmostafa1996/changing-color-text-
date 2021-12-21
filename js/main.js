
//add default local storage claass on body 

document.body.classList.add(localStorage.getItem("pagecolor"))
var el = document.querySelectorAll(".switsh-color li");
var classeslist = [];

// loop for elelment 

for (var i = 0; i < el.length; i++) {

    classeslist.push(el[i].getAttribute("date-color"));

    el[i].addEventListener(
        "click",
        function () {
            // remove old classes. 
            document.body.classList.remove(...classeslist);
            // add new  classes. 
            document.body.classList.add(this.getAttribute("date-color"));
            // add  data to local storge.
            localStorage.setItem("pagecolor", this.getAttribute("date-color"));
        },
        false
    );
}
console.log(localStorage.getItem("pagecolor"));