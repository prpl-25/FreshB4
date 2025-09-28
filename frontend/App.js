/**
 * FreshB4 App - AI-Powered Food Waste Prevention
 *
 * Main application with bottom tab navigation between:
 * - Food Scanner: AI-powered freshness analysis
 * - My Pantry: Inventory tracking and management
 * - Recipes: AI-powered recipe generation
 */

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import { View, Image, Text, StyleSheet } from "react-native";

// Import screens
import FoodScannerScreen from "./screens/FoodScannerScreen";
import PantryScreen from "./screens/PantryScreen";
import RecipesScreen from "./screens/RecipesScreen";

// Import colors for consistent theming
import { colors } from "./styles/colors";

const Tab = createBottomTabNavigator();

// Custom Header Component with Logo
const CustomHeader = ({ title }) => (
  <View style={styles.headerContainer}>
    <Image 
      source={require('./assets/Logo.png')} 
      style={styles.headerLogo}
      resizeMode="contain"
    />
    <Text style={styles.headerTitle}>{title}</Text>
  </View>
);

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Scanner") {
              iconName = focused ? "camera" : "camera-outline";
            } else if (route.name === "Pantry") {
              iconName = focused ? "restaurant" : "restaurant-outline";
            } else if (route.name === "Recipes") {
              iconName = focused ? "book" : "book-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: colors.textSecondary,
          tabBarStyle: {
            backgroundColor: colors.surface,
            borderTopColor: colors.border,
            paddingTop: 8,
            paddingBottom: 8,
            height: 88,
          },
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: "600",
          },
          headerStyle: {
            backgroundColor: colors.primary,
            elevation: 0,
            shadowOpacity: 0,
          },
          headerTintColor: colors.surface,
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 18,
          },
        })}
      >
        <Tab.Screen
          name="Scanner"
          component={FoodScannerScreen}
          options={{
            title: "Food Scanner",
            headerTitle: () => <CustomHeader title="Scanner" />,
          }}
        />
        <Tab.Screen
          name="Pantry"
          component={PantryScreen}
          options={{
            title: "My Pantry",
            headerTitle: () => <CustomHeader title="Pantry" />,
          }}
        />
        <Tab.Screen
          name="Recipes"
          component={RecipesScreen}
          options={{
            title: "Recipes",
            headerTitle: () => <CustomHeader title="Recipes" />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  headerLogo: {
    width: 80,
    height: 45,
    marginRight: 12,
  },
  headerTitle: {
    color: colors.surface,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
