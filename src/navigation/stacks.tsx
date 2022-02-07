import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../scenes/Login';
import Dashboard from '../scenes/Dashboard';
import ViewPost from '../scenes/ViewPost';
import { Routes } from '../utils/enums';

const Public = createNativeStackNavigator();
const Private = createNativeStackNavigator();

export const PrivateStack = (): JSX.Element => (
  <Private.Navigator initialRouteName={Routes.DASHBOARD}>
    <Private.Screen name={Routes.DASHBOARD} component={Dashboard} />
    <Private.Screen name={Routes.VIEW_POST} component={ViewPost} />
  </Private.Navigator>
);

export const PublicStack = (): JSX.Element => (
  <Public.Navigator initialRouteName={Routes.LOGIN}>
    <Public.Screen name={Routes.LOGIN} component={Login} />
  </Public.Navigator>
);
