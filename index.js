function produceDrivingRange(start, finish) {
  let travelDistance = Math.abs(parseInt(finish) - parseInt(start));

  return function insideFunction(blockRange){
    if(travelDistance <= blockRange) {
    	return `within range by ${blockRange - travelDistance}`
    } else {
      return `${travelDistance - blockRange} blocks out of range`
    }
  }
}
