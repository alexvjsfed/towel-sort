
// You should implement your task here.

module.exports = mx => !mx ? [] : mx.map((el, idx) => idx % 2 === 0 ? el : el.reverse()).flat()
