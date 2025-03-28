import React from 'react'
// import { useDispatch } from 'react-redux'
// import { Link } from 'react-router-dom'
// import { add } from '../features/fake/fakeSlice'
import { Link } from 'react-router-dom'

const SingleData = ({todo}) => {
  // const dispatch = useDispatch()
  // const handleadd=()=>{
  //   const cardprod={...todo}
  //   dispatch(add(cardprod))
  // }
  return (
 <div>
     {/* <Link><button>{todo.title}</button></Link> */}
     <p>{todo.title}</p>
   
   <Link to={"/cart"} >add</Link>
 </div>
  )
}

export default SingleData