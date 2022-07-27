import { useState } from "react";

function Header({title}) {
  return <h1>{title? title : "Welcome!"}</h1>;
}

export default function Homepage() {

  const names = ["Noah Marley", "Heidi Frances", "Stella Roo"];

  const [likes, setLikes] = useState(0);

  function handleClick(){
    setLikes(likes + 1);
  }

  return (
    <div>
      <Header title="Develop. Preview. Ship. 🚀" />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      
      <button onClick={handleClick}> Like({likes}) </button>
    </div>
  );
}