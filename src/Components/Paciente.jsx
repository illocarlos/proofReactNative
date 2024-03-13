import { Text, View, StyleSheet, Pressable } from "react-native"
import dateFormat from "dateformat"



const Paciente = ({ item, setShowModal, pacienteEditar }) => {

    console.log('editandoooo', item)
    const { name, date, id } = item



    return (
        <View style={styles.contain}>
            <Text style={styles.contain.h1}>Paciente</Text>
            <Text style={[styles.contain.h1, styles.contain.namePaciente]}>{name}</Text>
            <Text>{dateFormat(date, "dd/mm/yy, h:MM ")}</Text>
            <View style={styles.contain.button}>
                <Pressable style={styles.contain.button.btnEdit}>
                    <Text style={styles.contain.button.textEdit}
                        onLongPress={() => {

                            setShowModal(true)
                            pacienteEditar(id)
                        }}
                    > editar</Text>
                </Pressable>
                <Pressable style={styles.contain.button.btnDeleted}>
                    <Text style={styles.contain.button.textDeleted}> eliminar</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    contain: {
        marginTop: 10,
        marginHorizontal: 30,
        padding: 10,
        backgroundColor: '#69C7F0',
        borderBottomColor: '#94a3B8',
        borderBottomWidth: 1,
        h1: {
            fontWeight: '700',
            textAlign: 'center',
            color: 'white'
        },
        namePaciente: {
            fontSize: 25
        },
        button: {
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            btnEdit: {
                padding: 4,
                backgroundColor: '#01EB9D',

            },
            btnDeleted: {
                padding: 4,
                backgroundColor: '#EF4444',


            },
            textDeleted: {
                color: 'white',
                textTransform: 'uppercase',
                fontWeight: '900'
            },
            textEdit: {
                textTransform: 'uppercase',
                fontWeight: '900'
            }
        }
    }
})
export default Paciente