import React from 'react'

const Header = () => {
  return (
    <header className="flex text-[0.9rem] bg-base-100 justify-center items-center fixed w-full h-[7%] z-[1] top-0;">
      <div className="join join-horizontal">
      <input className="join-item btn" type="radio" name="options" aria-label="Radio 1" />
      <input className="join-item btn" type="radio" name="options" aria-label="Radio 2" />
      <input className="join-item btn" type="radio" name="options" aria-label="Radio 3" />
      </div>
    </header>
  )
}

export default Header