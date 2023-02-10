const angloFrenchWarOne: string = 'Anglo-French War';
const firstBaronsWar: string = 'French invasion of England, part of the First Barons War';
const saintongeWar: string = 'Saintonge War';
const angloFrenchWarTwo: string = 'Anglo-French War';
const hundredYearsWar: string = 'Hundred Years\' War';
const angloFrenchWarThree: string = 'Anglo-French War, part of the Italian War of 1494-98';
const angloFrenchWarFour: string = 'Anglo-French War, part of the War of the League of Cambrai';
const angloFrenchWarFive: string = 'Anglo-French War, part of the Italian War of 1521–26';
const angloFrenchWarSix: string = 'Anglo-French War, part of the Italian War of 1542–46';
const angloFrenchWarSeven: string = 'Anglo-French War, part of the Italian War of 1551–59';
const angloFrenchWarEight: string = 'Anglo-French War, part of the Huguenot rebellions';
const angloFrenchWarNine: string = 'Anglo-French War, a minor corollary of the Second Anglo-Dutch War';
const angloFrenchWarTen: string = 'Anglo-French War, part of the Nine Years\' War';
const angloFrenchWarEleven: string = 'Anglo-French War, part of the War of the Spanish Succession';
const angloFrenchWarTwelve: string = 'Anglo-French War, part of the War of the Austrian Succession';
const angloFrenchWarThirteen: string = 'Anglo-French War, part of the Seven Years\' War';
const angloFrenchWarFourteen: string = 'Anglo-French War, part the American Revolutionary War';
const angloFrenchWarFifteen: string = 'Anglo-French War, part of the French Revolutionary Wars';
const overlapOne: string = 'Anglo-French War, part of the French Revolutionary Wars and the Hatian Rebellion';
const overlapTwo: string = 'Anglo-French War, part of the Haitian Revolution and part of the Napoleonic Wars';
// const angloFrenchWarSixteen: string = '';
const angloFrenchWarSeventeen: string = 'Anglo-French War, part of the Napoleonic Wars (Peninsular War)';
const angloFrenchWarEighteen: string = 'Anglo-French War, part of the Napoleonic Wars (Waterloo Campaign)';

type WarYearsType = [[number, number], string][];

export const warYears: WarYearsType = [
  [[1213, 1214], angloFrenchWarOne],
  [[1215, 1217], firstBaronsWar],
  [[1242, 1243], saintongeWar],
  [[1294, 1303], angloFrenchWarTwo],
  [[1337, 1453], hundredYearsWar],
  [[1496, 1498], angloFrenchWarThree],
  [[1512, 1514], angloFrenchWarFour],
  [[1522, 1526], angloFrenchWarFive],
  [[1542, 1546], angloFrenchWarSix],
  [[1557, 1559], angloFrenchWarSeven],
  [[1629, 1629], angloFrenchWarEight],
  [[1666, 1667], angloFrenchWarNine],
  [[1689, 1697], angloFrenchWarTen],
  [[1702, 1713], angloFrenchWarEleven],
  [[1744, 1748], angloFrenchWarTwelve],
  [[1756, 1763], angloFrenchWarThirteen],
  [[1778, 1783], angloFrenchWarFourteen],
  [[1793, 1801], angloFrenchWarFifteen],
  [[1802, 1802], overlapOne],
  [[1803, 1804], overlapTwo],
  [[1805, 1814], angloFrenchWarSeventeen],
  [[1815, 1815], angloFrenchWarEighteen],
];
