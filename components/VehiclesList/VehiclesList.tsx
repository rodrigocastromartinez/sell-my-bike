import { useVehiclesList } from "@/hooks/useVehiclesList";
import { FlatList, View } from "react-native";
import Card from "../Card/Card";
import HomeHeader from "../HomeHeader/HomeHeader";
import { styles } from "./VehiclesList.styles";

import { tokens } from "@/styles/tokens";

export default function VehiclesList() {
  const { list, refreshing, fetchList } = useVehiclesList();

  return (
    <View style={styles.listContainer}>
      <FlatList
        data={list}
        renderItem={({ item }) => <Card details={item} />}
        keyExtractor={(item) => item.id}
        refreshing={refreshing}
        onRefresh={() => {
          console.debug("reloading...");
          fetchList();
        }}
        ListHeaderComponent={<HomeHeader />}
      />
    </View>
  );
}
