
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix) return [];
  return matrix.reduce((accumulator, currentValue, index) => {
    if (index % 2 === 0)
      accumulator.push(...currentValue)
    else
      accumulator.push(...currentValue.reverse())
    return accumulator
  }, [])
}
