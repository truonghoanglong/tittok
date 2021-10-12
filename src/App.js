import React, {useState,useMemo} from 'react'




function App() {
  
  const gif=[
    1,2,3,4,5,6,7,8,9,10,11,12,13,14,15
    
  ]
  
  const [couter,setCouter] = useState()
  
  const handleGif = () =>{
    setCouter(
     gif[Math.floor(Math.random() * 14)]
    )
  }

  return (
    <div style={{ padding: '30px'}}>
      <h1>{couter || 'Chua co phan thuong'}</h1>
      <button onClick={handleGif}>Lấy thưởng</button>
    </div>
  );
}

export default App;
