import React, { useState } from 'react'

const HOCCounter = (CreateComponents) => {

    const NewComponent = () => {
        const [count,setCount] = useState(0);
        const handleCount = () => {
            setCount(prevCount => prevCount + 1);
        }
        const handleReset = () => {
            setCount(0);
        }
        return <CreateComponents handleReset={handleReset} handleCount={handleCount} count={count} />
    }
    
  return NewComponent;
}

export default HOCCounter