const fetch = require('node-fetch');       

function search(query, cb) {
    return fetch(`http://localhost:81/api/marco?q=${query}`,{method: 'GET'})
      .then(res => res.text())
      .then(cb);
  }
  
  const Client = { search };
  export default Client;
  
