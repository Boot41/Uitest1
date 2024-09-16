import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header 
      style={{
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        backgroundColor: '#F5F5F5', 
        padding: isOpen ? '10px' : '15px', 
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)', 
        position: 'relative' 
      }}
      role="banner"
    >
      <div 
        style={{
          flex: 1, 
          textAlign: isOpen ? 'center' : 'left' 
        }}
        aria-labelledby="logo"
      >
        <h1 id="logo" style={{ margin: 0 }}>Logo</h1>
      </div>

      <div 
        style={{
          display: isOpen ? 'block' : 'flex', 
          flexDirection: 'column', 
          position: 'absolute', 
          right: 0, 
          top: '50px', 
          backgroundColor: '#F5F5F5', 
          width: '100%', 
          transition: 'max-height 0.3s ease-in-out',
          maxHeight: isOpen ? '200px' : '0', 
          overflow: 'hidden'
        }}
        role="navigation" 
        aria-label="Main Navigation"
      >
        <button 
          onClick={toggleMenu} 
          style={{
            backgroundColor: 'transparent', 
            border: 'none', 
            cursor: 'pointer', 
            padding: 0, 
            fontSize: '16px', 
            fontWeight: 'bold', 
            color: '#333333', 
            outline: 'none'
          }}
          aria-expanded={isOpen}
        >
          ☰
        </button>
        <nav style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
          {['Home', 'Login', 'Register'].map((link) => (
            <a 
              key={link}
              href={`/${link.toLowerCase()}`} 
              style={{
                padding: '10px', 
                fontSize: '16px', 
                fontWeight: 'bold', 
                color: '#333333', 
                textDecoration: 'none', 
                transition: 'background-color 0.3s',
                display: 'block'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#340487'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              tabIndex="0"
              role="button"
              aria-label={link}
            >
              {link}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;