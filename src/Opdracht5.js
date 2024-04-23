import { useState } from 'react';

function MooieNaam(){
  alert('Wat een mooie naam');
}
function LelijkeNaam(){
  alert('Wat een lelijke naam');
}
function App() {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name.search("s") == -1 && name.search("S") == -1){
      LelijkeNaam();
    } else {
      MooieNaam();
    }
    
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Voer je naam in:
        <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <input type="submit" />
    </form>
  )
}
export default App