import {
  amenities,
  breakfastItems,
  breakfastPhotos,
  childRates,
  destinations,
  gardenPhotos,
  houseNotes,
  roomPhotos,
  roomRates,
  welcomePhotos,
} from '../content'
import { Icon, type IconName } from './Icon'
import { Leaf, type LeafSpec } from './Leaf'
import { Parallax } from './Parallax'

export function RouteStrip() {
  return (
    <section className="section section--night route" aria-labelledby="route-title">
      <div className="wrap stack-lg">
        <div className="split-head">
          <h2 id="route-title" className="headline-md">
            Centrally placed on the road south.
          </h2>
          <p className="muted-dark">The town centre and its restaurants are a five-minute drive away.</p>
        </div>
        <ol className="route__list">
          {destinations.map((d) => (
            <li key={d.name} className="route__stop">
              <span className="route__km">
                {d.km}
                <span> km</span>
              </span>
              <span className="route__name">{d.name}</span>
              <span className="route__note">{d.note}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

const WELCOME_FEATURES: { icon: IconName; label: string }[] = [
  { icon: 'wifi', label: 'Free high-speed WiFi' },
  { icon: 'shield', label: 'Safe, gated parking' },
  { icon: 'card', label: 'Cards accepted' },
  { icon: 'laundry', label: 'Laundry service' },
]

export function Welcome() {
  return (
    <section className="section section--sand" aria-labelledby="welcome-title">
      <div className="wrap duo">
        <div className="duo__text stack-md">
          <p className="eyebrow">Welcome</p>
          <h2 id="welcome-title" className="headline-lg">
            A peaceful, homely place with tranquil surroundings.
          </h2>
          <p className="body-lg body-soft">
            Johann and Reinette welcome you to Pension Gessert in quiet Westdene. Every room opens onto the patio or the
            garden, where a huge wild fig keeps everything in shade through the heat of the day.
          </p>
          <ul className="features">
            {WELCOME_FEATURES.map((f) => (
              <li key={f.label}>
                <Icon name={f.icon} />
                {f.label}
              </li>
            ))}
          </ul>
        </div>
        <div className="duo__media collage collage--welcome">
          <figure className="frame collage__main">
            <img src={welcomePhotos.main.src} alt={welcomePhotos.main.alt} loading="lazy" />
          </figure>
          <Parallax shift={-60} mode="view" className="collage__inset-wrap">
            <figure className="frame frame--bordered collage__inset">
              <img src={welcomePhotos.inset.src} alt={welcomePhotos.inset.alt} loading="lazy" />
            </figure>
          </Parallax>
        </div>
      </div>
    </section>
  )
}

export function Rooms() {
  return (
    <section id="rooms" className="section section--sand section--flush-top" aria-labelledby="rooms-title">
      <div className="wrap stack-xl">
        <div className="split-head">
          <div className="stack-sm">
            <p className="eyebrow">The rooms</p>
            <h2 id="rooms-title" className="headline-lg">
              Seven rooms, each decorated differently.
            </h2>
          </div>
          <p className="body-soft">
            Six twin rooms and one family room for three to four guests. All en-suite, all opening onto the patio or
            garden.
          </p>
        </div>
        <ul className="rooms__grid">
          {roomPhotos.map((p) => (
            <li key={p.src} className="frame rooms__photo">
              <img src={p.src} alt={p.alt} loading="lazy" />
            </li>
          ))}
        </ul>
        <ul className="amenities">
          {amenities.map((a) => (
            <li key={a.title} className="amenity">
              <Icon name={a.icon} size={22} />
              <div>
                <p className="amenity__title">{a.title}</p>
                <p className="amenity__note">{a.note}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function Breakfast() {
  return (
    <section id="breakfast" className="section section--dusk" aria-labelledby="breakfast-title">
      <div className="wrap duo">
        <div className="duo__media collage collage--breakfast">
          <figure className="frame collage__main">
            <img src={breakfastPhotos.main.src} alt={breakfastPhotos.main.alt} loading="lazy" />
          </figure>
          <Parallax shift={-70} mode="view" className="collage__tall-wrap">
            <figure className="frame frame--bordered collage__tall">
              <img src={breakfastPhotos.tall.src} alt={breakfastPhotos.tall.alt} loading="lazy" />
            </figure>
          </Parallax>
          <Parallax shift={-30} mode="view" className="collage__small-wrap">
            <figure className="frame frame--bordered collage__small">
              <img src={breakfastPhotos.small.src} alt={breakfastPhotos.small.alt} loading="lazy" />
            </figure>
          </Parallax>
        </div>
        <div className="duo__text stack-md">
          <p className="eyebrow eyebrow--sun">Breakfast · 07:00 – 09:30</p>
          <h2 id="breakfast-title" className="headline-lg">
            We are well known for our breakfast.
          </h2>
          <p className="body-lg body-soft-dark">
            A comprehensive spread every morning, with coffee. Leaving before seven? We will pack you a take-away
            breakfast for the road.
          </p>
          <ul className="chips" aria-label="On the breakfast table">
            {breakfastItems.map((item) => (
              <li key={item} className="chip">
                {item}
              </li>
            ))}
          </ul>
          <p className="muted-dark">
            Dinner is served only when a group books all seven rooms. Otherwise, several restaurants are five minutes
            away in town.
          </p>
        </div>
      </div>
    </section>
  )
}

const GARDEN_LEAVES: LeafSpec[] = [
  { right: '6%', top: '80px', size: 120, tone: 'shade', duration: 14, from: 20, to: 32, dx: 10, dy: -12 },
  { left: '-30px', bottom: '120px', size: 180, tone: 'shade', duration: 16, delay: -5, from: -30, to: -18, dx: 12, dy: -10 },
]

export function Garden() {
  return (
    <section id="garden" className="section section--fig" aria-labelledby="garden-title">
      <div className="garden__leaves" aria-hidden="true">
        <Parallax shift={-160} mode="view" className="landscape__layer">
          {GARDEN_LEAVES.map((leaf) => (
            <Leaf key={`${leaf.left ?? leaf.right}`} spec={leaf} />
          ))}
        </Parallax>
      </div>
      <div className="wrap stack-xl">
        <div className="split-head">
          <div className="stack-sm">
            <p className="eyebrow eyebrow--pollen">Garden &amp; pool</p>
            <h2 id="garden-title" className="headline-lg">
              Under the fig, beside the pool.
            </h2>
          </div>
          <p className="body-soft-fig">
            The leafy garden sits in the shade of a huge wild fig. The pool is there to refresh you after the long
            drive.
          </p>
        </div>
        <ul className="garden__grid">
          {gardenPhotos.map((p, i) => (
            <li key={p.src} className={i === 0 ? 'frame garden__photo garden__photo--tall' : 'frame garden__photo'}>
              <img src={p.src} alt={p.alt} loading="lazy" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function RateList({ title, rows }: { title: string; rows: { label: string; price: string }[] }) {
  return (
    <div>
      <h3 className="rates__heading">{title}</h3>
      <dl className="rates__list">
        {rows.map((r) => (
          <div key={r.label} className="rate">
            <dt>{r.label}</dt>
            <dd>
              <span className="rate__currency">N$</span> {r.price}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  )
}

export function Rates() {
  return (
    <section id="rates" className="section section--sand" aria-labelledby="rates-title">
      <div className="wrap duo duo--rates">
        <div className="stack-md rates__intro">
          <p className="eyebrow">Rates</p>
          <h2 id="rates-title" className="headline-lg">
            Simple rates, breakfast included.
          </h2>
          <p className="body-soft">Per room, per night, in Namibian dollars. Please confirm current rates when you book.</p>
        </div>
        <div className="rates__tables">
          <RateList title="Rooms" rows={roomRates} />
          <RateList title="Children sharing" rows={childRates} />
        </div>
      </div>
      <ul className="wrap notes">
        {houseNotes.map((n) => (
          <li key={n.label} className="note">
            <span className="note__label">{n.label}</span>
            <span className={n.big ? 'note__value note__value--big' : 'note__value'}>{n.value}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
