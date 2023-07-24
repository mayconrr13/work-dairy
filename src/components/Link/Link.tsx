import { TouchableOpacityProps } from 'react-native';
import { GenericTouchableProps } from 'react-native-gesture-handler/lib/typescript/components/touchables/GenericTouchable';
import { Container, Label } from './styles';

export type LinkApparence = 'primary' | 'danger' | 'special';
export type LinkAlignment = 'center' | 'left' | 'right';
export interface LinkProps
  extends Partial<Readonly<TouchableOpacityProps & GenericTouchableProps>> {
  apparence?: LinkApparence;
  label: string;
  textAlign?: LinkAlignment;
}

const Link = ({ apparence = 'primary', label, textAlign = 'center', ...rest }: LinkProps) => {
  return (
    <Container {...rest} apparence={apparence}>
      {label ? (
        <Label apparence={apparence} textAlign={textAlign}>
          {label}
        </Label>
      ) : null}
    </Container>
  );
};

export default Link;
