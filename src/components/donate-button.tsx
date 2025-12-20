"use client"

import { OrganicButton } from "./cult/organic-button"

export function DonateButton() {
  const handleClick = () => {
    const section = document.querySelector('#price');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div onClick={handleClick} style={{ cursor: 'pointer' }}>
      <OrganicButton label="Donate" />
    </div>
  );
}

