import { Route } from '@adi-foxx/core/models';
import {
  Wrapper,
  Title,
  LinksContainer,
  Link,
  Icon,
} from '../../styles/showcase-points-video/showcase-points-video-social-links';

export const ShowcasePointsVideoSocialLinks = ({
  id,
  className,
}: {
  id?: string;
  className?: string;
}) => {
  const socialMediaLinksInfo: Route[] = [
    {
      id: 'foxx-gotuje-yt',
      label: 'YouTube',
      url: 'https://www.youtube.com/c/FoxxGotuje',
      imageUrl: 'images/social-icons/youtube.png',
    },
    {
      id: 'foxx-gotuje-ig',
      label: 'Instagram',
      url: 'https://www.instagram.com/foxx.gotuje/',
      imageUrl: 'images/social-icons/instagram.png',
    },
    {
      id: 'foxx-gotuje-tt',
      label: 'TikTok',
      url: 'https://www.tiktok.com/@foxx.gotuje',
      imageUrl: 'images/social-icons/tiktok.png',
    },
  ];

  const socialMediaLinks = socialMediaLinksInfo.map((item) => (
    <Link key={item.id} href={item.url}>
      <Icon src={item.imageUrl} />
    </Link>
  ));

  return (
    <Wrapper id={id}>
      <Title>Sprawdź kanał na</Title>
      <LinksContainer>{socialMediaLinks}</LinksContainer>
    </Wrapper>
  );
};

export default ShowcasePointsVideoSocialLinks;
