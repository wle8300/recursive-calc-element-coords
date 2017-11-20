module.exports = function (element) {

  var aggOffsetLeft = 0
  var aggOffestTop = 0
  var objectCursor = element

  //recursively traverse DOM element via "offsetParent" and
  //aggregate all "offsetLeft" and "offsetTop" values
  //
  //stop once "offsetParent" is null
  do {
    aggOffsetLeft += objectCursor.offsetLeft
    aggOffestTop += objectCursor.offsetTop
    objectCursor = objectCursor.offsetParent
  }
  while (objectCursor)

  return {
    x: aggOffsetLeft,
    y: aggOffestTop,
  }
}