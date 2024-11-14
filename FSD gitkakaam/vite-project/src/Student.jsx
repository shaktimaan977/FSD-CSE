import React from 'react';
import './student.css';

function Student(props) {
  return (
    <div className='icard'>
      <table>
        <tbody>
          <tr><td colSpan={2}>ABES Engineering College</td></tr>
          <tr><td>Picture:</td><td>{props.pic}</td></tr>
          <tr><td>Name:</td><td>{props.name}</td></tr>
          <tr><td>Branch:</td><td>{props.branch}</td></tr>
          <tr><td>Roll:</td><td>{props.rollno}</td></tr>
          <tr><td>Section:</td><td>{props.section}</td></tr>
        </tbody>
      </table>
    </div>
  );
}

export default Student;
