import Image from 'next/image';
import urlForImage from '../studio/lib/utils';
import type { Author } from '../types/schema-types';

interface ProfileProps extends Omit<Author, 'bio'> {
  lastUpdate: string;
}

export const Profile = ({ name, image, lastUpdate }: ProfileProps) => {
  return (
    <div className="flex items-center justify-start">
      <Image
        alt={''}
        aria-hidden="true"
        src={urlForImage(image.asset._ref).url()}
        className={`rounded-full`}
        width={40}
        height={40}
      />
      <div className="grid ml-3">
        <p className="text-orange-700">{name}</p>
        <p className="font-light text-xs">
          {/* TODO Refactor date */}
          Last update:{' '}
          {new Date(lastUpdate).toLocaleDateString('en-US', {
            month: 'long',
            year: 'numeric',
          })}
        </p>
      </div>
    </div>
  );
};
