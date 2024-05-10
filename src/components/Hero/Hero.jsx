import React from 'react';
import { HiLocationMarker } from 'react-icons/hi';
import './Hero.css';
import CountUp from 'react-countup';
import { motion, spring } from 'framer-motion';

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <motion.h1
              initial={{ x: "-5rem", y: "5rem", opacity: 0 }}
              animate={{ x: 0, y: 0, opacity: 1 }}
              transition={{
                duration: 4,
                type: "spring"
              }
              }
            >
              Discover <br /> Most Suitable <br /> Property
            </motion.h1>
          </div>

          <div className="flexColStart hero-desc">
            <span className='secondaryText'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
            <span className='secondaryText'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</span>
          </div>

          <div className="flexCenter search-bar">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" />
            <button className="button" id='search-btn'>Search</button>
          </div>

          <motion.div className="flexCenter stats" initial={{ x: "-5rem", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration:4,
                type:"spring"
              }
              }>
            <div className="flexColStart stat">
              <span>
                <CountUp start={8800} end={9000} duration={4} />
                <span>+</span>
              </span>
              <span className='secondaryText'>Premium Products</span>
            </div>

            <div className="flexColStart stat">
              <span>
                <CountUp start={1200} end={1500} duration={4} />
                <span>+</span>
              </span>
              <span className='secondaryText'>Happy Customers</span>
            </div>

            <div className="flexColStart stat">
              <span>
                <CountUp end={25} duration={4} />
                <span>+</span>
              </span>
              <span className='secondaryText'>Award Winnings</span>
            </div>
          </motion.div>

        </div>

        <div className="flexCenter hero-right">
          <motion.div className="image-container" initial={{ x: "5rem", y: "-5rem", opacity: 0 }}
            animate={{ x: 0, y: 0, opacity: 1 }}
            transition={{
              duration: 4,
              type: "spring"
            }
            }>
            <img src="./hero-image.png" alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero