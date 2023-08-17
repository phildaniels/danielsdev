import Image from 'next/image';
import { type ProfileAndAvatarProps } from './types';
import ThemeSlider from '../theme-slider/theme-slider';

const ProfileAvatarAndTitle: React.FC<ProfileAndAvatarProps> = ({
  textColor,
}) => {
  return (
    <div className="flex flex-row">
      <div className="flex flex-col">
        <div className="flex flex-row">
          <Image
            priority
            alt="profile picture"
            src="https://avatars.githubusercontent.com/u/11820265"
            className="rounded-full w-16 h-16 flex-shrink-1 align-middle"
            width={360}
            height={360}
          />
          <div className="flex flex-col self-center px-4">
            <h1 className={`text-xl font-bold ${textColor}`}>Phil Daniels</h1>
          </div>
        </div>
        <h4>
          <i className={textColor}>Software Engineer and Architect</i>
        </h4>
      </div>
      <ThemeSlider />
    </div>
  );
};

export default ProfileAvatarAndTitle;
