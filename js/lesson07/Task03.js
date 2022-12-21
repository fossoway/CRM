'use strict';


{
  const addPrefix = (names, prefix) => [...names].map(name => prefix.concat(' ', name));


  const names= ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];
  console.log(addPrefix(names, 'Mr'));
}
