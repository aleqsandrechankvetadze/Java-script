let me = {
    name:"Aleqsandre",
    surname:"Chankvetadze",
    age:16,
    city:"tbilisi"
}

/*console.log(me.name);

me.age = 17;

me.country = "Georgia";

me.greet = function() {
    console.log("My name is" + " " + this.name + ".")
};

me.greet()

greet function(){
    console.log("my name is" + me.name)
}

me.greet()

let person1 = {
    name:"Luka",
    age:17,
    city:"qutaisi"
}

let person2 = {
    name:"Luka",
    age:17,
    city:"qutaisi"
}

console.log(person1 === person2)

if(person1.name === person2.name){
    console.log("This 2 person are equal by their values")
} else("This 2 person aren't equal by their values")

let school = {
    name:"221 Mega School",
    students:[
        {name: "Aleqsandre", age:16},
        {name: "luka", age:17},
        {name: "nika", age:15}
    ] 
}

console.log(school.students[0].name)
console.log(school.students[0].age)

let calculator = {
    add: function(a , b){
        return(a + b)
    },
    deduct: function(a , b){
        return(a - b)
    },
    multiply: function(a , b){
        return(a * b)
    },
    division: function(a , b){
        return(a / b)
        if(a / b == 0){
            return(a / b)
        }
    }
}
console.log(calculator.add(7 , 8))
console.log(calculator.deduct(9 , 2))
console.log(calculator.multiply(4,17))
console.log(calculator.division(10,6))*/







/*<script>
     validateForm() {
      let username = document.getElementById("username").value;
      let password = document.getElementById("password").value;

      if (username.length < 5) {
        alert("Username must be at least 5 characters long.");
        return false;
      }

      if (password.length < 8) {
        alert("Password must be at least 8 characters long.");
        return false;
      }


      function validateForm() {
        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;
  
        if (username.length > 5) {
          alert("You added your name in obj.");
        }else("username must be ")
  
        if (password.length < 8) {
          alert("Password must be at least 8 characters long.");
          return false;
        }}

        ####
        const person = {
            name: "Luka",
            age: 17,
            city: "Kutaisi",
            greet: function(){
                console.log(person.name + " How are you.")
            },
            about: {
                skill: "Programming"
            }
        }
        
        const you = {
            name: "Luka",
            age: 17,
            city: "Kutaisi",
            greet: function(){
                console.log(person.name + " How are you.")
            }
        }
        
        const calculator = {
            add: function(num1,num2){
                return num1 + num2;
            },
            subtract: function(num1,num2){
                return num1 - num2;
            },
            multiply: function(num1,num2){
                return num1 * num2;
            },
            divide: function(num1,num2){
                return num1 / num2;
            },
        }
        
        console.log(calculator.multiply
            (5,10))
        
        console.log(person === you)
        
        
        console.log(person["name"])
        console.log(person.name)
        
        person.age = 18;
        person["age"] = 19;
        
        person.score = 100;
        person["country"] = "Georgia";
        
        console.log(person)
        
        person.greet();
        
        
        
        
        const form = document.getElementById("form");
        
        const acc = {};
        
        form.addEventListener("submit", function(e){
            e.preventDefault();
        
            const username = form.elements.username.value;
            const password = form.elements.password.value;
        
            if(username.length >= 5 && password.length >= 8){
                acc.username = username;
                acc.password = password;
            } else{
                alert("Username must be 5 chr long and password must be 8");
            }
        
            console.log(acc)
        
        })


        ####
        let person = {
            name:"aleqsandre",
            suraname:"chankvetadze",
            age:15,
            dailyRoutine : {
                getUp:"make the bed,brush teeth, eat food",
                goToSchool:"learning",
                goToTraining:"train"
            },
            name : function(){
                console.log("hello my name is" + person.name)
            }
        }

        let x = 7

        y = x
        console.log(y)*/



        function flight (flightCode, landing) {
            this.code = flightCode;
            this.land = landing;
        }
        let code = new flight("abcd1234");
        let land = new flight("landed");

        console.log(flight)