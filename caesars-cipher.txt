function rot13(str) {
  var code = {
    'A':'N', 
    'B':'O',
    'C':'P',
    'D':'Q',
    'E':'R',
    'F':'S',
    'G':'T',
    'H':'U',
    'I':'V',
    'J':'W',
    'K':'X',
    'L':'Y',
    'M':'Z',
    }

   var arr = str.split("");
   var reg1 = /[A-M]/;
   var reg2 = /[N-Z]/;
   for (let i = 0; i < arr.length; i++) {
     if ( reg1.test(arr[i])) {
       arr[i] = code[arr[i]]
     } else if (reg2.test(arr[i])) {
       const key = Object.keys(code).find(key => code[key] === arr[i]);
        arr[i] = key;
     }
   }
    return arr.join('');
  
};
