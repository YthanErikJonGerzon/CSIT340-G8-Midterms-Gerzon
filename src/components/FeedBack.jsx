
import { useState } from "react";

function Feedback(){
    const [yes, setYes] = useState(0);
  const [no, setNo] = useState(0);
  function handleYes() {

    setYes(yes + 1);
  }

  function handleNo() {
    setNo(no + 1);
  }

  function handleClear() {
    setYes(0);
    setNo(0);
  }
    function span(name, description){
    return (
         <div className="flex gap-6">
          <div className="w-48 rounded-xl border-2 border-[#5C4F4A] py-4 text-center">
            <p className="text-4xl font-bold text-[#5C766D]">{name}</p>
            <p className="mt-1 text-lg"> {description}</p>
          </div>
        </div>
    )
  }
 span;

    return (
         <div className="mx-20 mt-2 flex items-center justify-between self-start rounded-x1 bg-[#5C4F4A] p-6 text-[#EDE9E6]">
        <p className= "text-2x1">Was This Page helpful?</p>
        <div className = "flex item-center gap-4">
             
          <div className="mt-6 flex gap-4">
            <button
              className="cursor-pointer rounded-lg bg-[#5C766D] px-8 py-3 text-xl font-bold text-[#EDE9E6]"
              onClick={handleYes}
            >
             Yes
            </button>
            <button
              className="cursor-pointer rounded-lg bg-[#C9996B] px-6 py-2 text-xl font-bold text-[#5C4F4A]"
              onClick={handleNo}
            >
              No
            </button>
            <button
              className="cursor-pointer rounded-lg border-2 border-[#EDE9E6] px-6 py-2 text-xl font-bold"
              onClick={handleClear}
            >
              Clear
            </button>
          </div>
        </div>
        <span value= {yes}/>
        <span value= {no} />
      </div>
    )
}

export default Feedback;
