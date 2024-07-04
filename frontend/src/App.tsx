import './App.css'
// import {Magenta} from "./component/Magenta.tsx";
import axios from "axios";

function App() {

    const handleClick = async () => {
        console.log("click")
        const res = await axios.get("https://temp-momo-chan.s3.ap-northeast-1.amazonaws.com/temp.json")
        console.log({res})
    }

  return (
    <>
        <button onClick={handleClick}>S3へアクセス</button>
      {/*<Magenta/>*/}
    </>
  )
}

export default App
