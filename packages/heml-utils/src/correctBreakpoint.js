const breakpointRegex = /^(\d+)(cm|mm|Q|in|pc|pt|px|em|ex|ch|rem|lh|vw|vh|vmin|vmax)$/

export default function (breakpoint) {
  const match = breakpoint.match(breakpointRegex)
  if (!match || match.length !== 3) {
    throw new SyntaxError('invalid breakpoint: ' + breakpoint)
  }
  return '' + match[1] + match[2]
}
