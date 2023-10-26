const englandStationNames = [

            "London Paddington",

            "Manchester Piccadilly",

            "Birmingham New Street",

            "Liverpool Lime Street",

            "Leeds Station",

            // Add more station names as needed

        ];

 

        document.querySelector('form').addEventListener('submit', function(event) {

            event.preventDefault(); // Prevent the form from submitting

 

            const searchTerm = document.querySelector('#searchBox').value.trim();

 

            if (englandStationNames.includes(searchTerm)) {

                console.log(`Station found: ${searchTerm}`);

            } else {

                console.log(`Station not found: ${searchTerm}`);

            }

        });