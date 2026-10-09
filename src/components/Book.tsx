import { useId, useState, type FormEvent, type InputHTMLAttributes } from 'react'
import { contact } from '../content'
import { stagger } from '../hooks/reveal'
import { Icon } from './Icon'

type Fields = {
  name: string
  email: string
  phone: string
  arrival: string
  departure: string
  guests: string
  rooms: string
  message: string
}

type Errors = Partial<Record<keyof Fields, string>>

const EMPTY: Fields = { name: '', email: '', phone: '', arrival: '', departure: '', guests: '2', rooms: '1', message: '' }

function today() {
  const d = new Date()
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset())
  return d.toISOString().slice(0, 10)
}

function validate(f: Fields): Errors {
  const errors: Errors = {}
  if (!f.name.trim()) errors.name = 'Please tell us your name.'
  if (!/^\S+@\S+\.\S+$/.test(f.email.trim())) errors.email = 'Please enter an email address we can reply to.'
  if (!f.arrival) errors.arrival = 'Choose an arrival date.'
  else if (f.arrival < today()) errors.arrival = 'Arrival can’t be in the past.'
  if (!f.departure) errors.departure = 'Choose a departure date.'
  else if (f.arrival && f.departure <= f.arrival) errors.departure = 'Departure must be after arrival.'
  return errors
}

function mailtoFor(f: Fields) {
  const subject = `Booking enquiry: ${f.arrival} to ${f.departure}`
  const body = [
    `Name: ${f.name}`,
    `Email: ${f.email}`,
    f.phone && `Phone: ${f.phone}`,
    `Arrival: ${f.arrival}`,
    `Departure: ${f.departure}`,
    `Guests: ${f.guests}`,
    `Rooms: ${f.rooms}`,
    f.message && `\n${f.message}`,
  ]
    .filter(Boolean)
    .join('\n')
  return `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

function EnquiryForm() {
  const id = useId()
  const [fields, setFields] = useState<Fields>(EMPTY)
  const [errors, setErrors] = useState<Errors>({})
  const [sent, setSent] = useState(false)

  const set = (key: keyof Fields) => (e: { target: { value: string } }) => {
    setFields((f) => ({ ...f, [key]: e.target.value }))
    if (errors[key]) setErrors((errs) => ({ ...errs, [key]: undefined }))
  }

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const found = validate(fields)
    setErrors(found)
    const first = Object.keys(found)[0]
    if (first) {
      document.getElementById(`${id}-${first}`)?.focus()
      return
    }
    window.location.href = mailtoFor(fields)
    setSent(true)
  }

  const field = (key: keyof Fields, label: string, props: InputHTMLAttributes<HTMLInputElement>, wide = false) => (
    <div className={wide ? 'field field--wide' : 'field'}>
      <label htmlFor={`${id}-${key}`}>{label}</label>
      <input
        id={`${id}-${key}`}
        name={key}
        value={fields[key]}
        onChange={set(key)}
        aria-invalid={errors[key] ? true : undefined}
        aria-describedby={errors[key] ? `${id}-${key}-error` : undefined}
        {...props}
      />
      {errors[key] && (
        <p className="field__error" id={`${id}-${key}-error`}>
          {errors[key]}
        </p>
      )}
    </div>
  )

  return (
    <form className="enquiry reveal" style={stagger(1)} onSubmit={onSubmit} noValidate>
      <h3 className="enquiry__title">Send an enquiry</h3>
      {field('name', 'Your name', { type: 'text', autoComplete: 'name' }, true)}
      {field('email', 'Email', { type: 'email', autoComplete: 'email' })}
      {field('phone', 'Phone (optional)', { type: 'tel', autoComplete: 'tel' })}
      {field('arrival', 'Arrival', { type: 'date', min: today() })}
      {field('departure', 'Departure', { type: 'date', min: fields.arrival || today() })}
      <div className="field">
        <label htmlFor={`${id}-guests`}>Guests</label>
        <select id={`${id}-guests`} name="guests" value={fields.guests} onChange={set('guests')}>
          {['1', '2', '3', '4', '5+'].map((v) => (
            <option key={v}>{v}</option>
          ))}
        </select>
      </div>
      <div className="field">
        <label htmlFor={`${id}-rooms`}>Rooms</label>
        <select id={`${id}-rooms`} name="rooms" value={fields.rooms} onChange={set('rooms')}>
          {['1', '2', '3', '4', '5', '6', 'All 7'].map((v) => (
            <option key={v}>{v}</option>
          ))}
        </select>
      </div>
      <div className="field field--wide">
        <label htmlFor={`${id}-message`}>Anything we should know?</label>
        <textarea id={`${id}-message`} name="message" value={fields.message} onChange={set('message')} rows={4} />
      </div>
      <button type="submit" className="btn btn--primary enquiry__submit">
        Send enquiry
      </button>
      <p className="enquiry__status" role="status">
        {sent
          ? `Your email app should now open with the enquiry ready to send. If it doesn’t, write to ${contact.email}.`
          : 'This opens your email app with the details filled in. We reply personally.'}
      </p>
    </form>
  )
}

export function Book() {
  return (
    <section id="book" className="section section--night" aria-labelledby="book-title">
      <div className="wrap duo duo--book">
        <div className="duo__text stack-md reveal">
          <p className="eyebrow eyebrow--sun">Find us · Book</p>
          <h2 id="book-title" className="headline-lg">
            Your stop on the road south.
          </h2>
          <address className="address">
            {contact.address.map((line) => (
              <span key={line}>{line}</span>
            ))}
            <span className="address__gps">GPS {contact.gps}</span>
          </address>
          <ul className="contacts">
            {contact.phones.map((p) => (
              <li key={p.href}>
                <a href={p.href}>
                  <span>{p.label}</span>
                  <span>{p.display}</span>
                </a>
              </li>
            ))}
            <li>
              <a href={`mailto:${contact.email}`}>
                <span>Email</span>
                <span>{contact.email}</span>
              </a>
            </li>
          </ul>
          <a className="btn btn--ghost btn--start" href={contact.mapsUrl} target="_blank" rel="noreferrer">
            Open in Google Maps
            <Icon name="external" size={16} />
          </a>
        </div>
        <EnquiryForm />
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__inner">
        <span className="footer__brand">
          <svg width="22" height="28" viewBox="0 0 200 260" aria-hidden="true">
            <use href="#quiver-tree" />
          </svg>
          <span className="footer__name">Gesserts Guesthouse</span>
        </span>
        <span>Pension Gessert · Keetmanshoop, Namibia</span>
      </div>
    </footer>
  )
}
