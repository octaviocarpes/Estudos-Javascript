(function() {
    'use strict';
  
    // Creating the module and factory we referenced in the beforeEach blocks in our test file
    angular.module('api.users', [])
    .factory('Users', function() {
      var Users = {};

      var userList = [
        {
          id: '1',
          name: 'Jane',
          role: 'Designer',
          location: 'New York',
          twitter: 'gijane'
        },
        {
          id: '2',
          name: 'Bob',
          role: 'Developer',
          location: 'New York',
          twitter: 'billybob'
        },
        {
          id: '3',
          name: 'Jim',
          role: 'Developer',
          location: 'Chicago',
          twitter: 'jimbo'
        },
        {
          id: '4',
          name: 'Bill',
          role: 'Designer',
          location: 'LA',
          twitter: 'dabill'
        }
      ];
  
      // Defining all to make our test pass. It doesn't need to do anything yet.
      Users.all = function() {
        // Returning the array of users. Eventually this will be an API call.
       return userList;
     };
 
  
      return Users;
    });
  })();