
const Logo = () => {
  return (
    <div className="logo">
      <div className="logo-letter">
        <h1>S</h1>
      </div>
      <div className="logo-letter" style={{ paddingTop: '50px'}}>
        <h1>J</h1>
      </div>
      <div className="logo-letter">
        <h1>G</h1>
      </div>
      <div className="logo-lash" style={{ 
        right: '27px',
        transform: 'rotate(-40deg)'
        }}>
        <h2>I</h2>
      </div>
      <div className="logo-lash" style={{ 
        right: '51px',
        paddingTop: '5px'
        }}>
        <h2>I</h2>
      </div>
      <div className="logo-lash" style={{ 
        right: '78px',
        transform: 'rotate(40deg)'
        }}>
        <h2>I</h2>
      </div>
    </div>
  );
};

export default Logo;