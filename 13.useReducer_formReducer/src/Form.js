import { useReducer, useRef, useState } from "react";
import { formReducer, initialState } from "./formReducer";

export const Form = () => {
  // const [product, setProduct] = useState({
  //   title: "",
  //   description: "",
  //   price: 0,
  //   category: "",
  //   tags: [],
  //   quantity: 0,
  // });

  const tagRef = useRef()
  const [state, dispatch] = useReducer(formReducer, initialState)

  const handelInputChange = (event)=>{
    dispatch({type: "change_Input", data: {name: event.target.name, value: event.target.value}})
  }

  const handelTags = ()=>{
    const tags = tagRef.current.value.split(",")
    tags.forEach(tag=> {
      dispatch({type: "add_tag", data: tag})
    })
  }

  console.log(state)

  

  
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="عنوان"
          name="title"
          onChange={handelInputChange}
        />
        <input
          type="text"
          placeholder="توضیح"
          name="description"
          onChange={handelInputChange}
        />
        <input
          type="number"
          placeholder="قسمت"
          name="price"
          onChange={handelInputChange}
        />
        <p>مجموعه</p>
        <select name="category" onChange={handelInputChange}>
          <option value="bag">کیف</option>
          <option value="shoes">کفش</option>
          <option value="dress">لباس</option>
        </select>
        <p>تگ</p>
        <textarea placeholder="tags" ref={tagRef}></textarea>
        <br />
        <button type="button" onClick={handelTags}>انتخاب تگ</button>
        <br/>
        {state.tags.map((tag) => {
          return <button key={tag} onClick={()=> dispatch({type :"remove_tag" , data : tag })}>
            {tag}</button>;
        })}
        <div style={{ marginTop: "20px" }}>
          <button type="button" onClick={()=> dispatch({type: "increase"})}>
            +
          </button>
          تعداد {state.quantity}
          <button type="button" onClick={() => dispatch({ type: "decrease" })}>
            -
          </button>
        </div>
      </form>
    </div>
  );
};