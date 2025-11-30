/* eslint-disable react/prop-types */
import React from 'react';

const icons = {
  recruitment: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"/>
      <path d="M22 12h-4"/>
      <path d="M6 12H2"/>
      <path d="M12 2v4"/>
      <path d="M12 18v4"/>
      <circle cx="12" cy="12" r="7"/>
    </svg>
  ),
  devops: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M17.5 19H9a5 5 0 1 1 3.2-8.9A7 7 0 1 1 17.5 19Z"/>
    </svg>
  ),
  consulting: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <rect x="2" y="7" width="20" height="14" rx="2"/>
      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
      <path d="M2 13h20"/>
    </svg>
  ),
  mobile: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <rect x="7" y="2" width="10" height="20" rx="2"/>
      <path d="M11 19h2"/>
    </svg>
  ),
  transformation: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M5 15a5 5 0 0 0 4 4"/>
      <path d="M15 5a5 5 0 0 1 4 4"/>
      <path d="M5 15c0-5.523 4.477-10 10-10a5 5 0 0 1 4 4c-5.523 0-10 4.477-10 10a5 5 0 0 1-4-4Z"/>
      <path d="M9 9l6 6"/>
    </svg>
  ),
  quality: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <circle cx="12" cy="12" r="10" />
      <path d="m12 6 3 6H9l3-6zm0 6v6" />
    </svg>
  ),
  speed: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M21 12a9 9 0 1 1-9-9" />
      <path d="M21 3 12 12" />
    </svg>
  ),
  partnership: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M12 5c-1.5-2-5-2-5 2 0 3 5 7 5 7s5-4 5-7c0-4-3.5-4-5-2Z" />
      <path d="M20 21v-2a2 2 0 0 0-2-2h-3" />
      <path d="M4 21v-2a2 2 0 0 1 2-2h3" />
      <path d="M12 13v8" />
    </svg>
  ),
  innovation: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M9 18h6" />
      <path d="M10 22h4" />
      <path d="M12 2a6 6 0 0 1 6 6c0 2.2-1.2 4.1-3 5.2V14a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-.8A6 6 0 0 1 6 8a6 6 0 0 1 6-6Z" />
    </svg>
  ),
  target: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <path d="M12 7v5l3 3" />
    </svg>
  ),
  laptop: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M2 18h20" />
    </svg>
  ),
  lightning: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M13 2L3 14h8l-2 8 10-12h-8l2-8Z" />
    </svg>
  ),
  chart: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M4 19h16" />
      <path d="M8 19V9" />
      <path d="M12 19V5" />
      <path d="M16 19v-7" />
    </svg>
  ),
  spark: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M12 2v4" />
      <path d="M12 18v4" />
      <path d="m4.93 4.93 2.83 2.83" />
      <path d="m16.24 16.24 2.83 2.83" />
      <path d="M2 12h4" />
      <path d="M18 12h4" />
      <path d="m4.93 19.07 2.83-2.83" />
      <path d="m16.24 7.76 2.83-2.83" />
    </svg>
  ),
  chat: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8.5 8.5Z" />
    </svg>
  ),
  search: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  ),
  rocket: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M5 15a7 7 0 0 0 4 4" />
      <path d="M15 5a7 7 0 0 1 4 4" />
      <path d="M9 9l6 6" />
      <path d="M4 4c5-1 11 1 16 6-5 5-11 7-16 6 0-4 2-9 6-12Z" />
      <path d="m5 20 2-2" />
    </svg>
  ),
  check: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
    </svg>
  )
};

const ServiceIcon = ({ name, className = '' }) => {
  const key = (name || '').toLowerCase();
  const directMatch = icons[key];
  const svg =
    directMatch ? directMatch :
    key.includes('recruit') ? icons.recruitment :
    key.includes('devops') || key.includes('cloud') ? icons.devops :
    key.includes('consult') || key.includes('enterprise') || key.includes('strategy') ? icons.consulting :
    key.includes('mobile') || key.includes('ios') || key.includes('android') || key.includes('app') ? icons.mobile :
    key.includes('transform') || key.includes('modern') || key.includes('automation') ? icons.transformation :
    key.includes('quality') || key.includes('quantity') ? icons.quality :
    key.includes('speed') || key.includes('fast') ? icons.speed :
    key.includes('partner') || key.includes('commitment') ? icons.partnership :
    key.includes('innov') || key.includes('idea') ? icons.innovation :
    icons.check;
  return React.cloneElement(svg, { className: `${svg.props.className || ''} ${className}`.trim() });
};

export default ServiceIcon;
