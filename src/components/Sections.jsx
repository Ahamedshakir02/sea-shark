import { PHONE_DISPLAY, PHONE_LINK, SERVICES, STATS, VALUES, CONTACTS, HOURS } from '../content.js'
import { ServiceIcon } from './Icons.jsx'
import WaLink from './WaLink.jsx'
import malik from '../assets/boat-malik.jpg'

const Tag = ({ dark, children }) => <p className={`tag${dark ? ' tag--dark' : ''}`}>{children}</p>

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__shade" />
      <div className="wrap hero__in">
        <Tag>[ Khorfakkan · Fujairah · UAE ]</Tag>
        <h1>Fresh water, crew boats and ship agency on the UAE east coast.</h1>
        <p className="hero__lead">
          We run our own water barge, Malik. Send us your vessel name and what you need on WhatsApp, and we take it from there.
        </p>
        <div className="hero__cta">
          <WaLink className="pill pill--light" message="Hello Sea Shark, I need help with a vessel. Vessel name: ... Port: ...">
            <span className="dot" />Chat on WhatsApp
          </WaLink>
          <a className="pill pill--ghost" href={PHONE_LINK}>Call {PHONE_DISPLAY}</a>
        </div>
      </div>
      <div className="wrap hero__steps">
        {SERVICES.map((s, i) => (
          <a key={s.id} href="#services"><span>0{i + 1}</span>{s.title}</a>
        ))}
      </div>
    </section>
  )
}

export function Intro() {
  return (
    <section className="intro">
      <div className="wrap intro__in">
        <p className="intro__big">
          Our own barge, three services we know inside out, and <span>a quick reply</span> when a ship needs us.
        </p>
        <dl className="stats">
          {STATS.map((s) => (
            <div key={s.label}><dt>{s.label}</dt><dd>{s.value}</dd></div>
          ))}
        </dl>
      </div>
    </section>
  )
}

export function Services() {
  return (
    <section className="section" id="services">
      <div className="wrap">
        <div className="head"><Tag dark>[ What we do ]</Tag><h2>Services</h2></div>
        <div className="cards">
          {SERVICES.map((s) => (
            <article className="card" key={s.id}>
              <div className="card__icon"><ServiceIcon id={s.id} /></div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <WaLink className="card__link" message={s.wa}>{s.cta} <span>&rarr;</span></WaLink>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Vessel() {
  return (
    <section className="section section--tint" id="fleet">
      <div className="wrap">
        <div className="head head--row">
          <div><Tag dark>[ Our vessel ]</Tag><h2>Our own barge, not hired.</h2></div>
          <p className="head__note">We own and run Malik ourselves, so we control the schedule, the upkeep and the standard of every delivery.</p>
        </div>
        <div className="fleet fleet--one">
          <figure className="boat">
            <div className="boat__img">
              <img src={malik} alt="Malik, our fresh water barge, alongside in port" loading="lazy" width="1424" height="612" />
            </div>
          </figure>
          <div className="boat__info">
            <Tag dark>Fresh water barge</Tag>
            <h3>Malik</h3>
            <p>Our barge delivers clean drinking water to ships at anchor or alongside, at Khorfakkan and Fujairah.</p>
            <WaLink className="card__link" message="Hello Sea Shark, I need fresh water from Malik. Vessel: ... Location: ... Quantity: ...">
              Order water on WhatsApp <span>&rarr;</span>
            </WaLink>
          </div>
        </div>
      </div>
    </section>
  )
}

export function About() {
  return (
    <section className="section" id="about">
      <div className="wrap about">
        <div><Tag dark>[ About us ]</Tag><h2>Young company, experienced hands.</h2></div>
        <div className="about__text">
          <p>
            Sea Shark Shipping Services LLC was founded in 2023. Our founders bring more than 20 years of combined marine experience.
            We work from Khorfakkan Port and Fujairah on the UAE east coast, with offices in Sharjah and Dubai.
          </p>
          <ul className="chips">{VALUES.map((v) => <li key={v}>{v}</li>)}</ul>
        </div>
      </div>
    </section>
  )
}

export function CtaBand() {
  return (
    <section className="band">
      <div className="wrap">
        <div className="band__box">
          <h2>Need water or a crew boat today?</h2>
          <p>Send us your vessel name and location on WhatsApp, and we'll sort it out.</p>
          <WaLink className="pill pill--light" message="Hello Sea Shark, I have an enquiry.">
            <span className="dot" />Message us on WhatsApp
          </WaLink>
        </div>
      </div>
    </section>
  )
}

export function Contact() {
  return (
    <section className="section" id="contact">
      <div className="wrap">
        <div className="head"><Tag dark>[ Contact ]</Tag><h2>Get in touch</h2></div>
        <div className="contact">
          {CONTACTS.map((c) => (
            <div className="box" key={c.label}>
              <p>{c.label}</p>
              <a href={c.href} {...(c.external ? { target: '_blank', rel: 'noopener' } : {})}>{c.text}</a>
            </div>
          ))}
          <div className="box box--wide"><p>Office hours (Sharjah)</p><span>{HOURS}</span></div>
        </div>
      </div>
    </section>
  )
}
