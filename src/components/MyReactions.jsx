import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import reactionsActions from '../redux/actions/reactionsActions';

export default function MyReactions() {

    const { id, token } = useSelector((store) => store.userReducer);
    const dispatch = useDispatch()
    const {getReactionsOfUser} = reactionsActions
    const { allReactionsOfUser } = useSelector((store) => store.reactionsReducer);
    console.log(allReactionsOfUser);

    useEffect(()=>{

        dispatch(getReactionsOfUser({id, token}))

    },[])
  
  
    return (
    <div>





    </div>
  )
}
