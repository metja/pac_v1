import React from "react";

function ToolBar() {
  return (
    <div className="toolbar">
      <button className="tool-btn">➕ Прямокутник</button>
      <button className="tool-btn">🔺 Багатокутник</button>
      <button className="tool-btn">📐 Сходи</button>
      <button className="tool-btn">🪟 Підвіконня</button>
      <div className="toolbar-spacer"></div>
      <button className="tool-btn tool-btn-print">🖨️ Друк</button>
    </div>
  )
}