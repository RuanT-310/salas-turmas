import { createDrawerNavigator } from '@react-navigation/drawer'
import { MaterialIcons } from '@expo/vector-icons'

import { Home } from '@/app/Home'


const Drawer = createDrawerNavigator()

export function DrawerRoutes() {
  return (
    <Drawer.Navigator
      initialRouteName="home"
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: '#2C46B1',
        drawerInactiveTintColor: '#444444',
      }}
    >
      <Drawer.Screen
        name="home"
        component={Home}
        options={{
          drawerLabel: 'Início',
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="home" color={color} size={size} />
          ),
        }}
      />

    </Drawer.Navigator>
  )
}