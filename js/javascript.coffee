range = (first,last) ->
  numArray = []
  for i in [first..last]
    numArray.push(i)
  return numArray

flatten = (array) ->
  flattened = []
  flattened = flattened.concat.apply(flattened,array)

warYears = flatten([1066, range(1109,1113), range(1116,1119), range(1123,1135), range(1159,1189), range(1202,1204), range(1213,1214), range(1242,1243), range(1294,1298), range(1300,1303), range(1337,1453), 1475, 1488, range(1489,1492), range(1510,1513), range(1521,1526), range(1542,1546), range(1549,1550), range(1557, 1560), range(1589,1593), range(1627,1628), range(1666,1667), range(1689, 1697), range(1702, 1712), range(1744,1748), range(1749, 1754), range(1755, 1763), range(1779, 1783), range(1792, 1802), range(1803,1814), 1815])

atWar = (year) ->
  year = parseInt(year)
  war = $.inArray(year, warYears)
  showWarMessage(war, year)
