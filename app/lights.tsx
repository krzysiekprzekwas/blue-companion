import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Ship, ships } from '@/constants/Ships';
import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { Stack, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Modal, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


type ShipType = 'All' | 'Power Vessel' | 'Fishing Vessel';

const SHIP_TYPES: { label: string; value: ShipType }[] = [
  { label: 'All Vessels', value: 'All' },
  { label: 'Power Vessels', value: 'Power Vessel' },
  { label: 'Fishing Vessels', value: 'Fishing Vessel' },
];

export default function LightsScreen() {
  const router = useRouter();
  const [selectedType, setSelectedType] = useState<ShipType>('All');
  const [isPickerVisible, setIsPickerVisible] = useState(false);
  
  const filteredShips = selectedType === 'All' 
    ? ships 
    : ships.filter(ship => ship.type === selectedType);

  const powerVessels = filteredShips.filter(ship => ship.type === 'Power Vessel');
  const fishingVessels = filteredShips.filter(ship => ship.type === 'Fishing Vessel');

  const selectedLabel = SHIP_TYPES.find(type => type.value === selectedType)?.label || 'All Vessels';

  const renderShipGroup = (title: string, vessels: Ship[]) => {
    if (vessels.length === 0) return null;
    
    return (
      <ThemedView key={title} style={styles.groupContainer}>
        <ThemedText type="title">{title}</ThemedText>
        {vessels.map((ship) => (
          <Pressable
            key={ship.id}
            style={({ pressed }) => [
              styles.shipTile,
              { opacity: pressed ? 0.7 : 1 },
            ]}
            onPress={() => router.push({
              pathname: '/ship-details',
              params: { name: ship.name, id: ship.id, lightDescription: ship.lightDescription },
            })}>
            <Image
              source={ship.top}
              style={styles.shipImage}
              contentFit="contain"
            />
            <View style={styles.shipInfo}>
              <Text style={styles.titleText}>{ship.name}</Text>
              <Text style={styles.categoryText}>{ship.category}</Text>
            </View>
          </Pressable>
        ))}
      </ThemedView>
    );
  };

  return (
    <>
      <Stack.Screen
        options={{
          title: "Lights",
          headerTitleAlign: 'center',
        }}
      />
      <ThemedView style={styles.container}>
        <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
          <ThemedView style={styles.descriptionContainer}>
            <Text style={styles.descriptionText}>
              Navigation lights are essential safety features that help vessels determine the type, size, and direction of other ships at night or in poor visibility. This guide shows the required lighting configurations for different types of vessels.
            </Text>
            <Pressable
              style={({ pressed }) => [
                styles.showMoreButton,
                { opacity: pressed ? 0.7 : 1 },
              ]}
              onPress={() => router.push('/lights-wiki')}>
              <ThemedText style={styles.showMoreText}>Learn More About Nautical Lights</ThemedText>
              <Ionicons name="chevron-forward" size={20} color="#C0A989" />
            </Pressable>
          </ThemedView>

          <ThemedView style={styles.filterContainer}>
            <ThemedText style={styles.filterLabel}>Filter by vessel type:</ThemedText>
            <Pressable
              style={({ pressed }) => [
                styles.pickerButton,
                { opacity: pressed ? 0.7 : 1 },
              ]}
              onPress={() => setIsPickerVisible(true)}>
              <ThemedText style={styles.pickerButtonText}>{selectedLabel}</ThemedText>
              <Ionicons name="chevron-down" size={20} color="#C0A989" />
            </Pressable>
          </ThemedView>

          <Modal
            visible={isPickerVisible}
            transparent
            animationType="fade"
            onRequestClose={() => setIsPickerVisible(false)}>
            <TouchableOpacity
              style={styles.modalOverlay}
              activeOpacity={1}
              onPress={() => setIsPickerVisible(false)}>
              <ThemedView style={styles.modalContent}>
                {SHIP_TYPES.map((type) => (
                  <Pressable
                    key={type.value}
                    style={({ pressed }) => [
                      styles.optionButton,
                      { opacity: pressed ? 0.7 : 1 },
                      selectedType === type.value && styles.selectedOption,
                    ]}
                    onPress={() => {
                      setSelectedType(type.value);
                      setIsPickerVisible(false);
                    }}>
                    <ThemedText
                      style={[
                        styles.optionText,
                        selectedType === type.value && styles.selectedOptionText,
                      ]}>
                      {type.label}
                    </ThemedText>
                  </Pressable>
                ))}
              </ThemedView>
            </TouchableOpacity>
          </Modal>

          {renderShipGroup('Power Vessels', powerVessels)}
          {renderShipGroup('Fishing Vessels', fishingVessels)}
        </ScrollView>
      </ThemedView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 16,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    gap: 32,
    paddingBottom: 20,
  },
  descriptionContainer: {
    gap: 16,
    padding: 16,
    backgroundColor: '#1B2A47',
    borderRadius: 12,
  },
  descriptionText: {
    fontSize: 16,
    lineHeight: 24,
    color: 'white',
  },
  showMoreButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingVertical: 8,
  },
  showMoreText: {
    color: '#C0A989',
    fontSize: 16,
    fontWeight: '600',
  },
  filterContainer: {
    gap: 8,
  },
  filterLabel: {
    fontSize: 16,
    fontWeight: '600',
  },
  pickerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#1B2A47',
    borderRadius: 12,
    padding: 16,
  },
  pickerButtonText: {
    fontSize: 16,
    color: 'white',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#1B2A47',
    borderRadius: 12,
    padding: 16,
    gap: 8,
  },
  optionButton: {
    padding: 16,
    borderRadius: 8,
  },
  selectedOption: {
    backgroundColor: 'rgba(192, 169, 137, 0.2)',
  },
  optionText: {
    fontSize: 16,
    color: 'white',
  },
  selectedOptionText: {
    color: '#C0A989',
    fontWeight: '600',
  },
  groupContainer: {
    gap: 16,
  },
  shipTile: {
    flexDirection: 'column',
    backgroundColor: '#1B2A47',
    borderRadius: 12,
    padding: 16,
    gap: 8,
    alignItems: 'stretch',
  },
  shipImage: {
    width: '100%', 
    height: 160,
  },
  shipInfo: {
    width: '100%', 
    gap: 4,
    alignItems: 'center',
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  categoryText: {
    color: 'white',
    marginBottom: 12,
  },
});