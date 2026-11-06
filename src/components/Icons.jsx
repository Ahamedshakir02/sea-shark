const stroke = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.6 }

export const LogoMark = () => (
  <svg viewBox="0 0 40 40" aria-hidden="true">
    <path d="M4 27c5 0 7-3 10-3s5 3 10 3 7-3 12-3" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
    <path d="M14 22 22 6l4 16z" fill="currentColor" />
  </svg>
)

export const ServiceIcon = ({ id }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    {id === 'water' && <path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z" {...stroke} />}
    {id === 'crew' && <path d="M3 15h18l-2.5 4h-13zM6 15V9h9l3 6M9 9V6h4v3" {...stroke} strokeLinejoin="round" />}
    {id === 'check' && <path d="M5 12.5l4.2 4L19 7" {...stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />}
    {id === 'arrow' && <path d="M5 12h14M13 6l6 6-6 6" {...stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />}
    {id === 'pin' && <><path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z" {...stroke} /><circle cx="12" cy="9.5" r="2.4" {...stroke} /></>}
    {id === 'survey' && <><path d="M9 4h6v3H9zM7 5.5H5.5V21h13V5.5H17" {...stroke} strokeLinejoin="round" /><path d="M8.5 12l2 2 4-4.5M8.5 17.5h7" {...stroke} strokeLinecap="round" strokeLinejoin="round" /></>}
    {id === 'diver' && <><path d="M3 9.5c0-1.4 1.1-2.5 2.5-2.5h13c1.4 0 2.5 1.1 2.5 2.5v2c0 1.4-1.1 2.5-2.5 2.5h-3l-1.6-1.8a2.5 2.5 0 0 0-3.8 0L8.5 14h-3A2.5 2.5 0 0 1 3 11.5z" {...stroke} strokeLinejoin="round" /><path d="M4 19c2 0 2-1.2 4-1.2s2 1.2 4 1.2 2-1.2 4-1.2 2 1.2 4 1.2" {...stroke} strokeLinecap="round" /></>}
    {id === 'port' && <><path d="M3 20h18M5 20V9l4-3v14M9 11h10v9M12 14h1.5M15.5 14H17M12 17h1.5M15.5 17H17" {...stroke} strokeLinecap="round" strokeLinejoin="round" /></>}
    {id === 'people' && <><circle cx="9" cy="8" r="3" {...stroke} /><path d="M3.5 19a5.5 5.5 0 0 1 11 0M16 5.5a3 3 0 0 1 0 5.6M17 14.2a5.5 5.5 0 0 1 3.5 4.8" {...stroke} strokeLinecap="round" /></>}
    {id === 'doc' && <><path d="M6 3h8l4 4v14H6z" {...stroke} strokeLinejoin="round" /><path d="M14 3v4h4M9 12h6M9 16h6" {...stroke} strokeLinecap="round" /></>}
    {id === 'gear' && <><circle cx="12" cy="12" r="3" {...stroke} /><path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5.3 5.3l2.1 2.1M16.6 16.6l2.1 2.1M5.3 18.7l2.1-2.1M16.6 7.4l2.1-2.1" {...stroke} strokeLinecap="round" /></>}
    {id === 'phone' && <path d="M6.5 3.5h3l1.5 4-2 1.5a11 11 0 0 0 6 6l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.5 5.7a2 2 0 0 1 2-2.2z" {...stroke} strokeLinejoin="round" />}
    {id === 'mail' && <><rect x="3" y="5" width="18" height="14" rx="2" {...stroke} /><path d="M3.5 6.5 12 13l8.5-6.5" {...stroke} strokeLinejoin="round" /></>}
    {id === 'clock' && <><circle cx="12" cy="12" r="9" {...stroke} /><path d="M12 7v5l3 2" {...stroke} strokeLinecap="round" /></>}
    {id === 'agency' && (
      <>
        <path d="M12 3v15M7 7h10M5 14a7 7 0 0 0 14 0M12 18v3" {...stroke} strokeLinecap="round" />
        <circle cx="12" cy="4" r="1.6" {...stroke} />
      </>
    )}
  </svg>
)

export const WhatsAppIcon = () => (
  <svg viewBox="0 0 32 32" aria-hidden="true">
    <path fill="currentColor" d="M16 3a13 13 0 0 0-11.2 19.6L3 29l6.6-1.7A13 13 0 1 0 16 3zm0 23.7c-2 0-4-.6-5.7-1.6l-.4-.2-3.9 1 1-3.8-.3-.4A10.7 10.7 0 1 1 16 26.7zm5.9-8c-.3-.2-1.9-1-2.2-1s-.5-.2-.7.2-.8 1-1 1.2-.4.2-.7 0a8.8 8.8 0 0 1-4.4-3.8c-.3-.6.3-.5 1-1.7.1-.2 0-.4 0-.6l-1-2.4c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4s-1.2 1.1-1.2 2.8 1.2 3.3 1.4 3.5 2.4 3.6 5.8 5c2.1.9 3 1 4 .8.7-.1 1.9-.8 2.2-1.5s.3-1.3.2-1.5-.3-.2-.6-.4z" />
  </svg>
)
