import React, { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { addTodo, deleteTodo, removeTodo } from '../actions/index';
import "./todo.css";


const Todo = () => {
    const [inputData, setInputData] = useState("");
    const list = useSelector((state)=>state.Reducers.list);
    const dispatch = useDispatch();
    return (
        <>
            <div className="todo">
                <h1>Todo List</h1>
            </div>
            <div className="input">
                <input type="text" placeholder="Add item" className="in" value={inputData} onChange={(e) => setInputData(e.target.value)} />

                <i className="fa fa-plus add-btn i" onClick={() => (dispatch(addTodo(inputData, setInputData(''))))}></i>
            </div>

            <div className="showItems">
                        
                        {
                            list.map((elem) => {
                                return (
                                    <div className="eachItem" key={elem.id}>
                                        <h3>{elem.data}</h3>
                                        <div className="todo-btn">
                                            <i className="far fa-trash-alt add-btn" title="Delete Item" onClick={() => (dispatch(deleteTodo(elem.id)))}></i>
                                        </div>
                                  </div>
                                )
                            })

                        }
                       
            </div>
            <div className="show">
                        <button className="btn effect04" data-sm-link-text="remove All" onClick={()=>(dispatch(removeTodo()))}><span> CHECK LIST </span> </button>
            </div>
        </>
    )
}

export default Todo;
