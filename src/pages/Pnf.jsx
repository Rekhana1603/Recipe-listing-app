import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'

const Pnf = () => {
  return (
    <>
    <Header/>
    <div style={{paddingTop:'100px', height:'80vh'}} className='flex justify-center items-center flex-col'>
      <img style={{width:'400px', height:'280px'}} src="https://cdn.svgator.com/images/2024/04/detective-animation-404-error-page.gif" alt="" />
      <h1 className='font-bold text-3xl mb-2'>Oops, Page not found...</h1>
      <p className='mb-2'>The page you are looking for is not available.</p>
      <Link to={'/'} className='bg-black px-3 py-1 text-white rounded'>Back</Link>
    </div>
    </>
  )
}

export default Pnf