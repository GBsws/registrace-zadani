import { Registration } from "./components/Registration/Registration";

export const App = () => {
  return (
    <div className="container">
      <header>
        <h1>Registrace</h1>
      </header>
      <main>
        <Registration />
      </main>
    </div>
  );
};

export default App;
