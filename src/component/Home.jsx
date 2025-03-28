import React, { useEffect } from 'react'
import { allfetchProduct } from '../features/fake/fakeSlice'
import { useDispatch, useSelector } from 'react-redux'
import SingleData from './SingleData'

const Home = () => {
    const {allProduct,isSuccess}=useSelector(state=>state.product)
    
    const dispatch = useDispatch()

    useEffect(()=>{
       dispatch( allfetchProduct())
    },[])

//  if(isSuccess){
  return (
    <div>
        {
            allProduct.map((todo)=><SingleData todo={todo}/>)
        }
    </div>
 
  )
}
// }

export default Home