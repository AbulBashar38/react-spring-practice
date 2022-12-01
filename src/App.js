import { useState } from 'react';
import { useSpring, animated, config } from 'react-spring'
import './App.css';

function App() {
  const [flip, set] = useState(false)
  const [flip2, set2] = useState(false)
  const [flip3, set3] = useState(false)
  const props = useSpring({
    from: { background: 'linear-gradient(to right, #009fff, #ec2f4b)' },
    to: { background: 'linear-gradient(to right, #ecb939, #854442)' },
    loop: { reverse: true },
    delay: 200,
    config: { duration: 2000 },
    reverse: flip2,
    pause: flip3,
    // onRest: () => console.log('onrest is calling'),
    // onStart: () => console.log('onstart is calling')
  })

  const styles = useSpring({
    loop: { reverse: true },
    from: { rotateZ: 0 },
    to: { rotateZ: 360 },
    pause: flip3
  })

  const comesLeft = useSpring({
    from: { opacity: 0, },
    to: { opacity: 1, },
    config: { duration: 1000 },
    delay: 1000
  })
  const floating = useSpring({
    from: { marginTop: '-20px' },
    to: { marginTop: '20px' },
    loop: { reverse: true },
    config: { duration: 1500 }
  })
  return (
    <div className="App">
      <animated.h1 style={props}>this is simple react spring animation</animated.h1>
      <animated.div style={{
        width: 80,
        height: 80,
        backgroundColor: '#46e891',
        borderRadius: 16,
        ...styles
      }}>

      </animated.div>
      <button onClick={() => { set(!flip) }}>Click me</button>
      <button onClick={() => { set2(!flip2) }}>Click me2</button>
      <button onClick={() => { set3(!flip3) }}>Click me3</button>

      <animated.div style={{ marginTop: '200px', ...comesLeft }}>
        <animated.div style={{ height: "100px", width: '50%', backgroundColor: 'red' }}><h1>This is basar</h1></animated.div>
        <animated.div style={{ height: '100px', width: '50%', backgroundColor: 'green' }}><h1>This is bodor</h1></animated.div>
        <animated.div style={{ height: '100px', width: '50%', backgroundColor: 'yellow' }}><h1>This is maruf</h1></animated.div>
      </animated.div>

      <div style={{
        marginTop: '100px',
        width: '200px',
        height: '200px',
        backgroundColor: 'tomato',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <animated.div style={{
          width: 80,
          height: 80,
          backgroundColor: '#46e891',
          borderRadius: 16,
          ...floating
        }}></animated.div>
      </div>
    </div>
  );
}

export default App;
