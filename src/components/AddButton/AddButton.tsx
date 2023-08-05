import { Feather } from '@expo/vector-icons';
import { customTheme } from '../../theme/customTheme';
import { Container } from './styles';
import { GenericTouchableProps } from 'react-native-gesture-handler/lib/typescript/components/touchables/GenericTouchable';
import { TouchableOpacityProps } from 'react-native';

export interface AddButtonProps
  extends Partial<Readonly<TouchableOpacityProps & GenericTouchableProps>> {
  buttonSize?: number;
  iconSize?: number;
}

const AddButton = ({ buttonSize = 64, iconSize = 32, ...rest }: AddButtonProps) => {
  return (
    <Container buttonSize={buttonSize} {...rest}>
      <Feather name="plus" size={iconSize} color={customTheme.colors.white} />
    </Container>
  );
};

export default AddButton;
