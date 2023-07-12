'use client';
import { NextPage } from 'next';
import { useTheme } from 'next-themes';
import Typist from 'react-typist-component';

const Home: NextPage = () => {
  const { theme } = useTheme();
  const textColor = theme === 'dark' ? 'text-white' : 'text-black';
  return (
    <>
      <h2 className={`text-2xl font-bold mb-4 ${textColor}`}>
        Welcome to My App
      </h2>
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

const TypistCursorComponent = () => <span className="blue-text">|</span>;

export default Home;
