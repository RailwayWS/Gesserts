import breakfastRoom from './assets/photos/breakfast-room.jpg'
import breakfastTables from './assets/photos/breakfast-tables.jpg'
import cupcakes from './assets/photos/cupcakes.jpg'
import gardenGazebo from './assets/photos/garden-gazebo.jpg'
import gardenPathPool from './assets/photos/garden-path-pool.jpg'
import gardenSteps from './assets/photos/garden-steps.jpg'
import patioBench from './assets/photos/patio-bench.jpg'
import patioTables from './assets/photos/patio-tables.jpg'
import poolBreakfastRoom from './assets/photos/pool-breakfast-room.jpg'
import poolChairs from './assets/photos/pool-chairs.jpg'
import roomGreen from './assets/photos/room-green.jpg'
import roomIronBeds from './assets/photos/room-iron-beds.jpg'
import roomPlum from './assets/photos/room-plum.jpg'
import roomRoses from './assets/photos/room-roses.jpg'
import shutteredWindows from './assets/photos/shuttered-windows.jpg'
import tableFlowers from './assets/photos/table-flowers.jpg'

export type Photo = { src: string; alt: string }

export const contact = {
  email: 'gesserts1@gmail.com',
  address: ['138 13th Street, Westdene', 'Keetmanshoop, Namibia'],
  gps: 'S 26°34.610′ E 18°07.395′',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=-26.57683,18.12325',
  phones: [
    { label: 'Guesthouse', display: '+264 63 223 892', href: 'tel:+26463223892' },
    { label: 'Reinette', display: '+264 81 427 3893', href: 'tel:+264814273893' },
    { label: 'Johann', display: '+264 81 149 3384', href: 'tel:+264811493384' },
  ],
}

export const rating = { score: '4.3', count: 151 }

export const heroPhotos = {
  main: { src: poolBreakfastRoom, alt: 'The swimming pool in front of the breakfast room windows' },
  inset: { src: breakfastTables, alt: 'The breakfast room with tables laid in orange cloths' },
}

export const destinations = [
  { km: 25, name: 'Quiver Tree Forest', note: 'Kokerboom woods at dusk' },
  { km: 40, name: 'Mesosaurus Fossil Farm', note: 'Fossils older than the continents' },
  { km: 170, name: 'Fish River Canyon', note: 'Africa’s largest canyon' },
  { km: 300, name: 'Lüderitz', note: 'The coast, via the desert road' },
]

export const welcomePhotos = {
  main: { src: gardenSteps, alt: 'Garden steps up to the breakfast room, framed by creepers' },
  inset: { src: shutteredWindows, alt: 'Wooden shutters on the breakfast room windows' },
}

export const roomPhotos: Photo[] = [
  { src: roomRoses, alt: 'Twin beds with rose-print covers and a dressing table' },
  { src: roomPlum, alt: 'Twin beds dressed in white and plum' },
  { src: roomIronBeds, alt: 'Iron bedsteads with embroidered linen' },
  { src: roomGreen, alt: 'Twin beds with green cushions and a corner mirror' },
]

export const amenities = [
  { icon: 'climate', title: 'Air conditioning & heaters', note: 'Cool in summer, warm on desert nights' },
  { icon: 'fan', title: 'Ceiling fans', note: 'In every room' },
  { icon: 'coffee', title: 'Coffee station & fridge', note: 'Make yourself at home' },
  { icon: 'dryer', title: 'Hairdryer', note: 'Clean linen and towels' },
  { icon: 'tv', title: 'TV in four rooms', note: 'Ask for one when booking' },
  { icon: 'family', title: 'Family room', note: 'Three to four beds' },
] as const

export const breakfastPhotos = {
  main: { src: breakfastRoom, alt: 'Breakfast room looking out onto the pool' },
  tall: { src: cupcakes, alt: 'A stand of iced cupcakes' },
  small: { src: tableFlowers, alt: 'Fresh flowers and teacups on a laid table' },
}

export const breakfastItems = ['Fresh fruit', 'Breads & jam', 'Cheese', 'Granola & yoghurt', 'Eggs to order', 'Coffee']

export const gardenPhotos: Photo[] = [
  { src: gardenPathPool, alt: 'Stone path through potted plants to the pool' },
  { src: gardenGazebo, alt: 'Lawn and gazebo under the trees with hanging lanterns' },
  { src: poolChairs, alt: 'Two white chairs with bright cushions at the pool’s edge' },
  { src: patioTables, alt: 'Shaded patio with café tables' },
  { src: patioBench, alt: 'Bench with striped cushions outside a guest room' },
]

export const roomRates = [
  { label: 'Single', price: '1,600' },
  { label: 'Double', price: '2,450' },
  { label: 'Triple', price: '2,700' },
]

export const childRates = [
  { label: '4 – 6 years', price: '450' },
  { label: '7 – 10 years', price: '600' },
  { label: '11 – 16 years', price: '700' },
]

export const houseNotes = [
  { label: 'Check-in', value: '14:00 – 19:00', big: true },
  { label: 'Check-out', value: 'By 10:00', big: true },
  { label: 'Laundry', value: 'In before 12:00, back in your room after breakfast. Extra cost.', big: false },
  { label: 'Group dinners', value: 'Available when your group books all seven rooms.', big: false },
]
