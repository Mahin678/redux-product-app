import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {postView} from '../Redux/Action/ProductAction';

const Test = () => {
  const ch =  postView();
    const dispatch = useDispatch();

        useEffect(() => {
         dispatch((postView()))
        },[])


  const MyComponent = () => {
          const selector = useSelector(state => state.PostReducer);
          return selector.data;
        }
       const data =  MyComponent()
    return (
        <div>
            Test
        {data && data.map((info , i)=><div key={i} className="w-50 " > <h2 className="text-danger">{info.title}</h2> <h6   >{info.body}</h6>  </div>)}
        </div>
    );
};

export default Test;