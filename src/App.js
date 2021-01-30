import './App.css';
import { Header } from "./components/Header";
import { NotesList } from "./components/NotesList";
import { Workspace } from "./components/Workspace";

function App() {
  return (
    <div className="App">
      <Header/>
      <main className="main">
        <aside className="notes-aside">
          <NotesList/>
        </aside>
        <Workspace/>
      </main>
    </div>
  );
}

export default App;
