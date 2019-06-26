import React from 'react'

function Menu(prop) {
console.log('menu props', prop);

  return (
    <div className="menu item">
      <div className="ui toggle checkbox">
        <input onChange={prop.handleToggle} type="checkbox" name="public" />
        <label>Toggle Dark Mode</label>
      </div>
    </div>
  );
}

export default Menu
