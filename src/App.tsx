import { Routes, Route} from "react-router-dom"
import Home from "./Components/Home"
import Davinci from "./Components/Davinci"
import More from "./Components/More"

const App = () => {
  return (
    <>
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/davinci" element={<Davinci />} />
        <Route path="/more" element={<More />} />
      </Routes>
    </div>
      
    </>
  )
}

export default App
/////////////////////////////////////////////////////////////

// import { useState } from "react";
// import ItemForm from "./test/components/ItemForm";
// import ItemList from "./test/components/ItemList";
// import type { Item } from "./test/types";

// export default function App() {
//   const [items, setItems] = useState<Item[]>([]);

//   function handleCreated(item: Item) {
//     setItems((prev) => [...prev, item]);
//   }

//   return (
//     <div style={{ padding: "2rem" }}>
//       <h1>FastAPI + React + TypeScript CRUD</h1>
//       <ItemForm onCreated={handleCreated} />
//       <ItemList />
//     </div>
//   );
// }

