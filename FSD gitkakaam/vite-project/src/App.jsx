import React from 'react';
import Student from './Student';

function App() {

  const h1 = <h1> Hello World</h1>;
  const myStyle = {
    color: 'red',
    backgroundColor: 'yellow'
  };

  return (
    <div style={{ backgroundColor: 'Cyan' }}>
      {h1}

      <div style={myStyle}>
        ABES Engineering College
      </div>

      <div>
        <Student 
          pic={<img src='https://png.pngtree.com/png-clipart/20220615/original/pngtree-kid-student-back-to-school-in-uniform-wear-backpack-png-image_8043401.png' alt='Student 1' width="100" />}
          name="Suyash Singh" 
          branch="Computer Science" 
          rollno="101" 
          section="A" 
        />
        <Student 
          pic={<img src='https://img.lovepik.com/free-png/20211107/lovepik-student-png-image_400494958_wh1200.png' alt='Student 2' width="100" />}
          name="Suyash Singh 2" 
          branch="Mechanical" 
          rollno="102" 
          section="B" 
        />
      </div>
    </div>
  );
}

export default App;
