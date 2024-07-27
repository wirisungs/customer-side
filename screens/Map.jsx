import React, { useEffect, useState } from "react";
import MapView, { Marker } from "react-native-maps";
import { geocodeAddress } from "../api";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import * as Location from "expo-location";

const Map = () => {
  const [addressPickup, setAddressPickup] = useState("");
  const [addressDrop, setAddressDrop] = useState("");
  const [coordinates, setCoordinates] = useState("");
  const [coordinatesPickup, setCoordinatesPickup] = useState([]);
  const [coordinatesDrop, setCoordinatesDrop] = useState([]);

  const [mapRegion, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  // const coordinates = [
  //   {
  //     latitude: 10.77185,
  //     longitude: 106.64523,
  //     latitudeDelta: 0.0922,
  //     longitudeDelta: 0.0421,
  //   },
  //   {
  //     latitude: 10.67363,
  //     longitude: 106.733147,
  //     latitudeDelta: 0.0922,
  //     longitudeDelta: 0.0421,
  //   },
  // ];
  const Calcula = () => {
    // Biếm
    const LatitudeStart = coordinatesPickup[0].lat;
    const LongtitudeStart = coordinatesPickup[0].lng;

    const LatitudeDrop = coordinatesDrop[0].lat;
    const LongtitudeDrop = coordinatesDrop[0].lng;

    // Đường kính trái đất
    const R = 6371e3;

    // Đổi tọa đồ sang radian
    const latStart = (LatitudeStart * Math.PI) / 180;
    const latDrop = (LatitudeDrop * Math.PI) / 180;

    // Delta Latitude => radian
    const DeltaLa = ((LatitudeStart - LatitudeDrop) * Math.PI) / 180;
    // Delta Longtitude => radian
    const DeltaLong = ((LongtitudeStart - LongtitudeDrop) * Math.PI) / 180;

    // Áp dụng haversine
    const a =
      Math.sin(DeltaLa / 2) * Math.sin(DeltaLa / 2) +
      Math.cos(latStart) *
        Math.cos(latDrop) *
        Math.sin(DeltaLong / 2) *
        Math.sin(DeltaLong / 2);

    // c => Góc giữa 2 bề mặt hình cầu
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = (R * c) / 1000;
    console.log(distance, "km");

    const kl = 3200;

    // Giao hàng tiết kiệm
    let GHTK;
    if (kl <= 2500) {
      GHTK = 22000;
    } else {
      const klconlai = kl - 2500;
      GHTK = 22000;
      const solan500g = Math.round(klconlai / 500);

      for (let i = 0; i <= solan500g; i++) {
        GHTK += 3500;
      }
    }
    // Giao hàng tên lửa
    let GHN;
    if (distance <= 6) {
      GHTK = 23000;
    } else {
      const QDConLai = distance - 6;
      GHTK = 22000;
      const solan500g = Math.round(QDConLai / 500);

      for (let i = 0; i <= solan500g; i++) {
        GHTK += 3500;
      }
    }

    console.log("GHTK: ", GHTK);
  };

  const handleSearch = async () => {
    try {
      const data1 = await geocodeAddress(addressPickup);
      const data2 = await geocodeAddress(addressDrop);
      console.log(data1.items);
      console.log(data2.items);

      if (data1.items && data1.items.length > 0) {
        const coord1 = data1.items.map((item) => item.position);
        setCoordinatesPickup(coord1);
      } else {
        coordinatesPickup("");
      }

      if (data2.items && data2.items.length > 0) {
        const coord2 = data2.items.map((item) => item.position);
        setCoordinatesDrop(coord2);
      } else {
        coordinatesDrop("");
      }
    } catch (e) {
      console.error("Error coding address", e);
      setCoordinates("");
    }

    console.log("Start: ", coordinatesPickup);
    console.log("Drop: ", coordinatesDrop);
  };

  const userLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Chưa cấp quyền Vị trí");
      return;
    }

    let location = await Location.getCurrentPositionAsync({
      enableHighAccuracy: true,
    });
    setRegion({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });
  };

  useEffect(() => {
    userLocation();
  }, []);

  useEffect(() => {
    if (coordinatesPickup.length > 0 && coordinatesDrop.length > 0) {
      Calcula();
    }
  }, [coordinatesPickup, coordinatesDrop]);
  return (
    <View style={styles.container}>
      <View style={{ zIndex: 10, top: 200, left: 50 }}>
        <TextInput
          placeholder="Enter address"
          onChangeText={setAddressPickup}
          value={addressPickup}
        />
      </View>

      <View style={{ zIndex: 10, top: 200, left: 50 }}>
        <TextInput
          placeholder="Enter address"
          onChangeText={setAddressDrop}
          value={addressDrop}
        />
      </View>

      <TouchableOpacity
        onPress={() => handleSearch()}
        style={{ zIndex: 10, top: 200, left: 50 }}
      >
        <Text> Click</Text>
        {/* {coordinates ? (
          <Text>
            Coordinates: {coordinates[0].lat}, {coordinates[0].lng}
          </Text>
        ) : (
          <Text>No coordinates found</Text>
        )} */}
      </TouchableOpacity>

      <MapView style={styles.map} region={coordinates[0]}>
        {/* <Marker coordinate={coordinates[0]} title="Marker" />
        <Marker coordinate={coordinates[1]} title="Marker" /> */}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    height: "100%",
    width: "100%",
  },
  map: {
    width: "100%",
    height: "100%",
  },
});

export default Map;
