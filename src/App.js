import "./App.css";
import Profile from "./Profile";



export default function App() {
  
  const myFunction = (myName) => {
    alert(` ${myName} This is a test`);
  
  };

  return (
    <div className="App">
      <Profile Fullname="John Doe" myFunction={myFunction} Bio="this is another test" Proffession="this is the last test"/>
          < img src="cat.jpg"/>
         
    </div>
    
  );
}


