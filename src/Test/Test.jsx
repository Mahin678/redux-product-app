import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {postView} from '../Redux/Action/ProductAction';

const Test = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.PostReducer);
      
    // post action active
    useEffect(() => {
         dispatch(postView())
    },[dispatch]);

//     const MyComponent = () => {
//     //   for get data from selector
//           const selector = useSelector(state => state.PostReducer);
//           return selector.data;
//     }
//     const data =  MyComponent()

    return (
        <div>
            <h3>Test</h3>

            {data && data.map((info , i) => (
                <div key={info.id} className="w-50">
                    <h2 className="text-danger">
                        {info.title}
                    </h2>
                    <h6>{info.body}</h6>
                </div>
            ))}
        </div>
    );
};

export default Test;
