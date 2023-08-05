import { useMemo } from 'react';
import { Container, AvatarImage, AvatarInitials, Border } from './styles';

export interface AvatarProps {
  url?: string;
  name: string;
  size?: number;
}

const Avatar = ({ url = '', name, size = 32 }: AvatarProps) => {
  const initials = useMemo(() => {
    const [firstName, lastName] = name.split('');
    return `${firstName.charAt(0).toUpperCase()}${lastName.charAt(0).toUpperCase()}`;
  }, [name]);

  return (
    <Container size={size}>
      {url ? (
        <AvatarImage source={url} contentFit="cover" size={size} />
      ) : (
        <AvatarInitials>{initials}</AvatarInitials>
      )}

      <Border size={size}></Border>
    </Container>
  );
};

export default Avatar;
