function produceDrivingRange(blockRange) {
  return function insideFunction(start, finish){
    let travelDistance = Math.abs(parseInt(finish) - parseInt(start));

    if(travelDistance <= blockRange) {
    	return `within range by ${blockRange - travelDistance}`
    } else {
      return `${travelDistance - blockRange} blocks out of range`
    }
  }
}

function produceTipCalculator() {
  return function() {
    return 0
  }
}
