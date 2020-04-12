const fetch = require('node-fetch');       

  // const search = async (query, cb)=> {
  //   await fetch(`http://localhost:81/api/marcoBICE?q=${query}`,{method: 'GET'})
  //     .then(res => res.text())
  //     .then(cb);
  // }

  const search = async (cb)=> {
    await fetch(`http://localhost:81/api/marcoBICE`,{method: 'GET'})
      .then(res => res.json())
      .then(cb);
  }
  
  const Client = { search };
  export default Client;
  
