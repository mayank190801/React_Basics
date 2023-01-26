import "./App.css";
import { AllObjects } from "./AllObjects";
import { GasPlanets } from "./GasPlanets";
import { StateStudy } from "./StateStudy";
import { InputState } from "./InputState";
import { ColorShifter } from "./ColorShifter";
import { Counter } from "./Counter";

function App() {
  return (
    <div className="App">
      <Counter />
      <ColorShifter />
      <InputState />
      <StateStudy />
      <Job money={123000} position="Senior SDE" company="Google" />
      <Job money={120003} position="Junior SDE" company="netflix" />
      <Job money={1230} position="Lower SDE" company="random" />
      <Play />
      <AllTheName />
      <AllObjects />
      <GasPlanets />
    </div>
  );
}

//Making a Job component justl ike this -- html styles jsx syntax how cool is that
//Using className feature and utilising it smartly for sure
const Job = (props) => {
  return (
    <div>
      <h1 className="name">{props.money}</h1>
      <h2>{props.position}</h2>
      <h3>{props.company}</h3>
    </div>
  );
};

//more practise components for sure
//You can use ternary operator and style feature in tha below fashio
const Play = (props) => {
  const age = 3;
  const isGreen = false;
  return (
    <div>
      {age > 18 ? <h1>Random</h1> : <h2>not good not good</h2>}
      <h2 style={{ color: isGreen ? "green" : "red" }}> I am a colorful</h2>
    </div>
  );
};

//Map with arrays
const AllTheName = () => {
  const names = ["Mayank", "Sanvi", "Random", "Random1"];

  return (
    <div>
      {names.map((val) => {
        return (
          <div>
            <h1>{val}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default App;
