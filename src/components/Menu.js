import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <div className='menu'>
      <NavLink
        to='/'
        className={({ isActive }) =>
          isActive ? 'menu__item menu__item-active' : 'menu__item'
        }
      >
        ГЛАВНАЯ
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? 'menu__item menu__item-active' : 'menu__item'
        }
        to='/drift'
      >
        ДРИФТ-ТАКСИ
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? 'menu__item menu__item-active' : 'menu__item'
        }
        to='/timeattack'
      >
        TIME ATTACK
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? 'menu__item menu__item-active' : 'menu__item'
        }
        to='/forza'
      >
        FORZA CARTING
      </NavLink>
    </div>
  );
};

export default Menu;
