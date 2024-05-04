import { useState } from 'react'


function App() {
  const pictureIDs = [400, 401, 402, 403, 404]
  const [imageId, setImageId] = useState(pictureIDs[0])

  const getLoremPicsumImage = (id, width = 800, height = 450) => `https://picsum.photos/id/${id}/${width}/${height}`
  
  function handleClick(id){
    setImageId(id)
  }
  return (
    <main className='container'>
      <h1>
        Gallery App
      </h1>
      <img src={getLoremPicsumImage(imageId)} alt="" style={{width: "100%"}}/>
      <div className="grid" style={{marginTop: "30px"}}>
        {
          pictureIDs.map((item, index) => <div key={index}>
          <img
          onClick={() => handleClick(item)}
           src={getLoremPicsumImage(item, 100, 100)} 
           alt="" 
           />
          </div>)
        }
       
      </div>
    </main>
  )
}

export default App
