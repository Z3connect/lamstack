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
  check: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
    </svg>
  )
};

const ServiceIcon = ({ name, className = '' }) => {
  const key = (name || '').toLowerCase();
  const svg =
    key.includes('recruit') ? icons.recruitment :
    key.includes('devops') || key.includes('cloud') ? icons.devops :
    key.includes('consult') || key.includes('enterprise') || key.includes('strategy') ? icons.consulting :
    key.includes('mobile') || key.includes('ios') || key.includes('android') || key.includes('app') ? icons.mobile :
    key.includes('transform') || key.includes('modern') || key.includes('automation') ? icons.transformation :
    icons.check;
  return React.cloneElement(svg, { className: `${svg.props.className || ''} ${className}`.trim() });
};

export default ServiceIcon;
