import Logs from "./Logs"
import Prompt from "./Prompt"

let name ="Jegadesh Muthu";

function App() {

  return (
    <>
    <Logs></Logs>
    <Prompt isLoggedIn={true} userName={name}></Prompt>
    </>
  )
}

export default App
