import { Text, SafeAreaView, Pressable, Modal, StyleSheet, View } from "react-native"



const Informacion = ({
    setPaciente,
    modalPaciente,
    setModalPaciente,
    paciente,
}) => {



    return (
        <Modal
            animationType='side'
            visible={modalPaciente}
        >
            <SafeAreaView
                style={styles.contain}
            >
                <View style={styles.close}>
                    <Pressable
                        style={styles.close.button}
                        onPress={() => {

                            setModalPaciente(false)
                            setPaciente({})
                        }}
                    >
                        <Text style={styles.close.text} >X</Text>
                    </Pressable>
                </View>
                <View >

                    <Text style={styles.h1}>
                        paciente
                    </Text>
                    <Text style={[styles.h2, styles.h1]}>{paciente.name}</Text>
                </View>
                <View >
                    <Text style={styles.pacienteH1}>
                        propietario
                    </Text>
                    <Text style={styles.pacienteH2} >{paciente.propietary}</Text>
                    <View style={styles.row}>
                        <View >
                            <Text style={styles.emailAndPhone}>
                                telefono
                            </Text>
                            <Text style={[styles.details, styles.shadow]}>
                                {paciente.phone}
                            </Text>
                        </View>

                        <View >
                            <Text style={styles.emailAndPhone}>
                                email
                            </Text>
                            <Text style={[styles.details, styles.shadow]}>
                                {paciente.email}
                            </Text>
                        </View>
                    </View>

                    <View>
                        <Text style={styles.pacienteH1}>sintomas</Text>
                        <View style={[styles.detailsSinto, styles.shadow]}>
                            <Text>{paciente.sinto}</Text>
                        </View>
                    </View>
                    <View >
                        <Text style={styles.pacienteH1} >cita</Text>
                        <Text></Text>
                    </View>
                </View>
            </SafeAreaView>
        </Modal >
    )
}
const styles = StyleSheet.create({
    contain: {
        backgroundColor: 'purple',
        flex: 1
    },
    h1: {
        color: '#69C7F0',
        fontSize: 25,
        fontWeight: '700',
        textTransform: 'uppercase',
        textAlign: 'center'
    },
    h2: {
        marginTop: 10,
    },

    close: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        button: {
            padding: 4,
            marginRight: 12,
            backgroundColor: 'red',
            borderRadius: 7,
        },
        text: {

            color: 'white',
            fontSize: 20,
            fontWeight: '900',
        }
    },
    pacienteH1: {
        marginTop: 40,
        color: '#69C7F0',
        fontSize: 20,
        fontWeight: '700',
        textTransform: 'uppercase',
        textAlign: 'center'
    },
    pacienteH2: {
        color: '#69C7F0',
        fontSize: 25,
        fontWeight: '700',
        textTransform: 'uppercase',
        textAlign: 'center'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    details: {
        backgroundColor: '#fff',
        paddingVertical: 3,
        padding: 10,
        width: 200,
        fontWeight: '500',
        borderRadius: 10,

    },
    detailsSinto: {
        marginTop: 10,
        marginHorizontal: 10,
        padding: 5,
        backgroundColor: '#fff',
        height: 300,
        fontWeight: '500',
        borderRadius: 10,

    },
    emailAndPhone: {
        fontWeight: '700',
        color: 'white',
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 20,
            height: 11,
        },
        shadowOpacity: 0.55,
        shadowRadius: 14.78,

        elevation: 22,
    }

})
export default Informacion