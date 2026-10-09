const ROSETTE =
  '0,-17.6 2,-7 9.5,-15.9 5.6,-5.6 17.2,-11 8.1,-3.1 21.4,-3.9 9,0 21.4,3.9 8.1,3.1 17.2,11 5.6,5.6 9.5,15.9 2,7 0,17.6 -2,7 -9.5,15.9 -5.6,5.6 -17.2,11 -8.1,3.1 -21.4,3.9 -9,0 -21.4,-3.9 -8.1,-3.1 -17.2,-11 -5.6,-5.6 -9.5,-15.9 -2,-7'

const CROWNS = [
  [46, 64],
  [78, 60],
  [122, 60],
  [158, 68],
]

/** Shared SVG symbols: the quiver tree (kokerboom) and a wild fig leaf. */
export function Symbols() {
  return (
    <svg width="0" height="0" className="sr-only" aria-hidden="true" focusable="false">
      <defs>
        <symbol id="quiver-tree" viewBox="0 0 200 260">
          <path d="M84 260 C90 222 91 178 95 142 L105 142 C109 178 110 222 116 260 Z" fill="currentColor" />
          <path
            d="M100 148 C88 130 76 118 66 104 M100 148 C112 130 124 118 134 104 M66 104 C58 94 52 84 46 72 M66 104 C70 92 74 82 78 68 M134 104 C130 92 126 82 122 68 M134 104 C142 94 150 86 158 76"
            fill="none"
            stroke="currentColor"
            strokeWidth="9"
            strokeLinecap="round"
          />
          {CROWNS.map(([x, y]) => (
            <polygon key={x} transform={`translate(${x} ${y})`} points={ROSETTE} fill="currentColor" />
          ))}
        </symbol>
        <symbol id="fig-leaf" viewBox="0 0 100 100">
          <path
            d="M50 97 C49 84 47 74 45 66 C31 72 15 68 7 54 C19 51 29 47 36 41 C23 35 14 21 18 6 C30 12 40 22 46 33 C46 19 48 9 50 2 C52 9 54 19 54 33 C60 22 70 12 82 6 C86 21 77 35 64 41 C71 47 81 51 93 54 C85 68 69 72 55 66 C53 74 51 84 50 97 Z"
            fill="currentColor"
          />
          <path
            d="M50 92 L50 20 M50 52 L26 30 M50 52 L74 30 M50 60 L20 56 M50 60 L80 56"
            fill="none"
            stroke="#000"
            strokeOpacity="0.18"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </symbol>
      </defs>
    </svg>
  )
}
