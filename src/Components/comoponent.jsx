import React, { useState } from 'react'
import {
    SafeAreaView,
    Text,
    StyleSheet,
    Pressable,
    FlatList,
    View,
    Alert
} from 'react-native';
import Formulario from './Formulario';
import Paciente from './Paciente';

const Component = () => {
    const [click, setClick] = useState(false);
    const [pacientes, setPacientes] = useState([])
    const [paciente, setPaciente] = useState({})


    // mostrar modal
    const PrimerClick = () => {
        const nuevoClick = !click;
        setClick(nuevoClick);
    }
    //editar paciente le pasamos un paciente en concreto al formulario para asi editarlo
    const pacienteEditar = id => {
        const pacienteEditar = pacientes.filter(paciente => paciente.id === id)
        setPaciente(pacienteEditar[0])
    }
    const eliminar = id => {
        Alert.alert(
            'vas a eliminar un pasiente',
            '¿estas seguro?',
            [
                { text: 'cancelar' },
                {
                    text: 'eliminar', onPress: () => {
                        const pacienteActualizado = pacientes.filter(elm => elm.id !== id)
                        setPacientes(pacienteActualizado)
                    }
                }

            ]

        )
    }

    return (
        //en react native tenemos elementos limitados los mas populares son :
        // SafeAreaView lo que hace es coger las dimensiones de mobile que trae reactnative es para ajustar la aplicacion al NOTCH de iphone
        //Text es para parrafos
        //button para botones 
        //image para imagenes 
        //view se usa como un  div 
        < SafeAreaView style={styles.container} >
            {/* llamamos las clases como styles  */}

            < View style={styles.containerInAdmin} >
                {/* podemos meter textos dentro de textos y clases dentro de clases Button
        es como sass en ese aspecto y si queremos llamar una clase dentro de otra se llama como si fuera un objeto en js
    */}

                <Text style={styles.title}> consultas citas</Text>
                <Text style={[styles.name, styles.title]}>   Veterinaria </Text>


                {
                    pacientes.length === 0 ?
                        <Text style={styles.pacienteText} >sin pacientes, por favor añada uno.</Text> :
                        <FlatList
                            style={styles.list}
                            data={pacientes}
                            // me generaba un error ya que por defecto yo uo key para dar valor unicoi
                            //y en reactnative es keyextractor 
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => {
                                return (
                                    <Paciente
                                        item={item}
                                        pacienteEditar={pacienteEditar}
                                        setShowModal={PrimerClick}
                                        eliminar={eliminar}
                                    />
                                )
                            }}
                        />
                }
            </View >

            <Pressable style={styles.button} onPress={PrimerClick} >
                <Text style={styles.text}>añadir cita</Text>
            </Pressable>

            <Formulario
                click={click}
                PrimerClick={PrimerClick}
                setPaciente={setPaciente}
                pacientes={pacientes}
                paciente={paciente}
                setPacientes={setPacientes}
            />


        </SafeAreaView >
    );
}

// asi usamos los estilos de css en react native es como se usa en vuejs
//por norma generar se declara los stylesheet como style podriamos llamarlo como quisieramos
//los estilos usa flex y en react native la direccion predefinida es en coplumnas
//los tipos de estilos se llaman con camellcase de todas forma visual studio te ayudara pero son las paklabras reservadas de css
//si usamos flex: 1 extenedemos desde el div donde inicia hacia abajo el color de se div o cualquier otra propiedad
const styles = StyleSheet.create({
    // aqui tenemos una clase css dentro de otra
    title: {
        textAlign: 'center',
        textTransform: 'uppercase',
        fontSize: 30,

    },
    containerInAdmin: {
        backgroundColor: '#B7DFF1',
        flex: 1,
    },
    container: {
        backgroundColor: '#69C7F0',
        flex: 1
    },

    tinyLogo: {
        alignSelf: 'center',
        justifyContent: 'center',
        width: 600,
        height: 600,
        marginTop: 20,
    },
    pacienteText: {
        fontSize: 26,
        marginVertical: 25,
        textAlign: 'center',
        fontWeight: '600',
    },
    list: {
        marginTop: 50,

    },
    name: {
        color: 'purple',
        fontWeight: '900',
    },
    text: {
        textAlign: 'center',
        fontSize: 20,
        textTransform: 'uppercase'
    }
})
export default Component