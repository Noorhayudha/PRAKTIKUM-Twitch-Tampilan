import React, { useState } from "react";
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image, TextInput, SafeAreaView, StatusBar, Platform } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const games = [
  {
    id: 1,
    title: "VALORANT",
    viewers: "73,6K",
    image: "https://static-cdn.jtvnw.net/ttv-boxart/516575-272x380.jpg",
    tags: ["FPS", "Shooter"]
  },
  {
    id: 2,
    title: "Just Chatting",
    viewers: "192,9K",
    image: "https://static-cdn.jtvnw.net/ttv-boxart/509658-272x380.jpg",
    tags: ["IRL"]
  },
  {
    id: 3,
    title: "Call of Duty: Black Ops 6",
    viewers: "67,8K",
    image: "https://static-cdn.jtvnw.net/ttv-boxart/1672324422_IGDB-272x380.jpg",
    tags: ["FPS", "Shooter"],
    isNew: true
  },
  {
    id: 4,
    title: "League of Legends",
    viewers: "239,8K",
    image: "https://static-cdn.jtvnw.net/ttv-boxart/21779-138x184.jpg",
    tags: ["RPG"]
  },
  {
    id: 5,
    title: "Minecraft",
    viewers: "67K",
    image: "https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-272x380.jpg",
    tags: ["Simulation"]
  },
  {
    id: 6,
    title: "Fortnite",
    viewers: "238,9K",
    image: "https://static-cdn.jtvnw.net/ttv-boxart/33214_IGDB-210x280.jpg",
    tags: ["Shooter", "RPG"]
  },
  {
    id: 7,
    title: "Apex Legends",
    viewers: "85,2K",
    image: "https://static-cdn.jtvnw.net/ttv-boxart/511224-272x380.jpg",
    tags: ["Battle Royale"]
  },
  {
    id: 8,
    title: "Grand Theft Auto V",
    viewers: "104,3K",
    image: "https://static-cdn.jtvnw.net/ttv-boxart/32982-272x380.jpg",
    tags: ["Action"]
  },
  {
    id: 9,
    title: "Dota 2",
    viewers: "56,7K",
    image: "https://static-cdn.jtvnw.net/ttv-boxart/29595-272x380.jpg",
    tags: ["MOBA"]
  }
];

const App = () => {
  const [activeTab, setActiveTab] = useState("Browse");

  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#0E0E10"
        translucent={true}
      />
      <SafeAreaView style={styles.topSafeArea} />
      <SafeAreaView style={styles.container}>
        {/* Header Search */}
        <View style={styles.searchHeader}>
          <View style={styles.searchContainer}>
            <Icon name="magnify" size={24} color="#fff" style={styles.searchIcon} />
            <TextInput
              style={styles.searchInput}
              placeholder="Search"
              placeholderTextColor="#666"
            />
          </View>
        </View>

        {/* Category Tabs */}
        <View style={styles.tabsContainer}>
          <View style={styles.tabs}>
            <TouchableOpacity style={styles.tabActive}>
              <Text style={styles.tabTextActive}>Categories</Text>
              <View style={styles.tabIndicator} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.tab}>
              <Text style={styles.tabText}>Live Channels</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <Icon name="tune-variant" size={24} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* Game Grid */}
        <ScrollView style={styles.content}>
          <View style={styles.gameGrid}>
            {games.map((game) => (
              <View key={game.id} style={styles.gameCard}>
                <View style={styles.imageContainer}>
                  <Image
                    source={{ uri: game.image }}
                    style={styles.gameImage}
                  />
                  {game.isNew && (
                    <View style={styles.newTag}>
                      <Text style={styles.newTagText}>NEW</Text>
                    </View>
                  )}
                </View>
                <Text style={styles.gameTitle}>{game.title}</Text>
                <View style={styles.viewerContainer}>
                  <View style={styles.liveDot} />
                  <Text style={styles.viewerCount}>{game.viewers}</Text>
                </View>
                <View style={styles.tagsContainer}>
                  {game.tags.map((tag, index) => (
                    <View key={index} style={styles.tag}>
                      <Text style={styles.tagText}>{tag}</Text>
                    </View>
                  ))}
                </View>
              </View>
            ))}
          </View>
        </ScrollView>

        {/* Bottom Navigation */}
        <View style={styles.bottomNav}>
          <TouchableOpacity style={styles.navItem}>
            <Icon name="home" size={24} color="#fff" />
            <Text style={styles.navText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.navItem, styles.navItemActive]}>
            <Icon name="magnify" size={24} color="#a970ff" />
            <Text style={[styles.navText, styles.navTextActive]}>Browse</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItemCenter}>
            <View style={styles.plusButton}>
              <Icon name="plus" size={24} color="#fff" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <Icon name="bell" size={24} color="#fff" />
            <Text style={styles.navText}>Activity</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <Icon name="account" size={24} color="#fff" />
            <Text style={styles.navText}>Profile</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  topSafeArea: {
    flex: 0,
    backgroundColor: "#0E0E10",
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  container: {
    flex: 1,
    backgroundColor: "#0E0E10",
  },
  searchHeader: {
    padding: 16,
    paddingTop: Platform.OS === 'android' ? 8 : 16,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#252527",
    borderRadius: 8,
    padding: 8,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    color: "#fff",
    fontSize: 16,
  },
  tabsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  tabs: {
    flexDirection: "row",
  },
  tab: {
    marginRight: 24,
  },
  tabActive: {
    marginRight: 24,
  },
  tabText: {
    color: "#fff",
    fontSize: 18,
  },
  tabTextActive: {
    color: "#a970ff",
    fontSize: 18,
    fontWeight: "bold",
  },
  tabIndicator: {
    height: 2,
    backgroundColor: "#a970ff",
    marginTop: 8,
  },
  content: {
    flex: 1,
  },
  gameGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 8,
  },
  gameCard: {
    width: "33.33%",
    padding: 8,
  },
  imageContainer: {
    position: "relative",
  },
  gameImage: {
    width: "100%",
    aspectRatio: 0.75,
    borderRadius: 8,
  },
  newTag: {
    position: "absolute",
    top: 8,
    right: 8,
    backgroundColor: "#a970ff",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  newTagText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
  gameTitle: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 8,
  },
  viewerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  liveDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#ff0000",
    marginRight: 4,
  },
  viewerCount: {
    color: "#fff",
    fontSize: 12,
  },
  tagsContainer: {
    flexDirection: "row",
    flexWrap: "nowrap",
    overflow: "hidden",
    marginTop: 3,
  },
  tag: {
    backgroundColor: "#323234",
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginRight: 4,
    marginBottom: 4,
  },
  tagText: {
    color: "#fff",
    fontSize: 12,
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#18181B",
    paddingBottom: Platform.OS === 'ios' ? 34 : 20,
    borderTopWidth: 0.5,
    borderTopColor: "#333",
  },
  navItem: {
    alignItems: "center",
    padding: 8,
  },
  navItemActive: {
    alignItems: "center",
    padding: 8,
  },
  navItemCenter: {
    padding: 8,
  },
  plusButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#323234",
    justifyContent: "center",
    alignItems: "center",
  },
  navText: {
    color: "#fff",
    fontSize: 12,
    marginTop: 4,
  },
  navTextActive: {
    color: "#a970ff",
  },
});

export default App;