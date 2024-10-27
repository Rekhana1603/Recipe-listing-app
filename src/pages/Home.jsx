import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllRecipes } from '../redux/slices/recipeSlice'


const Home = () => {
    const dispatch = useDispatch()
    const { allRecipes, loading, error } = useSelector(state => state.recipeReducer)
    // console.log(allRecipes, loading, error);

    const [currentPage,setCurrentPage] = useState(1)
    const recipePerPage = 8
    const totalPage = Math.ceil(allRecipes?.length/recipePerPage)
    const currentPageLastRecipeIndex = currentPage * recipePerPage
    const currentPageFirstRecipeIndex = currentPageLastRecipeIndex - recipePerPage
    const visibleRecipeCards = allRecipes?.slice(currentPageFirstRecipeIndex,currentPageLastRecipeIndex)

    useEffect(() => {
        dispatch(fetchAllRecipes())
    }, [])

    const navigateToNextPage = ()=>{
        if(currentPage!=totalPage){
          setCurrentPage(currentPage+1)
        }
    }
    
    const navigateToPrevtPage = ()=>{
        if(currentPage!=1){
          setCurrentPage(currentPage-1)
        }
    }

    return (
        <>
            <Header insideHome={true} />
            <div style={{ paddingTop: '100px' }} className='container px-4 mx-auto'>
                <h1 className='text-3xl font-bold text-center mb-5'>Welcome to RecipeBook</h1>
                {
                    loading ?
                        <div className='flex justify-center items-center my-5 text-lg'>
                            <img style={{ width: '100px', height: '100px' }} className='me-2' src="https://tabriztasfiye.com/files/adsPages/assets/images/loading.gif" alt="" /> Loading...
                        </div>
                    :
                    <>
                        <div className="grid grid-cols-4 gap-4">
                            {
                                allRecipes?.length > 0 ?
                                  visibleRecipeCards?.map(recipe => (
                                       <div key={recipe?.id} className="rounded border p-2 shadow">
                                           <img style={{ width: '100%', height: '220px' }} src={recipe?.image} alt="" />
                                             <div className="text-center">
                                                <h3 className='text-xl font-bold mt-3'>{recipe?.name}</h3>
                                                <h3 className='text-xl mt-3'>Cuisine : {recipe?.cuisine}</h3>
                                                <Link className='bg-black rounded p-2 mt-3 mb-2 text-xs text-white inline-block' to={`${recipe?.id}/view`}>View More...</Link>
                                            </div>
                                        </div>
                                    ))
                                :
                                 <div className="flex justify-center items-center text-red-600 my-5 text-lg">No items found!!!</div>
                            }
                        </div>
                        <div className="text-center text-2xl font-bold mt-20">
                          <span onClick={navigateToPrevtPage} className='cursor-pointer'><i className="fa-solid fa-backward me-5"></i></span>
                          <span>{currentPage} of {totalPage}</span>
                          <span onClick={navigateToNextPage} className='cursor-pointer'><i className="fa-solid fa-forward ms-5"></i></span>
                        </div>
                    </>
                }
            </div>
        </>
    )
}

export default Home