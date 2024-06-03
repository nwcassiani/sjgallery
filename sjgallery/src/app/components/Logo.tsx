
const Logo = () => {
  return (
    <div className="logo">
      <div className="logo-letter">
        <h1>S</h1>
      </div>
      <div className="logo-letter" style={{ paddingTop: '50px'}}>
        <h1>J</h1>
      </div>
      <div className="logo-letter" >
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
      <div 
          className="logo-letter blink" 
          style={{
            transform: 'rotate(180deg) scaleY(-1)',
            // visibility: 'hidden'
          }}
        >
        <h1>G</h1>
      </div>
      <div className="logo-lash blink" style={{ 
        right: '125px',
        top: '68px',
        transform: 'rotate(-140deg) scaleY(-1)'
        }}>
        <h2>I</h2>
      </div>
      <div className="logo-lash blink" style={{ 
        right: '52px',
        paddingTop: '55px',
        transform: 'scaleY(-1)'
        }}>
        <h2>I</h2>
      </div>
      <div className="logo-lash blink" style={{ 
        right: '40px',
        paddingTop: '63px',
        transform: 'rotate(140deg)'
        }}>
        <h2>I</h2>
      </div>
    </div>
  );
};

export default Logo;