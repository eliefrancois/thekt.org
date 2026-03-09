"use client"

import { OrganicButton } from "./cult/organic-button"

export function DonateButton() {
  const handleClick = () => {
    window.open('https://donate.stripe.com/eVq8wH1L75CPgNk0vl8AE00', '_blank');
  };

  return (
    <div onClick={handleClick} style={{ cursor: 'pointer' }}>
      <OrganicButton label="Donate" />
    </div>
  );
}


