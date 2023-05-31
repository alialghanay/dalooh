const dir = () => {
    function importAll(r) {
        return r.keys().map(r);
      }
      
      const array = importAll(require.context('./', false, /\.(jpg)$/));
      return array;
}

module.exports =  dir;
