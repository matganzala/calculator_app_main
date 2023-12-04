import { useEffect, useState } from "react";
import Button from "./Button";

function App() {
  const [displayValue, setDisplayValue] = useState("");
  const [displayElements, setDisplayElements] = useState([]);

  function resultButton() {
    if(displayValue != ""){
      setDisplayElements([...displayElements, displayValue]);
      setDisplayValue("");
    }
  }

  function resetButton(){
    setDisplayValue("");
    setDisplayElements([""])

  }

  function deleteButton(){
    setDisplayValue(displayValue.slice(0, -1));
  }

  function handleButton(input) {
    setDisplayValue(displayValue + input);

  }
  

  return (
    <div className="bg-[#3B4664] min-h-screen flex justify-center items-center">
      <div className=" rounded-lg p-5 w-full md:w-[40%]">
        <span className="font-leaguespartan text-[#E9E3DB] mb-5">CALC</span>
        <input
          type="text"
          className="w-full bg-[#242E44] font-leaguespartan pr-5 text-[#E9E3DB] text-[40px] h-[100px] text-right rounded-lg mb-4 mt-4"
          disabled
          value={displayValue}
        />
        <div className="grid grid-cols-4 gap-3 bg-[#242E44] p-6 rounded-lg">
          <Button functionButton={() => handleButton("7")} element={7} />
          <Button functionButton={() => handleButton("8")} element={8} />
          <Button functionButton={() => handleButton("9")} element={9} />
          <Button functionButton={() => deleteButton("DEL")} element={"DEL"} />

          <Button functionButton={() => handleButton("4")} element={4} />
          <Button functionButton={() => handleButton("5")} element={5} />
          <Button functionButton={() => handleButton("6")} element={6} />
          <Button functionButton={() => handleButton("+")} element={"+"} />

          <Button functionButton={() => handleButton("1")} element={1} />
          <Button functionButton={() => handleButton("2")} element={2} />
          <Button functionButton={() => handleButton("3")} element={3} />
          <Button functionButton={() => handleButton("-")} element={"-"} />

          <Button functionButton={() => handleButton(".")} element={"."} />
          <Button functionButton={() => handleButton("0")} element={0} />
          <Button functionButton={() => handleButton("/")} element={"/"} />
          <Button functionButton={() => handleButton("x")} element={"x"} />

          <Button functionButton={() => resetButton("")} element={"RESET"} />
          <Button functionButton={() => resultButton("RESULT")} element={"RESULT"} />
          <Button functionButton={() => console.log(displayElements)} element={"RESULT"} />
        </div>
      </div>
    </div>
  );
}

export default App;
