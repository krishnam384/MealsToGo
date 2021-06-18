import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components/native";
import * as firebase from "firebase";
import { theme } from "./src/infrastructure/theme";
import { Navigation } from "./src/infrastructure/navigation/index";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { RestaurantsContextprovider } from "./src/services/restaurants/restaurants.context";
import { FavouriteContextProvider } from "./src/services/favourites/favourites.context";
import { LocationContextProvider } from "./src/services/locations/location.context";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyB5D11yRSGGciO84e9m2nTG_bkOcw4DXX8",
  authDomain: "mealstogo-efdc9.firebaseapp.com",
  projectId: "mealstogo-efdc9",
  storageBucket: "mealstogo-efdc9.appspot.com",
  messagingSenderId: "620960843400",
  appId: "1:620960843400:web:68343ede47c6d56856413d",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      firebase
        .auth()
        .signInWithEmailAndPassword("email@gmail.com", "Password")
        .then((user) => {
          console.log(user);
          setIsAuthenticated(true);
        })
        .catch((e) => {
          console.log(e);
        });
    }, 2000);
  }, []);
  let [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  let [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  if (!isAuthenticated) return null;
  return (
    <>
      <ThemeProvider theme={theme}>
        <FavouriteContextProvider>
          <LocationContextProvider>
            <RestaurantsContextprovider>
              <Navigation />
            </RestaurantsContextprovider>
          </LocationContextProvider>
        </FavouriteContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
