import { Link, useParams } from 'react-router-dom'
import { SERVICES, MAIN_SERVICES, photo, PHONE_DISPLAY, PHONE_LINK, WHATSAPP_NUMBER } from '../content.js'
import { ServiceIcon, WhatsAppIcon } from '../components/Icons.jsx'
import PageHead from '../components/PageHead.jsx'
import Reveal from '../components/Reveal.jsx'
import WaLink from '../components/WaLink.jsx'
import CtaBand from '../components/CtaBand.jsx'
import { Head, Timeline, Faq } from '../components/Blocks.jsx'
import NotFound from './NotFound.jsx'
import malik from '../assets/boat-malik.jpg'

const img = (s, w) => (s === 'malik' ? malik : photo(s, w))
const GROUP_ICONS = ['port', 'people', 'doc', 'gear']

export default function ServiceDetail() {
  const { slug } = useParams()
  const s = SERVICES.find((x) => x.slug === slug)
  if (!s) return <NotFound />
  const others = MAIN_SERVICES.filter((x) => x.slug !== slug)
  const phone = s.phone || PHONE_DISPLAY
  const phoneLink = s.phoneLink || PHONE_LINK
  const [lead, ...rest] = s.intro.split(/(?<=\.)\s/)

  return (
    <>
      <PageHead variant="photo" image={s.banner} eyebrow={s.minor ? 'Marine support' : (s.groups ? 'Our core service' : 'Core service')} title={s.title} lead={s.short}
        crumbs={[{ label: 'Services', to: '/services' }, { label: s.title }]}>
        <div className="btns">
          <WaLink className="btn btn--amber" message={s.wa} number={s.number}><WhatsAppIcon />{s.cta}</WaLink>
          <a className="btn btn--ghost" href={phoneLink}>Call {phone}</a>
        </div>
      </PageHead>

      <section className="sec">
        <div className="wrap overview">
          <Reveal className="overview__text">
            <p className="eyebrow">Overview</p>
            <p className="intro__big">{lead}</p>
            {rest.length > 0 && <p>{rest.join(' ')}</p>}
            {s.more && <p>{s.more}</p>}
            {s.who && (
              <div className="who-row">
                <h3>Who it's for</h3>
                <ul className="chips">{s.who.map((w) => <li key={w}>{w}</li>)}</ul>
              </div>
            )}
          </Reveal>
          <Reveal as="aside" className="request" delay={120}>
            <h3>What to send us</h3>
            <p>Put these in your message and we can confirm faster.</p>
            <ol>{s.send.map((x) => <li key={x}>{x}</li>)}</ol>
            <WaLink className="btn btn--wa btn--block" message={s.wa} number={s.number}><WhatsAppIcon />Send on WhatsApp</WaLink>
            <a className="btn btn--ghost btn--block" href={phoneLink}>Call {phone}</a>
          </Reveal>
        </div>
      </section>

      <section className="sec sec--mist">
        <div className="wrap">
          {s.groups ? (
            <>
              <Head split eyebrow="What's included" title="The full agency scope."
                lead="Grouped the way a port call runs. Tell us which parts your call needs and we take care of them." />
              <div className="groups">
                {s.groups.map((g, i) => (
                  <Reveal className="group" key={g.title} delay={(i % 2) * 100}>
                    <div className="group__head">
                      <span className="group__icon"><ServiceIcon id={GROUP_ICONS[i]} /></span>
                      <h3>{g.title}</h3><small>{g.items.length} services</small>
                    </div>
                    <ul>{g.items.map((x) => <li key={x.title}><strong>{x.title}</strong><span>{x.text}</span></li>)}</ul>
                  </Reveal>
                ))}
              </div>
            </>
          ) : (
            <>
              <Head eyebrow="What's included" title={`${s.title}, done properly.`} />
              <div className="inc">
                {s.includes.map((x, i) => (
                  <Reveal className="inc__item" key={x.title} delay={(i % 3) * 90}>
                    <span className="inc__big" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                    <span className="inc__icon"><ServiceIcon id={s.icon} /></span>
                    <h3>{x.title}</h3><p>{x.text}</p>
                  </Reveal>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <section className="urgent">
        <div className="wrap urgent__in">
          <p><strong>{s.urgent}</strong> {s.minor ? 'Our crews work 24 hours. Call us or send a WhatsApp message.' : 'Contact our desk by phone or WhatsApp.'}</p>
          <div className="btns">
            <a className="btn btn--navy" href={phoneLink}>Call {phone}</a>
            <WaLink className="btn btn--outline" message={s.wa} number={s.number}>WhatsApp us</WaLink>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <Head split eyebrow="How it works" title="From first message to done."
            lead="One contact follows the job from start to finish and keeps you updated." />
          <Timeline steps={s.process} />
        </div>
      </section>

      <section className="sec sec--mist">
        <div className="wrap faqs">
          <Reveal className="faqs__side">
            <p className="eyebrow">Quick answers</p>
            <h2>Asked about {s.title.toLowerCase()}.</h2>
            <p className="lead">Not covered here? Ask us directly.</p>
            <Link className="arrow" to="/ports-and-faq">All questions <ServiceIcon id="arrow" /></Link>
          </Reveal>
          <Reveal delay={100}><Faq items={s.faq} /></Reveal>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <Head eyebrow="More services" title={s.minor ? 'Our core services.' : 'Our other core services.'} />
          <div className="core more">
            {others.map((o, i) => (
              <Reveal as={Link} className="core__card" to={`/services/${o.slug}`} key={o.slug} delay={i * 100}>
                <img src={img(o.tile, 1000)} alt="" loading="lazy" decoding="async" />
                <div className="core__top"><span className="core__num">{o.kicker}</span></div>
                <div className="core__body">
                  <span className="core__icon"><ServiceIcon id={o.icon} /></span>
                  <h3>{o.title}</h3><p>{o.short}</p>
                  <span className="arrow">Learn more <ServiceIcon id="arrow" /></span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CtaBand title={s.urgent} message={s.wa} number={s.number || WHATSAPP_NUMBER} phone={phone} phoneLink={phoneLink} image={s.band}
        text={`Send the details on WhatsApp or call us, and we confirm what we can arrange for your ship.`} />
    </>
  )
}
