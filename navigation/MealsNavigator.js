import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealScreen from '../screens/CategoryMealScreen';
import FavouriteScreen from '../screens/FavouriteScreen';
// import FilterScreen from '../screens/FilterScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import Colors from '../constants/Colors';

const MealsNavigator = createStackNavigator(
  {
    Categories: CategoriesScreen,
    CategoryMeals: { screen: CategoryMealScreen },
    MealDetail: MealDetailScreen
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor:
          Platform.OS === 'android' ? Colors.primaryColor : 'white'
      },
      headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
    }
  }
);

const MealFavTabNavigator = createBottomTabNavigator({
  Meals: MealsNavigator,
  Favourites: FavouriteScreen
});

export default createAppContainer(MealFavTabNavigator);
