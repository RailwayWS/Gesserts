const PATHS: Record<string, string[]> = {
  arrow: ['M5 12h14', 'M13 6l6 6-6 6'],
  external: ['M7 17L17 7', 'M9 7h8v8'],
  wifi: ['M2 9a15 15 0 0 1 20 0', 'M5.5 12.5a10 10 0 0 1 13 0', 'M9 16a5 5 0 0 1 6 0', 'M12 19.5h.01'],
  shield: ['M12 3l8 3v6c0 4.5-3.4 8-8 9-4.6-1-8-4.5-8-9V6z', 'M8.5 12l2.5 2.5 4.5-5'],
  card: ['M4.5 5h15a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-15a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z', 'M2.5 10h19', 'M6 15h4'],
  laundry: ['M4 3h16v18H4z', 'M16.5 13a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0z', 'M7 6.5h2'],
  climate: ['M12 2v20', 'M4.9 6l14.2 12', 'M19.1 6L4.9 18'],
  fan: [
    'M12 10c0-4 1-7 4-7 2 0 2 3-2 7',
    'M14 12c4 0 7 1 7 4 0 2-3 2-7-2',
    'M12 14c0 4-1 7-4 7-2 0-2-3 2-7',
    'M10 12c-4 0-7-1-7-4 0-2 3-2 7 2',
  ],
  coffee: ['M5 9h12v5a5 5 0 0 1-5 5h-2a5 5 0 0 1-5-5z', 'M17 10h1.5a2.5 2.5 0 0 1 0 5H17', 'M8 2v3', 'M12 2v3'],
  dryer: ['M8 14a5 5 0 0 1 0-10h11a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-6.1a5 5 0 0 1-4.9 4z', 'M10 9a2 2 0 1 1-4 0 2 2 0 0 1 4 0z', 'M8.5 14l1.3 6.2a1 1 0 0 0 1 .8h1.4a1 1 0 0 0 1-1.2L12 12.6'],
  tv: ['M4.5 4h15a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-15a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z', 'M8 21h8'],
  family: ['M3 21h18', 'M5 21V10l7-6 7 6v11', 'M10 21v-6h4v6'],
}

export type IconName = keyof typeof PATHS

export function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  return (
    <svg
      className="icon"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {PATHS[name].map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  )
}
