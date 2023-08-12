import NavBar from "./components/NavBar";
import About from "./components/About"
import SkillBar from "./components/SkillBar";
import Card from "./components/Card";
function App() {
  return (
    <body>
      <div>
        <NavBar />
        <div className="grad">
         <div className="grad"><span className="left-elip"></span>
          <span className="center-elip"></span>
          <span className="right-elip"></span></div>
        </div>
        <About></About>
      </div>
      <div>
    <SkillBar/>
      </div>
      <Card></Card>
    
    </body>
  );
}
export default App;
