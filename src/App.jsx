import { useRef, useState } from "react";
import text from "./data";

function App() {
  const [paragraph, setParagraph] = useState(0)
  const refContainer = useRef()
  const newArr = text.slice(0 ,paragraph)
  if(paragraph < 0){
    setParagraph(1)
  }
  return ( 
    <div className="container">
        <section>
        <h1>TIRED OF BORING LOREM IPSUM?</h1>
        <form>
        <label>paragraphs:</label>
        <input type="number" defaultValue='1' ref={refContainer}/>
        <button type="button" onClick={()=> setParagraph(refContainer.current.value)}>Generate</button>
        </form>
        <div className="text">{
          newArr.map((ele, index)=>{
            return <p key={index}>{ele}</p>
          })
        }</div>
      </section>
    </div>
  );
}

export default App; 
