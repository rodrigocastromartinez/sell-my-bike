import { useVehiclesList } from "@/hooks/useVehiclesList";
import { FlatList, View } from "react-native";
import Card from "../Card/Card";
import HomeHeader from "../HomeHeader/HomeHeader";

import { tokens } from "@/styles/tokens";

export default function VehiclesList() {
  const { list } = useVehiclesList();

  return (
    <View style={{ padding: tokens.spacing.l }}>
      <FlatList
        data={list}
        renderItem={({ item }) => <Card id={item.id} />}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={<HomeHeader />}
      />
    </View>
  );
}
