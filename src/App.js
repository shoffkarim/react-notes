import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="logo">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="app-name">
          <p>React Notes</p>
        </div>
        <div className="notes-search">
          <input type="text" placeholder="Поиск заметки"/>
        </div>
      </header>
      <main className="main">
        <aside className="notes-aside">
          <ul className="notes-list">
            <li className="notes-item">
              <p className="notes-item__name">Работа</p>
              <span className="notes-item__date">30.01.2021</span>
              <span className="notes-item__tag">#work</span>
            </li>
          </ul>
        </aside>
        <section className="workspace">
          <div className="workspace-date">
            <p>30 января 2021г., 12:13</p>
          </div>
          <div className="workspace-field"></div>
        </section>
      </main>
    </div>
  );
}

export default App;
