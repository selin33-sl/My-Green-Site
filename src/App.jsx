import './App.css'
import React, { useState } from 'react'
import home from './assets/images/home.png'
import leaf3 from './assets/images/leaf-3.png'
import leaf4 from './assets/images/leaf-4.png'
import plant1 from './assets/images/plant-1.png'
import plant2 from './assets/images/plant-2.png'
import cart1 from './assets/images/cart-1.png'
import cart2 from './assets/images/cart-2.png'
import cart3 from './assets/images/cart-3.png'
import cart4 from './assets/images/cart-4.png'
import review1 from './assets/images/review-1.jpg'
import review2 from './assets/images/review-2.jpg'
import review3 from './assets/images/review-3.jpg'
import review4 from './assets/images/review-4.jpg'


import ServicesItem from './components/ServicesItem'
import PopularSectionItem from './components/PopularSectionItem'
import { Rating } from 'react-simple-star-rating'
import { Carousel } from "@material-tailwind/react";
import ReviewSectionItem from './components/ReviewSectionItem'

function App() {
  const [rating, setRating] = useState(0)

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate)

    // other logic
  }
  // Optinal callback functions
  const onPointerEnter = () => console.log('Enter')
  const onPointerLeave = () => console.log('Leave')
  const onPointerMove = (value, index) => console.log(value, index)

  return (
    <>
      {/* Header section */}

      <header className='flex  bg-green-dark py-8 text-white-light ' >
        {/* Header container */}
        <div className='container flex items-center justify-between space-x-8' >
          <div className='container flex  ' >
            {/* Logo */}
            <a href='' className='py-2 text-xl font-bold font-cuba  text-transparent bg-gradient-to-r from-white-light to-yellow-light bg-clip-text'>MyGreenProject</a>
          </div>
          {/* Navigation */}

          <nav className='  flex justify-between'>
            <div className='flex items-center space-x-10 '>
              <a href='' className='text-xl font-bold font-roboto text-yellow-light  '>Home</a>
              <a href='' className='text-xl font-bold font-roboto hover:text-yellow-light '>Home</a>
              <a href='' className='text-xl font-bold font-roboto hover:text-yellow-light '>Home</a>
              <a href='' className='text-xl font-bold font-roboto hover:text-yellow-light'>Home</a>
            </div>
          </nav>
        </div>
      </header>


      {/* Hero Section */}
      <section className=' flex  bg-green-dark text-white-light pb-16 '>
        <div className='container flex  '>
          {/* Left content */}
          <div className='flex flex-col justify-start r basis-1/2 mt-4 '>
            <h1 className='flex  left-0 font-bold font-roboto text-4xl flex-wrap'>
              Plants make a <br /> positive impact on <br /> your environment
            </h1>
            <h3 className='font-cuba mt-2 text-xl hover:text-yellow-light '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore nisi amet quas voluptatum consectetur ducimus omnis exercitationem accusantium beatae dolorem.</h3>
            {/* Buttons */}
            <div className='flex space-x-4 mt-16' >
              <button className='bg-yellow-light hover:bg-transparent border border-green-light py-1 px-4 rounded-lg'>
                <h3 className='text-white-light font-bold font-roboto'>Shop Now</h3>
              </button>
              <button className='hover:bg-yellow-light  border-green-light border py-1 px-4 rounded-lg'>
                <h3 className='text-white-light font-bold font-roboto'>Know More</h3>
              </button>
            </div>

            <h3 className='mt-4 font-cuba ' >You will get 30 days free trial.</h3>

            <div className='flex mt-12 space-x-4 ' >
              <i className="hover:bg-yellow-light cursor-pointer transition fas fa-arrow-right"></i>
              <i className="hover:bg-yellow-light  fas fa-arrow-right"></i>
              <i className="hover:bg-yellow-light  fas fa-arrow-right"></i>
              <i className="hover:bg-yellow-light  fas fa-arrow-right"></i>

            </div>
          </div>
          {/* Right content */}
          <div className='flex items-center basis-1/2 hover:mt-4 duration-500 ' >
            {/* Home Image */}
            <img src={home} className='hover:animate-grow-shrink ' ></img>
          </div>
        </div>

      </section>

      {/* Services Section */}
      <section className='container flex my-16 items-center text-green-dark '>

        <div className='flex space-x-4 justify-between' >
          {/* Item */}
          <ServicesItem IconName={'fas fa-car'} header={'Fast Delivery'} />
          <ServicesItem IconName={'fas fa-plane'} header={'Great Customer Service'} />
          <ServicesItem IconName={'fas fa-music'} header={'Original Plants'} />
          <ServicesItem IconName={'fas fa-rocket'} header={'Affordable Price'} />

        </div>

      </section>

      {/* About us section */}
      <section className='flex p-36 font-roboto text-white-light relative bg-green-dark justify-center flex-col items-center'>
        <div className='flex'>
          <div className='flex flex-col items-center'>
            <h1 className='font-cuba text-3xl  font-bold text-yellow-light italic'>About Us</h1>
            <h3 className='mt-4'>Follow instruction for me</h3>
          </div>
          <img src={leaf3} className='flex absolute -right-12 -top-3 w-60 h-60'></img>
        </div>
        <div className='flex mt-16 '>
          <div className='flex basis-1/3' >
            <img src={plant1} className='hover:animate-grow-shrink' ></img>
          </div>
          <div className='flex basis-2/3 flex-col justify-center'>
            <h1 className='flex flex-wrap text-3xl '>Make your organic <br /> garden </h1>
            <h3 className='font-cuba mt-6 italic' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident hic voluptate, maiores commodi libero sunt eligendi, placeat aliquid consequuntur distinctio delectus itaque minus doloribus aspernatur amet nemo? Dolorem, provident alias harum at odit ipsam beatae. Minus totam recusandae vitae magni dolorum porro reiciendis aperiam, odit impedit illum ullam eius neque quasi. Veritatis nemo magni pariatur eius nobis libero illum aperiam.</h3>
          </div>
        </div>

        <div className='flex mt-10 '>
          <div className='flex basis-2/3 flex-col justify-center'>
            <h1 className='flex flex-wrap text-3xl '>Come with us <br /> grow up your plant </h1>
            <h3 className='font-cuba mt-6  italic' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident hic voluptate, maiores commodi libero sunt eligendi, placeat aliquid consequuntur distinctio delectus itaque minus doloribus aspernatur amet nemo? Dolorem, provident alias harum at odit ipsam beatae. Minus totam recusandae vitae magni dolorum porro reiciendis aperiam, odit impedit illum ullam eius neque quasi. Veritatis nemo magni pariatur eius nobis libero illum aperiam.</h3>
          </div>
          <div className='flex basis-1/3' >
            <img src={plant2} className='hover:animate-grow-shrink' ></img>
          </div>

        </div>

      </section>

      {/* popular section */}
      <section className='flex flex-col p-24 relative text-white-light bg-green-mid justify-center items-center'>
        <div className='flex flex-col items-center'>
          <h1 className='font-cuba text-3xl  font-bold text-yellow-light italic'>Your Choice Plant</h1>
          <h3 className='mt-4'>Follow instruction for more</h3>
        </div>

        {/* Items */}

        <div className='flex justify-center font-roboto text-white-light items-center space-x-4 mt-44'>

          <PopularSectionItem image={cart1} />
          <PopularSectionItem image={cart2} />
          <PopularSectionItem image={cart3} />
          <PopularSectionItem image={cart4} />


        </div>
      </section>

      {/* Review Section */}
      <section className='flex p-36 font-roboto text-white-light relative bg-green-dark justify-center flex-col items-center'>

        <div className='flex'>
          <div className='flex flex-col items-center'>
            <h1 className='font-cuba text-3xl  font-bold text-yellow-light italic'>Customer Review</h1>
            <h3 className='mt-4'>Follow instruction for more</h3>
          </div>
          <img src={leaf4} className='flex absolute -left-12 -top-3 w-60 h-60 '></img>
        </div>
        <div className='grid gap-2  justify-center items-center mt-8 text-white-light  ' >
          {/* Carousel */}
          <Carousel autoplay loop className='flex space-x-6 ' >
            <ReviewSectionItem image={review1} />
            <ReviewSectionItem image={review1} />
            <ReviewSectionItem image={review1} />
          </Carousel>
        </div>
      </section>

    </>
  )
}

export default App
