import Basics from "./components/Basics";
import ColorList from "./components/ColorList";
import EvenNumbers from "./components/EvenNumbers";
import UserList from "./components/UserList";

function App() {
  const filterNumbers = (arr:number[]): number[] => {
    const evenNums = arr.filter((item) => item % 2 === 0)
    return evenNums
  }


return (
  <>
  <div>
    <Basics />
  </div>
  <div>
    <ColorList />
  </div>
  <div>
    <EvenNumbers filtNums={filterNumbers} />
  </div>
  <div>
    <UserList />
  </div>
    
    </>
)
  
}

export default App;