import { useEffect, useRef } from 'react'

/*
 * One shared scroll loop for every parallax layer on the page.
 * Layers write `transform` directly on their own element (no React state,
 * no inherited CSS variables) so a scroll frame costs one rect read per
 * view-linked layer and one style write per layer.
 */

type Mode = 'page' | 'view'

type Layer = {
  el: HTMLElement
  shift: number
  mode: Mode
}

/** Page-linked layers finish their travel after this much scroll. */
const PAGE_RANGE = 900

const layers = new Set<Layer>()
let frame = 0
let listening = false

const reducedMotion =
  typeof window !== 'undefined' ? window.matchMedia('(prefers-reduced-motion: reduce)') : null

function progressFor(layer: Layer, viewportH: number): number {
  if (layer.mode === 'page') {
    return Math.min(Math.max(window.scrollY / PAGE_RANGE, 0), 1)
  }
  // Measure the untransformed parent so the layer's own offset can't feed back into itself.
  const anchor = layer.el.parentElement ?? layer.el
  const rect = anchor.getBoundingClientRect()
  const p = (viewportH - rect.top) / (viewportH + rect.height)
  return Math.min(Math.max(p, 0), 1)
}

function update() {
  frame = 0
  const viewportH = window.innerHeight
  for (const layer of layers) {
    const y = layer.shift * progressFor(layer, viewportH)
    layer.el.style.transform = `translate3d(0, ${y.toFixed(1)}px, 0)`
  }
}

function schedule() {
  if (!frame) frame = requestAnimationFrame(update)
}

function startListening() {
  if (listening) return
  listening = true
  window.addEventListener('scroll', schedule, { passive: true })
  window.addEventListener('resize', schedule)
}

function stopListening() {
  if (!listening) return
  listening = false
  window.removeEventListener('scroll', schedule)
  window.removeEventListener('resize', schedule)
  if (frame) cancelAnimationFrame(frame)
  frame = 0
}

/**
 * Moves an element vertically as the page scrolls.
 * `shift` is the total travel in px: positive sinks (slower than the page),
 * negative rises (faster than the page).
 * `page` mode maps the first 900px of scroll; `view` mode maps the time the
 * element's parent spends crossing the viewport.
 */
export function useParallax<T extends HTMLElement>(shift: number, mode: Mode = 'page') {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el || !reducedMotion) return

    const layer: Layer = { el, shift, mode }

    const attach = () => {
      if (reducedMotion.matches) {
        layers.delete(layer)
        el.style.transform = ''
        if (layers.size === 0) stopListening()
        return
      }
      layers.add(layer)
      startListening()
      schedule()
    }

    attach()
    reducedMotion.addEventListener('change', attach)

    return () => {
      reducedMotion.removeEventListener('change', attach)
      layers.delete(layer)
      el.style.transform = ''
      if (layers.size === 0) stopListening()
    }
  }, [shift, mode])

  return ref
}
