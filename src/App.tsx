import { useState } from "react";
import "./App.css";
import PropsDemo from "./exercises/PropsDemo";
import ListDemo from "./exercises/ListDemo";
import EventDemo from "./exercises/EventDemo";
import FormUncrontrolled from "./exercises/FormUncontrolled";
import StateDemo from "./exercises/StateDemo1";
import StateDemo2 from "./exercises/StateDemo2";
import StateDemo3 from "./exercises/StateDemo3";
import UseEffectDemo from "./exercises/UseEffect";
import FetchDemo from "./exercises/FetchDemo";
import LiftingState from "./exercises/LiftingState";
import ContextDemo from "./exercises/ContextDemo";

export default function App() {
  const [selectedView, setSelectedView] = useState("info");

  function handleSelected(selected: string) {
    setSelectedView(selected);
  }

  return (
    <>
      <div className="outer-div-style">
        <div className="header-style">
          <h2>React Exercises</h2>
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ flex: 1, padding: 10 }}>
            <Buttons onSelected={handleSelected} />
          </div>
          <div className="exercise-style">
            {selectedView == "info" ? <p>All exercises for React day-1</p> : null}
            {selectedView == "props1" ? <PropsDemo title="Props Demo 1" /> : null}
            {selectedView == "list1" ? <ListDemo title="List Demo 1" /> : null}
            {selectedView == "event1" ? <EventDemo title="Event Demo 1" /> : null}
            {selectedView == "form-uncontrolled" ? <FormUncrontrolled title="Form Demo 1" /> : null}
            {selectedView == "state1" ? <StateDemo title="State Demo 1" /> : null}
            {selectedView == "state2" ? <StateDemo2 title="State Demo 2" /> : null}
            {selectedView == "state3" ? <StateDemo3 title="State Demo 3" /> : null}
            {selectedView == "useEffect" ? <UseEffectDemo title="UseEffect Demo" /> : null}
            {selectedView == "fetch" ? <FetchDemo title="Fetch Demo" /> : null}
            {selectedView == "liftingState" ? <LiftingState title="Lifting State" /> : null}
            {selectedView == "context" ? <ContextDemo title="Context Demo" /> : null}
            {/**Add the exercise components you create for each exercise using the key you used for the matching button  */}
          </div>
        </div>
      </div>
    </>
  );
}
type ButtonProps = {
  onSelected: (selected: string) => void;
};
const Buttons = (props: ButtonProps) => {
  const { onSelected: handleSelected } = props;
  return (
    <>
      <button className="btn-w100" onClick={() => handleSelected("info")}>
        Info
      </button>
      {/* Add a new button for each of the exercises you complete */}
      <button className="btn-w100" onClick={() => handleSelected("props1")}>
        Props demo1
      </button>
      <button className="btn-w100" onClick={() => handleSelected("list1")}>
        List demo1
      </button>
      <button className="btn-w100" onClick={() => handleSelected("event1")}>
        Event demo1
      </button>
      <button className="btn-w100" onClick={() => handleSelected("form-uncontrolled")}>
        Forms Uncontrolled
      </button>
      <button className="btn-w100" onClick={() => handleSelected("state1")}>
        State demo1
      </button>
      <button className="btn-w100" onClick={() => handleSelected("state2")}>
        State demo2
      </button>
      <button className="btn-w100" onClick={() => handleSelected("state3")}>
        State demo3
      </button>
      <button className="btn-w100" onClick={() => handleSelected("useEffect")}>
        UseEffect demo
      </button>
      <button className="btn-w100" onClick={() => handleSelected("fetch")}>
        Fetch demo
      </button>
      <button className="btn-w100" onClick={() => handleSelected("liftingState")}>
        Lifting State
      </button>
      <button className="btn-w100" onClick={() => handleSelected("context")}>
        Context demo
      </button>
    </>
  );
};
