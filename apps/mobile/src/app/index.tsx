import { ROLES } from '@taskflow/shared';
import { Text, View } from 'react-native';

export default function Index() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>TaskFlow</Text>
      <Text>Roles: {ROLES.join(', ')}</Text>
    </View>
  );
}
