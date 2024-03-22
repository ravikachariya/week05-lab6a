//Initialize a new Node.js project with a package.json file using the -y flag to accept all default settings:
//execute below command in terminal 
//npm init -y
//Install the npm install date-fns module using npm:
//execute below command in terminal
//npm install date-fns 
//This command will download and install the date-fns module into the node_modules directory of your project and add it as a dependency in your package.json file.
 
 // Import specific functions from date-fns
 const { format, addDays } = require('date-fns');

 // Get the current date
 const currentDate = new Date();
 
 // Format the current date
 const formattedDate = format(currentDate, 'MMMM dd, yyyy');
 console.log('Formatted Date:', formattedDate);
 
 // Add 7 days to the current date
 const futureDate = addDays(currentDate, 7);
 console.log('Future Date:', format(futureDate, 'MMMM dd, yyyy'));
 

 //Run your Node.js application using the following command:

//node app.js
//This command will execute the app.js file and display the formatted date in the console.