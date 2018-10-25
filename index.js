function produceDrivingRange(start, finish) {
  let inside = Math.abs(parseInt(finish) - parseInt(start));

  function(maxDistance) {
    if(inside <= maxDistance) {
    	return `within range by ${maxDistance - inside}`
    } else {
      return `${inside - maxDistance} blocks out of range`
    }
  }
}
