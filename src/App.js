import "./App.css";
import Profile from "./Profile";



export default function App() {
  
  const myFunction = (myName) => {
    alert(` ${myName} is a student he is lying `);
  
  };

  return (
    <div className="App">
      <Profile Fullname="John Doe" myFunction={myFunction} Bio="owner of seven software engineering companies" Proffession="he is lying"/>
          < img src="cat.jpg"/>
         
    </div>
    
  );
}


