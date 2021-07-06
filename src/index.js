
exports.min = function min (array) {
  if (array == undefined || array.length == 0) {
    return 0;
  } else {
    return array.sort( (a, b) => a - b )[0];
  }

}

exports.max = function max (array) {
  if (array == undefined || array.length == 0) {
    return 0;
  } else {
    return array.sort( (a, b) => a - b )[array.length - 1];
  }
}

exports.avg = function avg (array) {
  if (array == undefined || array.length == 0) {
    return 0;
  } else {
    return array.reduce((sum, current) => sum + current, 0)/array.length;
  }
}