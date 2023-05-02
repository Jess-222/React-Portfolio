import './App.css';
import React, {useState} from "react"
import Header from "./components/Header"

import Main from "./components/Main"

function App() {
  const [pages] = useState([
    {
      name: "About"
    },
    {
      name: "Portfolio"
    },
    {
      name: "Contact"
    },
    {
      name: "Resume"
    }
  ]);
  const [page, setPage] = useState(pages[0]);
  return (
    <div className="App">
      <Header
      pages={pages}
      setPage={setPage}
      currentPage={page}
      >
      </Header>
      <Main page={page}/>
    </div>
  );
}

export default App;
