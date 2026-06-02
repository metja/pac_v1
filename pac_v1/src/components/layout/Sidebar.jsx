import React from "react";

function Sidebar() {
  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        <button className="side-bar-btn">
          <span className="sidebar-icon">📐</span>
          <span>Проєкти</span>
        </button>
        <button className="sidebar-btn">
          <span className="sidebar-icon">🪨</span>
          <span>Матеріали</span>
        </button>
        <button className="sidebar-btn">
          <span className="sidebar-icon">⚙️</span>
          <span>Налаштування</span>
        </button>
      </nav>
    </aside>
  )
}

export default Sidebar;