import { ShowcaseGalleryItem as ShowcaseGalleryItemInfo } from '@adi-foxx/core/models';

import ShowcaseGalleryItem from './showcase-gallery-item';
import ShowcaseGalleryScroll from './showcase-gallery-scroll';

import { Wrapper } from '../../styles/showcase-gallery/showcase-gallery';

const itemsInfo: ShowcaseGalleryItemInfo[] = [
  {
    id: 'the-foxxes-music',
    buttonUrl: '#foxx-gotuje',
    logoUrl: 'images/project-logos/the-foxxes-music-horizontal.png',
    backgroundUrl: 'images/project-backgrounds/the-foxxes-music.png',
    videoUrl: '/video/project-intros/the-foxxes-music.mp4',
    descriptionText:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus lectus sed metus finibus, sed gravida purus tristique. Ut cursus, est at varius placerat, velit velit finibus lorem, ac posuere nunc nulla non lacus. Sed hendrerit congue nunc. In volutpat aliquet nulla a maximus. In consequat rutrum ante, vel sodales nisl iaculis in. Maecenas eleifend euismod egestas. Morbi eleifend ligula ut posuere semper. Mauris ac interdum justo. Maecenas id nisi ut lacus pulvinar iaculis sit amet et elit. Vivamus accumsan lacinia libero efficitur feugiat. Integer vel pharetra ligula, eget fermentum metus. Donec urna sapien, tempus ultricies vehicula sed, fermentum eu justo. Nulla eleifend vestibulum tortor, id bibendum augue posuere in.',
    buttonText: 'Dowiedz się więcej',
  },
  {
    id: 'the-foxxes-music-2',
    buttonUrl: '#alkoholove-101',
    logoUrl: 'images/project-logos/the-foxxes-music-horizontal.png',
    backgroundUrl: 'images/project-backgrounds/the-foxxes-music.png',
    videoUrl: '/video/project-intros/the-foxxes-music.mp4',
    descriptionText:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus lectus sed metus finibus, sed gravida purus tristique. Ut cursus, est at varius placerat, velit velit finibus lorem, ac posuere nunc nulla non lacus. Sed hendrerit congue nunc. In volutpat aliquet nulla a maximus. In consequat rutrum ante, vel sodales nisl iaculis in. Maecenas eleifend euismod egestas. Morbi eleifend ligula ut posuere semper. Mauris ac interdum justo. Maecenas id nisi ut lacus pulvinar iaculis sit amet et elit. Vivamus accumsan lacinia libero efficitur feugiat. Integer vel pharetra ligula, eget fermentum metus. Donec urna sapien, tempus ultricies vehicula sed, fermentum eu justo. Nulla eleifend vestibulum tortor, id bibendum augue posuere in.',
    buttonText: 'Dowiedz się więcej',
  },
  {
    id: 'the-foxxes-music-3',
    buttonUrl: '#the-foxxes-music',
    logoUrl: 'images/project-logos/the-foxxes-music-horizontal.png',
    backgroundUrl: 'images/project-backgrounds/the-foxxes-music.png',
    videoUrl: '/video/project-intros/the-foxxes-music.mp4',
    descriptionText:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus lectus sed metus finibus, sed gravida purus tristique. Ut cursus, est at varius placerat, velit velit finibus lorem, ac posuere nunc nulla non lacus. Sed hendrerit congue nunc. In volutpat aliquet nulla a maximus. In consequat rutrum ante, vel sodales nisl iaculis in. Maecenas eleifend euismod egestas. Morbi eleifend ligula ut posuere semper. Mauris ac interdum justo. Maecenas id nisi ut lacus pulvinar iaculis sit amet et elit. Vivamus accumsan lacinia libero efficitur feugiat. Integer vel pharetra ligula, eget fermentum metus. Donec urna sapien, tempus ultricies vehicula sed, fermentum eu justo. Nulla eleifend vestibulum tortor, id bibendum augue posuere in.',
    buttonText: 'Dowiedz się więcej',
  },
];

const items = itemsInfo.map((item) => (
  <ShowcaseGalleryItem
    key={item.id}
    buttonUrl={item.buttonUrl}
    logoUrl={item.logoUrl}
    backgroundUrl={item.backgroundUrl}
    videoUrl={item.videoUrl}
    descriptionText={item.descriptionText}
    buttonText={item.buttonText}
  />
));

export const ShowcaseGallery = ({ className }: { className?: string }) => {
  return (
    <Wrapper>
      {items}
      <ShowcaseGalleryScroll />
    </Wrapper>
  );
};

export default ShowcaseGallery;
