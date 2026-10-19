
import Docs from "./components/Docs";
import Sidebar from "./components/Sidebar";
import Guide from "./Components/Guide";
import Feedback from "./Components/FeedBack";
function App() {
 

  return (
    <div className="grid min-h-screen grid-cols-[24rem_1fr] grid-rows-[auto_auto_1fr] bg-[#EDE9E6] text-[#5C4F4A]">
      <Sidebar author = "Ythan Erik Jon F. Gerzon "/>
     
      <Docs/>

     <Guide/>
     <Feedback/>
    </div>
  );
}

export default App;