       //variables in js
       var names = "<h1>KHAREENA SHAIK</h1>";
        var role = "Associate Software Engineer";
        document.getElementById("demo").innerHTML = names;
        document.getElementById("demo1").innerHTML = role;

   

        //creating an object
        var car = {
            name: 'Tesla',
            model: 'Model 3',
            weight: 1700,
            extras: ['heated seats', 'wood decor', 'tinted glass'],
            details: function() {
              alert('This ' + this.name + ' is a ' + this.model + ' it weighs ' + this.weight + 'kg and includes the following extras: ' + this.extras[0] + ', ' + this.extras[1] + ' and ' + this.extras[2] + '.');
            },
            display: function() {
              alert('This car is a ' + this.name + '.');
            }
          };


/*var user = {
    name: "Richard",
    age: 32,
    "likes steaks": true  // a multiword property name must be quoted
  };

        // objects
        //const details =
       // {
            //name1 : "manu",
            //role : "ase",
            //details:function()
            //{
                //return this.name1 + " " + this.role;
            //}
        //};
        // document.write(details.name1);
       
