import {numIncr, numDecr} from '../../slices/NumSlice'
import { useDispatch, useSelector } from 'react-redux'


import React from 'react'

export const NumIncrDecr = () => {

    const { value } = useSelector(state => state.num) ;

    const dispatch = useDispatch() ; 


  return (
    <>


        <div>
            <p>Value: {value}</p>
            <div>
                <button onClick={()=>dispatch(numIncr())}>Increment</button>
                <button onClick={()=>dispatch(numDecr())}>Decrement</button>
            </div>
        </div>
    
    
    </>
  )
}