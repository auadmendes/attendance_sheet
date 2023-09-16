import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  FlatList
} from "react-native";

import { styles } from "./styles";

import { Participant } from "../components/Participant";

export function Home() {
  const [participants, setParticipants] = useState<string[]>([])
  const [participantName, SetParticipantName] = useState('')


  function handleParticipantAdd() {
    if (participants.includes(participantName)) {
      return Alert.alert('Participant Arrived!🙂', `The participant ${participantName} is on the list`)
    } else if (participantName.length < 1) {
      return Alert.alert('Enter a participant to add first.')
    }
    setParticipants(prevState => [...prevState, participantName])
    SetParticipantName('')
  }

  function handleParticipantRemove(name: string) {
    //const filteredParticipants = participants.filter(participant => participant != name)
    //setParticipants(filteredParticipants)

    //return console.log(participants.filter(participant => participant != name))

    //setParticipants(prevState => participants.filter(participant => participant != name))

    Alert.alert("Remove Participant", `Removing the participant ${name}?`, [
      {
        text: 'Yes',

        onPress: () => setParticipants(prevState => participants.filter(participant => participant != name))
      },
      {
        text: 'No',
        style: 'cancel'
      }
    ])
  }


  return (
    <View style={styles.container}>

      <Text key="1" style={styles.eventName}>New event</Text>
      <Text key="2" style={styles.eventDate}>Friday, October 4th, 2023</Text>

      <View style={styles.form}>

        <TextInput
          style={styles.eventInput}
          placeholder="Nome do participante"
          placeholderTextColor="#555"
          //onChangeText={e => SetParticipantName(e)} 2 ways
          onChangeText={SetParticipantName}
          value={participantName}
        />

        <TouchableOpacity
          style={styles.eventButton}
          onPress={handleParticipantAdd}
          activeOpacity={0.6}
          disabled={participantName.length < 1}
        >
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={item => item}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        ListEmptyComponent={() => (
          <>
            <Text style={styles.emptyList}>
              Nobody arrived yet?🙁
            </Text>
            <Text style={styles.listSubtitle}>Add participants to your list.</Text>
          </>

        )}
      />

      {/* using MAP ⇣ */}

      {/* <ScrollView>
        {participants.map((item) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        ))}
      </ScrollView> */}

    </View>

  )
}