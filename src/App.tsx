import { FC } from "react";

import { HairColor, Person } from "./components/Person";

import "./App.css";

const App: FC = () => {
  return (
    <div className="App">
      <Person
        name="Adad"
        age={45}
        email="sdsa@ds.com"
        hairColor={HairColor.Blonde}
      />
    </div>
  );
};

export default App;
