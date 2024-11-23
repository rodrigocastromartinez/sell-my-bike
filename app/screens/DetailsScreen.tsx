import { useRef } from "react";
import { SafeAreaView, View, Text, ActivityIndicator } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useStoredDate } from "@/hooks/useStoredDate";
import {
  CenteredContainer,
  DetailsHeader,
  VehicleMap,
  DetailsFooter,
  ButtonsFooter,
  CustomModal,
  DateModalChildren,
} from "@/components";
import { CustomModalHandler } from "@/components/CustomModal/CustomModal";
import { RootStackParamList } from "../../types/types";
import { tokens } from "@/styles/tokens";
import { useMotorbikeDetails } from "@/hooks/useMotorbikeDetails";

type DetailsScreenRouteProp = RouteProp<RootStackParamList, "details">;

export default function DetailsScreen() {
  const route = useRoute<DetailsScreenRouteProp>();
  const { id } = route.params;
  const { details, error } = useMotorbikeDetails(id);
  const dateModalRef = useRef<CustomModalHandler>(null);

  const { date, handleDateChange, saveDate } = useStoredDate(details?.id);

  const handlePressSetDate = () => {
    saveDate();
    dateModalRef.current?.show();
  };

  return (
    <SafeAreaView>
      <CustomModal ref={dateModalRef}>
        <DateModalChildren
          hide={() => dateModalRef.current?.hide()}
          pickedDate={date}
        />
      </CustomModal>

      {error ? (
        <View style={{ padding: tokens.spacing.m }}>
          <Text>Error: {error}</Text>
        </View>
      ) : (
        <>
          {details ? (
            <CenteredContainer
              padding={tokens.spacing.m}
              gap={tokens.spacing.xs}
            >
              <DetailsHeader name={details.nombre} />
              <VehicleMap vehicleDetails={details} />
              <DetailsFooter details={details} />
              <DateTimePicker
                value={date}
                mode='date'
                display='default'
                onChange={handleDateChange}
                minimumDate={new Date()}
              />
              <ButtonsFooter onPressSetDate={handlePressSetDate} />
            </CenteredContainer>
          ) : (
            <View style={{ padding: tokens.spacing.m }}>
              <ActivityIndicator
                size='large'
                color={tokens.palette.grey[100]}
              />
            </View>
          )}
        </>
      )}
    </SafeAreaView>
  );
}
