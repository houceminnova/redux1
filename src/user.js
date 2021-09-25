import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getAllItems,addItem,deleteItem} from './redux/action.js'
import  Mood from './modal.js'
 const User = ()=>{
    const user = useSelector((state) => state.userStore.user);
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getAllItems());
    }, []);
    const [input, setInput] = useState({
        nom:'',prenom:""
       });
       const addOne= ()=>{
           dispatch(addItem(input.nom,input.prenom))
       }
       const deleteOne = (id) => {
        dispatch(deleteItem(id));
      };
 
 
    return(
        <div>
                  <form onSubmit={addOne}>
                <input type="text" placeholder="Nom" onChange={(e)=>setInput({...input,nom:e.target.value})} />
                <input type="text" placeholder="Prenom" onChange={(e)=>setInput({...input,prenom:e.target.value})} />
        <input type="submit" />
         </form> 
            {user.map(el=>(
                <div key={el.id}> 
                    <h3 className='mt-5'>{el.nom} {el.prenom}</h3>
                   <div id="fless">
                    <button onClick={() => deleteOne(el.id)}>delete  </button> 
                    <Mood el={el}    /></div>
 
                </div>
            ))}
      
            </div>


    )
}

export default User