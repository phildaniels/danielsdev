import ThemeSlider from '@/components/theme-slider/theme-slider';
import Tagline from '@/components/tagline/tagline';
import { type NextPage } from 'next';
// import { useTheme } from 'next-themes';

const Home: NextPage = () => {
  // const { theme } = useTheme();
  // const textColor = theme === 'dark' ? 'text-white' : 'text-black';
  const textColor = 'text-black';
  return (
    <>
      <h2 className={`text-2xl font-bold mb-4 ${textColor}`}>
        Welcome to My App
      </h2>
      <h2>I am a&nbsp;</h2>
      <Tagline />
    </>
  );
};

export default Home;
