import React from 'react';
import {
  DairyContainer,
  DairyImage,
  DairyInfo,
  DairyDetails,
  DairyUsers,
  DairyLastUpdate,
  DairyName,
  StatusBadge,
  StatusIndicator,
  StatusName,
  DairyImageContainer,
  ExtraUsers,
  ExtraUsersAmount,
} from './styles';
import DefaultThumbnail from '../../../assets/splash.jpg';
import Avatar from '../../../components/Avatar';

export interface DairyItem {
  name: string;
  updatedAt: string;
  status: string;
  thumbnailUrl: string;
  users: User[];
}

export interface User {
  name: string;
  avatar: string;
}

const Dairy = (dairy: DairyItem) => {
  return (
    <DairyContainer activeOpacity={0.5} onPress={() => console.log('card', dairy.name)}>
      <DairyImageContainer>
        <StatusBadge>
          <StatusIndicator />
          <StatusName>{dairy.status}</StatusName>
        </StatusBadge>
        <DairyImage contentFit="cover" source={dairy.thumbnailUrl || DefaultThumbnail} />
      </DairyImageContainer>
      <DairyInfo>
        <DairyDetails>
          <DairyName>{dairy.name}</DairyName>
          <DairyLastUpdate>
            última atualizaçcão: {dairy.updatedAt.slice(0, 10).split('-').reverse().join('/')}
          </DairyLastUpdate>
        </DairyDetails>
        <DairyUsers>
          {dairy.users.map((user, index) => {
            if (index >= 2) return null;
            return <Avatar key={user.name} name={user.name} url={user.avatar} />;
          })}

          {dairy.users.length > 2 ? (
            <ExtraUsers>
              <ExtraUsersAmount>+{dairy.users.length - 2}</ExtraUsersAmount>
            </ExtraUsers>
          ) : null}
        </DairyUsers>
      </DairyInfo>
    </DairyContainer>
  );
};

export default Dairy;
