import React from 'react';
import { Link } from 'react-router-dom'
import manOnvan from "../assets/man_on_van.png"

export default function About() {
  return (
    <section className='about'>
        <h1 className='about__title'>Don’t squeeze in a sedan when you could relax in a van.</h1>
        <p className='about__description__1'>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
        (Hitch costs extra 😉)</p>
        <p className='about__description__2'>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
        <img className='about__image' src={manOnvan} alt="An image of a man sitting on top of the roof of a van."></img>
        <div className='about__cta'>
            <h3 className='about__cta__text'>Your destination is waiting.</h3>
            <h3 className='about__cta__text'>Your van is ready.</h3>
            <Link to="/vans">
              <button className='about__cta__button'>Explore our vans</button>
            </Link>
        </div>
    </section>
  )
}
