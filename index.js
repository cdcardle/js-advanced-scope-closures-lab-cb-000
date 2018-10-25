function produceDrivingRange(start, finish) {
  let inside = Math.abs(parseInt(finish) - parseInt(start));
  
  function(distance) {
    if(inside <= distance) {
    	return `within range by ${distance - inside}`
    } else {
      return `${inside - distance} blocks out of range`
    }
  }
}