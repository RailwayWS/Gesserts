import { Book, Footer } from './components/Book'
import { Hero } from './components/Hero'
import { Breakfast, Garden, Rates, Rooms, RouteStrip, Welcome } from './components/Sections'
import { Symbols } from './components/Symbols'
import { useReveal } from './hooks/reveal'

export default function App() {
  useReveal()

  return (
    <>
      <Symbols />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Hero />
      <main id="main">
        <RouteStrip />
        <Welcome />
        <Rooms />
        <Breakfast />
        <Garden />
        <Rates />
        <Book />
      </main>
      <Footer />
    </>
  )
}
