'use client';
import Typist from 'react-typist-component';
import TypistCursorComponent from './components/typist-cursor-component';

const Tagline = () => (
  <Typist
    onTypingDone={() => console.log('done')}
    typingDelay={100}
    loop={true}
    cursor={<TypistCursorComponent />}
  >
    <div className="blue-text">Software Engineer</div>
    <Typist.Delay ms={1000} />
    <Typist.Backspace count={'Software Engineer'.length} />
    <div className="blue-text">Lead Developer</div>
    <Typist.Delay ms={1000} />
    <Typist.Backspace count={'Lead Developer'.length} />
    <div className="blue-text">Software Architect</div>
    <Typist.Delay ms={1000} />
    <Typist.Backspace count={'Software Architect'.length} />
  </Typist>
);

export default Tagline;
