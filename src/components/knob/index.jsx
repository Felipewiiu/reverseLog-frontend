
import React from 'react';
import { Knob } from 'primereact/knob';
import './knob.css';



export default function ReadOnlyDemo(props) {
  return (
    <div className="card flex justify-content-center custom-card">
      <Knob value={50} readOnly  textColor='#0765F2' valueColor='#0765F2'/>
    </div>
  );
}

