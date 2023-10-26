const emp = 
{
    first: "VIGNESH",
    last: "MORISHETTY",
    id: 10333,
    designations: "CMA INTERMEDIATE",
    departments: "Finance",
    bio: function() 
    {
      return `${this.first} ${this.last} ${this.designations} ${this.id} ${this.departments}`;
    },
    introduceSelf: function () 
    {

        console.log(`Hi! I'm ${this.first} ${this.last} my designation ${this.designations} in the department of ${this.departments}`);
        
        
            },
  };

  function logProperty(propertyName) 
  {
    console.log(emp[propertyName]);
  }
  logProperty("first") ;
  logProperty("last");

  function Profile(firstname,lastname,id,designation,department) 
  {
    this.fname = firstname;
    this.lastname= lastname;
    this.id= id;
    this.designation= designation;
    this.department= department;
    this.introduceSelf = function () 
    {
    console.log(`Hi! I'm ${this.fname} from the department of ${this.department}`);
        };
      }
      
    const vinaybabu= new Profile("vinaybabu","samala","10005","software","CSE");
    vinaybabu.fname;
    vinaybabu.department;
    vinaybabu.introduceSelf();

    const babai= new Profile("vinay","gireesh","10020","software","CSE");
    babai.fname;
    babai.department;
    babai.introduceSelf();
    
    const sameer= new Profile("sameer","kumar","10017","software","CSE");
    sameer.fname;
    sameer.department;
    sameer.introduceSelf();

    const manoj= new Profile("manoj","sandhilya","10023","software","CSE");
    manoj.fname;
    manoj.department;
    manoj.introduceSelf();

    const murali= new Profile("murali","krishna","10013","software","CSE");
    murali.fname;
    murali.department;
    murali.introduceSelf();

 