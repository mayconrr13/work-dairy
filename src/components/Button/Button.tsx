import { ReactNode } from 'react';
import { TouchableOpacityProps } from 'react-native';
import { GenericTouchableProps } from 'react-native-gesture-handler/lib/typescript/components/touchables/GenericTouchable';
import { Container, Label } from './styles';

export type ButtonApparence = 'primary' | 'danger' | 'special';
export interface ButtonProps
  extends Partial<Readonly<TouchableOpacityProps & GenericTouchableProps>> {
  apparence?: ButtonApparence;
  icon?: ReactNode;
  label: string;
}

const Button = ({ apparence = 'primary', icon, label, ...rest }: ButtonProps) => {
  return (
    <Container {...rest} apparence={apparence}>
      {icon}
      {label ? <Label apparence={apparence}>{label}</Label> : null}
    </Container>
  );
};

export default Button;
