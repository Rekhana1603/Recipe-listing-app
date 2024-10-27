import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { searchDish } from '../redux/slices/recipeSlice'


const Header = ({insideHome}) => {
  const dispatch = useDispatch()
  return (
    <nav className='flex justify-between bg-orange-600 fixed w-full p-3'>
      <Link className='text-white font-bold text-xl' to={'/'}> <i class="fa-solid fa-utensils"></i> RecipeBook </Link>
      {
        insideHome &&
        <div className='px-5'> <input onChange={e=>dispatch(searchDish(e.target.value.toLowerCase()))} className='rounded p-1' style={{width:'300px'}} placeholder='Search Products Here' type="text" /> </div>
        }
   </nav>
  )
}

export default Header