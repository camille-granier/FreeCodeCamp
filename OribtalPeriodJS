function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;

  for (let i in arr) {
    if (arr[i].hasOwnProperty('avgAlt'))  {
      let a = earthRadius + arr[i]['avgAlt'];
      arr[i]['orbitalPeriod'] = Math.round(2 * Math.PI * (Math.sqrt((Math.pow(a, 3)/GM))));
      delete arr[i]['avgAlt'];
    }    
  }
  return arr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
