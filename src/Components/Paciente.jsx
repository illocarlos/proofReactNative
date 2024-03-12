import { Text, View, StyleSheet } from "react-native"




const Paciente = ({ item }) => {

    const { name, date } = item.item



    return (
        <View style={styles.contain}>
            <Text style={styles.contain.h1}>Paciente</Text>
            <Text style={styles.contain.h1}>{name}</Text>
            <Text>{date}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    contain: {
        marginHorizontal: 30,
        padding: 10,
        backgroundColor: '#69C7F0',
        h1: {
            fontWeight: '900',
            textAlign: 'center',
            color: 'white'
        }
    }
})
export default Paciente