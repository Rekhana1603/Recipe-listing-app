import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'

const View = () => {
    const {id} = useParams()
    console.log(id);
    // const dispatch = useDispatch()
    // const { allRecipes, loading, error } = useSelector(state => state.recipeReducer)
    const [recipe,setRecipe] = useState({})

    useEffect(()=>{
        if(sessionStorage.getItem("allRecipes")){
            const allRecipes = JSON.parse(sessionStorage.getItem("allRecipes"))
            setRecipe(allRecipes?.find(item=>item.id==id))
        }
    },[])

    console.log(recipe);
    
    
  return (
   <>
    <Header/>
    <div style={{paddingTop:'100px'}} className='flex flex-col mx-5'>
      <div className="grid grid-cols-2 items-center gap-5 my-5">
        <img style={{width:'100%', height:'400px'}} src={recipe?.image} alt="" />
        <div>
          <h3>PID: {recipe?.id}</h3>
          <h1 className='text-3xl font-bold mt-2'>{recipe?.name}</h1>
          <h4 className='text-xl font-bold mt-2 text-red-500'>Cuisine : {recipe?.cuisine} </h4>
          <h4 className='font-bold mt-2 text-yellow-500'>Rating : <i class="fa-solid fa-star"></i> {recipe?.rating} </h4>
          <h4 className='mt-2'> <span className='font-bold'> Meal Type : </span> {recipe?.mealType} </h4>
          <h4 className='mt-2'><span className='font-bold'>Preparation time : </span> {recipe?.prepTimeMinutes} </h4>
          <h4 className='mt-2'><span className='font-bold'>Cooking time : </span> {recipe?.cookTimeMinutes} </h4>
          <p className='mt-3'>
            <span className='font-bold'>Ingredients </span>: {recipe?.ingredients}
          </p>     
          <p className='mt-3'>
            <span className='font-bold'>Instructions </span>: {recipe?.instructions}
          </p>    
        </div>
      </div>
    </div>
   </>
  )
}

export default View