// prettier-ignore
"use client";
import { NextPage } from 'next';
import Typist from 'react-typist-component';

const Home: NextPage = () => {
  return (
    <>
      <h2 className="text-2xl font-bold text-white mb-4">Welcome to My App</h2>
      <h2>I am a&nbsp;</h2>
      <TypistComponent />
    </>
  );
};

const TypistComponent = () => (
  <Typist
    onTypingDone={() => console.log('done')}
    typingDelay={100}
    loop={true}
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

const TypistCursorComponent = () => <span className="blue-text">|</span>;

export default Home;
