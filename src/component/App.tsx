import { useEffect } from 'react'
import axios from 'axios';

const App = () => {
  useEffect(() => {
    axios.get('http://localhost:3333/product')
    .then((res)=>{
      console.log(res.data)
    })

  }, [])

  return (
    <div className="App bg-gray-400">
      <h2 className='text-white'>こんにちは</h2>
    </div>
  );
}

export default App;
