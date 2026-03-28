import Image from 'next/image';

const HeroImage = () => (
  <div className="relative h-[280px] w-[280px] shrink-0 overflow-hidden rounded-full bg-black ring-4 ring-white sm:h-[340px] sm:w-[340px] sm:mr-16">
    <Image
      src="/images/merville-profile-pic.jpeg"
      alt="Jean Merville"
      fill
      sizes="(max-width: 640px) 280px, 340px"
      className="object-cover"
      priority
    />
  </div>
);

export default HeroImage;
