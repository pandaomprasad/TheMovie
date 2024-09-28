import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Header from "../Components/header";
import TodayTrending from "../Components/TodayTrending";
import {
  popularMovies,
  upComingMovies,
  nowPlayingMovies,
  baseImagePath,
} from "../Api/apicalls";
import theme from "../Theme/theme";
import CategoryHeader from "../Components/category_header";
import Moviecard from "../Components/moviecard";

const getNowplayingmoviesList = async () => {
  try {
    let response = await fetch(nowPlayingMovies);
    let json = await response.json();
    return json;
  } catch (error) {
    console.log("error in getNowplayingmovies", error);
  }
};

const getUpcomingmoviesList = async () => {
  try {
    let response = await fetch(upComingMovies);
    let json = await response.json();
    return json;
  } catch (error) {
    console.log("error in getUpcomingmovies", error);
  }
};

const getPopularmoviesList = async () => {
  try {
    let response = await fetch(popularMovies);
    let json = await response.json();
    return json;
  } catch (error) {
    console.log("error in getPopularmovies", error);
  }
};

export default function Homescreen() {
  const [nowplayingmoviesList, setNowplayingmoviesList] = useState(undefined);
  const [upcomingmoviesList, setUpcomingmoviesList] = useState(undefined);
  const [popularmoviesList, setPopularmoviesList] = useState(undefined);

  useEffect(() => {
    (async () => {
      let tempnowplaying = await getNowplayingmoviesList();
      setNowplayingmoviesList(tempnowplaying?.results);

      let tempupcoming = await getUpcomingmoviesList();
      setUpcomingmoviesList(tempupcoming?.results);

      let temppopular = await getPopularmoviesList();
      setPopularmoviesList(temppopular?.results);
    })();
  }, []);

  console.log(nowplayingmoviesList)

  if (
    nowplayingmoviesList == undefined ||
    nowplayingmoviesList == null ||
    upcomingmoviesList == undefined ||
    upcomingmoviesList == null ||
    popularmoviesList == undefined ||
    popularmoviesList == null
  ) {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar hidden />
        <Header />
        <View style={styles.loadingContainer}>
          <ActivityIndicator size={"large"} color={theme.colors.red} />
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden />
      <Header />
      {/* <TodayTrending /> */}
      <CategoryHeader title={"Now Playing"} />
      <CategoryHeader title={"Upcoming Movies"} />
      <CategoryHeader title={"Popular Movies"} />
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "dimgray",
    flex: 1,
  },
  loadingContainer: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignSelf: "center",
  },
});
