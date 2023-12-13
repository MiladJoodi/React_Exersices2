import { useState } from "react";

export const useCount = (initialValue = 0)=>{
    const [count, setCount] = useState(initialValue)
}