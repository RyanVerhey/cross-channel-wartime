range = (first,last) ->
  numArray = []
  for i in [first..last]
    numArray.push(i)
  return numArray

flatten = (array) ->
  flattened = []
  flattened = flattened.concat.apply(flattened,array)
