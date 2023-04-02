function Calculations(data, total) {
  let x = data.map((item) => item);

  let y, i, found, z, unusedTemp;
  found = [];
  unusedTemp = [];
  for (y = 1; y <= x.length; y++) {
    z = k_combinations(x, y);
    for (i = 0; i < z.length; i++) {
      let item = z[i];
      const numb = item.map((value) => Number(value));
      const aaa = String(numb.reduce((x, y) => x + y));
      aaa === total ? found.push(item) : !item[1] && unusedTemp.push(item);
    }
  }
  const foundTemp = [];
  found.map((item) => foundTemp.push(...item));
  const unused = unusedTemp.filter((item) => !foundTemp.includes(...item));

  return [found, unused];
}

function k_combinations(x, y) {
  let i, j, comb, head, tailcombs;
  if (y > x.length || y <= 0) {
    return [];
  }
  if (y === x.length) {
    return [x];
  }
  if (y === 1) {
    comb = [];
    for (i = 0; i < x.length; i++) {
      comb.push([x[i]]);
    }
    return comb;
  }
  comb = [];
  for (i = 0; i < x.length - y + 1; i++) {
    head = x.slice(i, i + 1);
    tailcombs = k_combinations(x.slice(i + 1), y - 1);
    for (j = 0; j < tailcombs.length; j++) {
      comb.push(head.concat(tailcombs[j]));
    }
  }
  return comb;
}

export default Calculations;
