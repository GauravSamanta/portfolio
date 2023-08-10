import NavBar from "./components/NavBar";
import About from "./components/About"
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
    </body>
  );
}
export default App;
