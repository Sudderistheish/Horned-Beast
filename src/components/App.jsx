import React from "react";


import Main from "./MainP";
import data from './data.json';
import {Modal,Button} from 'react-bootstrap';

import "bootstrap/dist/css/bootstrap.min.css";

{
    let [selectedBeast, setSelectedBeast] = useState(null);

    let handleImageClick = (beast) => {
    setSelectedBeast(beast);
  };

  return (
    
    <div>
      <MainP data={data} onImageClick={handleImageClick} />
      {selectedBeast && (
        <SelectedBeast beast={selectedBeast} onClose={() => setSelectedBeast(null)} />
      )}

    </div>
  );
}

export default App;
