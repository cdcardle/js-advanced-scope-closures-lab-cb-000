function produceDrivingRange(start, finish) {
  let travelDistance = Math.abs(parseInt(finish) - parseInt(start));

  return function insideFunction(maxDistance){
    if(travelDistance <= maxDistance) {
    	return `within range by ${maxDistance - travelDistance}`
    } else {
      return `${travelDistance - maxDistance} blocks out of range`
    }
  }
}
