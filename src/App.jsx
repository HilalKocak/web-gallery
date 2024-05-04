import { useState } from 'react'


function App() {
  const [imageId, setImageId] = useState(400)
  const getLoremPicsumImage = (id, width = 800, height = 450) => `https://picsum.photos/id/${id}/${width}/${height}`
  
  return (
    <main className='container'>
      <h1>
        Gallery App
      </h1>
      <img src={getLoremPicsumImage(imageId)} alt="" style={{width: "100%"}}/>
      <div className="grid" style={{marginTop: "30px"}}>
        {
          [...Array(5)].map((item, index) => <div key={index}>
          <img src={getLoremPicsumImage((200 + index), 100, 100)} alt="" />
          </div>)
        }
       
      </div>
    </main>
  )
}

export default App
