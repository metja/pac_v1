import React from "react";
import ToolBar from '../toolbar/ToolBar';
import A4Sheet from "../canvas/A4sheet";

function WorkPage() {
  return (
    <main className="workpage">
    <Toolbar />
    <div className="canvas-container">
      <A4Sheet />
    </div>
  </main>
  )
}

export default WorkPage;