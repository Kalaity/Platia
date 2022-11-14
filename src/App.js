import "./App.css";
import Profile from "./Profile";



export default function App() {
  
  const myFunction = (myName) => {
    alert(` ${myName} `);
  
  };

  return (
    <div className="App">
      <Profile Fullname="Name: John Doe" myFunction={myFunction} Curriculum="Bio: When requested" Profession="Profession: Just being a cat"/>
          < img src="cat.jpg"/>
         
    </div>
    
  );
}


