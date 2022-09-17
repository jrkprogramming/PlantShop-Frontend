import React from 'react'
import {Link, useParams, useNavigate} from 'react-router-dom'
import {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {listPlantDetails} from '../Actions/plantActions'


const PlantDetailsPage = () => {

    const [quantity, setQuantity] = useState(1)    

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { id } = useParams();

    const plantDetails = useSelector(state => state.plantDetails)
    const {plant} = plantDetails


    useEffect(() => {

        dispatch(listPlantDetails(id))

    }, [dispatch, id])

    const addToCartHandler = () => {
        navigate(`/cart/${id}?cartQty=${quantity}`)
    }

  return (
    // <div className="p-5 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mx-[10%] my-[5%]">



    //     <a href={`/plants/`} type="button" class="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>BACK</a>


    //     <br></br>                <br></br>                <br></br>


    //     <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">
    //         <h1 className="mt-0 mb-2 text-5xl font-medium leading-tight text-white">{plant.name} </h1>
    //             <br></br>
    //         {plant.description}
    //         <br></br><br></br>
    //         <div>
    //             <img src={plant.image} alt={plant.name} />
    //         </div>
    //         <br></br>
    //         Price: ${plant.price}
    //         <br></br>
    //         {plant.quantity > 0 ? 'In Stock' : 'Out of Stock'} 
                
    //             <br></br><br></br>

    //         {plant.quantity > 0 && (
    //             <form value={quantity} onChange={(e) => setQuantity(e.target.value)} className="ml-[10%] px-[20%]">
    //                Qty: <select className="inline-flex items-center px-3 py-2 mr-[40%] text-sm font-medium text-center text-black rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300">
    //                     {
    //                         [...Array(plant.quantity).keys()].map((x) => (
    //                             <option key={x+1} value={x+1}>{x+1}</option>
    //                         ))
    //                     }
    //                     </select>
    //                     {plant.quantity > 0 ? <button onClick={addToCartHandler} type="button" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg dark:bg-green-500 dark:hover:bg-stone-400 focus:ring-4 focus:outline-none focus:ring-blue-300"><svg aria-hidden="true" class="mr-2 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path></svg>ADD TO CART</button> : null}
    //                 </form>

    //         )} 
    //     </div>
    // </div>

    <div className="items-start justify-center px-4 py-10 md:flex 2xl:px-20 md:px-6p-5 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mx-[12%] my-[3%]">
        
        
            <div className="hidden xl:w-2/6 lg:w-2/5 w-80 md:block">
                <img className="w-full" alt="img of a girl posing" src={plant.image} />
            </div>
            <div className="md:hidden">
                <img className="w-full" alt="img of a girl posing" src="https://i.ibb.co/QMdWfzX/component-image-one.png" />
                <div className="flex items-center justify-between mt-3 space-x-4 md:space-x-0">
                    <img alt="img-tag-one" className="w-full md:w-48 md:h-48" src="https://i.ibb.co/cYDrVGh/Rectangle-245.png" />
                    <img alt="img-tag-one" className="w-full md:w-48 md:h-48" src="https://i.ibb.co/f17NXrW/Rectangle-244.png" />
                    <img alt="img-tag-one" className="w-full md:w-48 md:h-48" src="https://i.ibb.co/cYDrVGh/Rectangle-245.png" />
                    <img alt="img-tag-one" className="w-full md:w-48 md:h-48" src="https://i.ibb.co/f17NXrW/Rectangle-244.png" />
                </div>
            </div>
            <div className="mt-6 xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0">
                <div className="pb-6 border-b border-gray-200">
                    <p className="text-sm leading-none text-gray-400">Plant Cultivar Collection</p>
                    <h1
                        className="mt-4 text-xl font-semibold leading-7 text-white lg:text-2xl lg:leading-6"
                    >
                        {plant.name}
                    </h1>
                </div>


                {/* <button
                    className="flex items-center justify-center w-full py-4 text-base leading-none text-white bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 hover:bg-gray-700"
                >
                    <svg className="mr-3" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.02301 7.18999C7.48929 6.72386 7.80685 6.12992 7.93555 5.48329C8.06425 4.83666 7.9983 4.16638 7.74604 3.55724C7.49377 2.94809 7.06653 2.42744 6.51835 2.06112C5.97016 1.6948 5.32566 1.49928 4.66634 1.49928C4.00703 1.49928 3.36252 1.6948 2.81434 2.06112C2.26615 2.42744 1.83891 2.94809 1.58665 3.55724C1.33439 4.16638 1.26843 4.83666 1.39713 5.48329C1.52583 6.12992 1.8434 6.72386 2.30968 7.18999L4.66634 9.54749L7.02301 7.18999Z" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M4.66699 4.83333V4.84166" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M13.69 13.8567C14.1563 13.3905 14.4738 12.7966 14.6025 12.15C14.7312 11.5033 14.6653 10.8331 14.413 10.2239C14.1608 9.61476 13.7335 9.09411 13.1853 8.72779C12.6372 8.36148 11.9926 8.16595 11.3333 8.16595C10.674 8.16595 10.0295 8.36148 9.48133 8.72779C8.93314 9.09411 8.5059 9.61476 8.25364 10.2239C8.00138 10.8331 7.93543 11.5033 8.06412 12.15C8.19282 12.7966 8.51039 13.3905 8.97667 13.8567L11.3333 16.2142L13.69 13.8567Z" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M11.333 11.5V11.5083" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Check availability in store
                </button> */}
                
                <div>
                    <p className="text-base leading-normal text-gray-400 xl:pr-48 lg:leading-tight mt-7">{plant.description}</p>
                    <p className="text-base leading-4 text-gray-400 mt-7">Price: ${plant.price}</p>
                    <p className="mt-4 text-base leading-4 text-gray-400">{plant.quantity > 0 ? 'In Stock' : 'Out of Stock'}</p>
                </div>
                <br></br><br></br>

                {plant.quantity > 0 && (
                 <form value={quantity} onChange={(e) => setQuantity(e.target.value)} className="">
                    <select className="inline-flex px-3 py-2 mr-[20%] text-sm font-medium text-center text-black rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300">
                         {
                             [...Array(plant.quantity).keys()].map((x) => (
                                <option key={x+1} value={x+1}>{x+1}</option>
                             ))
                         }
                         </select>
                         {plant.quantity > 0 ? <button onClick={addToCartHandler} type="button" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg dark:bg-green-500 dark:hover:bg-stone-400 focus:ring-4 focus:outline-none focus:ring-blue-300"><svg aria-hidden="true" class="mr-2 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path></svg>ADD TO CART</button> : null
                         
                         }
                     </form>
                
                )}
            </div>
        </div>
  )
}

export default PlantDetailsPage