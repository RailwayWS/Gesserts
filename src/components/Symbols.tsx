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
            d="M49 97 C49 90 49.5 84 50 78 C44 81 36 82 28 78 C14 71 8 56 11 41 C14 24 30 10 50 4 C70 10 87 24 89 41 C92 56 86 71 72 78 C64 82 56 81 51 78 C51.5 84 51.5 90 51 97 Z"
            fill="currentColor"
          />
          <path
            d="M50 78 L50 12 M50 64 C41 58 31 56 19 58 M50 64 C59 58 69 56 81 58 M50 47 C43 41 34 37 22 36 M50 47 C57 41 66 37 78 36 M50 30 C46 26 41 22 35 19 M50 30 C54 26 59 22 65 19"
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
