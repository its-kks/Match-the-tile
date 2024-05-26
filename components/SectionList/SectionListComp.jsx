import { SectionList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function SectionListComp() {
  users = [
    {
      id: 1,
      name: 'Peter',
      data: ["Java", "JS", "Spring"]
    },
    {
      id: 2,
      name: 'John',
      data: ["Python", "Django", "JS"]
    },
    {
      id: 3,
      name: 'Jane',
      data: ["C#", ".NET", "Azure"]
    },
    {
      id: 4,
      name: 'Alice',
      data: ["Ruby", "Rails", "JS"]
    },
    {
      id: 5,
      name: 'Bob',
      data: ["PHP", "Laravel", "MySQL"]
    },
  ]
  return (
    <View>
      <Text>Section List</Text>
      <SectionList
        sections={users}
        renderItem={({ item }) => (
          <Text>{item}</Text>
        )}
        renderSectionHeader={({ section: { name } }) => (
          <Text>{name}</Text>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({})