
import React, { useState, useEffect } from 'react'
import { Text, Pressable, Modal, StyleSheet, SafeAreaView, TextInput, View, ScrollView, Alert } from 'react-native'
import DatePicker from '@react-native-community/datetimepicker';
import { uid } from 'uid';

const Formulario = ({
    PrimerClick,
    click,
    pacientes,
    setPacientes,
    paciente: pacienteObj,
    setPaciente: setPacienteApp
}) => {

    // la usamos para verificar si es edit o no
    const [id, setId] = useState("")

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [propietary, setPropietary] = useState("")
    const [phone, setPhone] = useState("")
    const [date, setDate] = useState(new Date());
    const [sinto, setSinto] = useState("")



    const reset = () => {
        setName("")
        setEmail("")
        setPropietary("")
        setPhone("")
        setDate(new Date())
        setSinto("")
    }

    // la funcion useEffect de react ejecuta lo interno automaticamente cuando el componente esta listo
    //es perfecto para recibir informacion de api o pasar informacion al localstorage
    //tambien para observar cambios de valores en la aplicacion
    //es decir le pasamos una dependencia y observe los cambios a tiempo real de esa dependencia
    //y asi poder actualizarla
    useEffect(() => {
        if (Object.keys(pacienteObj).length > 0) {
            setName(pacienteObj.name)
            setDate(pacienteObj.date)
            setId(pacienteObj.id)
            setEmail(pacienteObj.email)
            setPropietary(pacienteObj.propietary)
            setPhone(pacienteObj.phone)
            setSinto(pacienteObj.sinto)
        }
    }, [pacienteObj])//este arreglo si lo pasamos vacio el useeffect se activa por defecto una vez
    //cuando montamos el componente si le pasamos valores ese use efect se activara cada vez que ese valor cambie
    //en este caso debemos pasarle el objeto de pacienrte editado ya que ese objeto cambiara una vez pulsemos editar
    //y se llenara eso activara el useeffect de forma segura deberemos colocar objetos o vloresa que queremos que reaccionen


    {/* este es un componente buttom es de react native  el texto de el buton se pasa como propr title es lo que saldra dentro del button 
  a diferencia de react que usamos onclick como evento para pasarle cierta funcionalidad usamos inPress en reactnative
  asi llamariamos a Button
  */}
    {/* <Button
    onPress={() => {
      console.log('presionn sensual')
    }}
    title='añadir cita' ></Button> */}

    {/* es mucho mas recomendable usar presable que realizara la accion segun el tipo de pression que le marquemos 
onPressIn =>se ejecuta la funcion cuando presionas de presionas 
onPressOut =>se ejecuta la funcion cuando dejas de presionas 
onLongPress=>se ejecuta la funcion cuando presionas mas de medio segundo
*/}

    const handleSubmit = () => {
        //validacion de formulario
        if ([name, email, propietary, phone, date, sinto].includes('')) {
            // ALERT es un componente de react native  y le pasamos 3 parametros 
            //1 el encbezado el mensaje generico 
            //2 el cuerpo  lo que queremos que el cliente vea para informarle de por que ese encabezado
            //3 el texto del boton lo que saldra en el boton para salir de esa alerta o confirmar esa alerta
            Alert.alert(
                'ERROR',
                'error de errores',
                // podemos pasarle dos botones uno sera siempre el de cancelar la alerta 
                //el segundo el de seguir adelante el que esta todo ok 
                [{ text: 'texto boton' }]
            )
            return
        }

        const nuevoPaciente = {
            name,
            email,
            propietary,
            phone,
            date,
            sinto
        }

        //revisar nueva cita o editar
        if (id) {
            // Editando
            nuevoPaciente.id = id

            const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === nuevoPaciente.id ? nuevoPaciente : pacienteState)
            setPacientes(pacientesActualizados)
            setPacienteApp({})

        } else {
            // nuevo paciente aqui le generamos el id y lo metemos en el array de pacientes
            nuevoPaciente.id = uid(16)
            setPacientes([...pacientes, nuevoPaciente])
        }

        PrimerClick()
        reset()
    }





    //funciuon de fechaaaa
    const handleChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setDate(currentDate);
    }
    return (

        <Modal
            animationType='side'
            visible={click}
        >
            <SafeAreaView
                style={styles.modal}
            >
                {/* scrollView se usa para marcar que se puede hacer scroll en la pantalla del mobile
                si no colocas esta etiqueta no podras hacer scroll aunque tengas muicha informacion mas abajo
                 */}
                <ScrollView>
                    {/* presable es la forma de crear un button o interactuar con la pantalla y a diferencia de web
                    que es inclick aqui es onPress y hay muchas formas de realizar la presion la mas comun es onpress
                 */}
                    <View style={styles.close}>
                        <Pressable style={styles.close.button} onPress={PrimerClick} >
                            <Text style={styles.close.text}  >X</Text>
                        </Pressable>
                    </View>
                    <Text style={styles.text}>NUEVA CITA</Text>
                    {/* entrada para un formulario view se asemeja a un div dentro un text explicando el input
                    y textinput es la manera de generar formularios en react native
                    si colocamos la propr keyboardType le indicamos el tipo de dato que registrara y 
                    nospodra modificar el teclado por default es cadena de texto  */}
                    <View style={styles.formulary} >
                        <Text style={styles.formulary.text}> nombre</Text>
                        <TextInput
                            value={name}
                            onChangeText={setName}
                            placeholder='coloca el nombre del paciente'
                            style={styles.formulary.input}
                            placeholderTextColor={'#666'}
                        />
                    </View>
                    <View style={styles.formulary} >
                        <Text style={styles.formulary.text}> email</Text>
                        <TextInput
                            value={email}
                            onChangeText={setEmail}
                            placeholder='coloca el email del propietario'
                            style={styles.formulary.input}
                            keyboardType='email-address'
                            placeholderTextColor={'#666'}
                        />
                    </View>
                    <View style={styles.formulary} >
                        <Text style={styles.formulary.text}> propietario</Text>
                        <TextInput
                            value={propietary}
                            onChangeText={setPropietary}
                            placeholder='coloca el nombre del propietario'
                            style={styles.formulary.input}
                            placeholderTextColor={'#666'}
                        />
                    </View>

                    <View style={styles.formulary} >
                        <Text style={styles.formulary.text}> telefono</Text>
                        <TextInput
                            value={phone}
                            onChangeText={setPhone}
                            placeholder='coloca la numero de telefono'
                            style={styles.formulary.input}
                            keyboardType='number-pad'
                            placeholderTextColor={'#666'}
                            maxLength={10}
                        />
                    </View>
                    <View style={styles.formulary} >
                        <Text style={styles.formulary.text}>Fecha</Text>
                        {/* datepicke es un componente externo de react native para que quede mas visual la fecha
                        le damos los valores como cuqluier otro input y 
                        usamos la propr de display spinner para que tengsa el efecto giratorio
                        y mode datetime para que salga fecha y hora
                         */}
                        <DatePicker
                            value={date}
                            onChange={handleChange}
                            mode='datetime'
                            display='spinner'
                            textColor='black'
                            themeVariant="dark"
                            is24Hour={true}
                        />
                    </View>

                    <View style={[styles.formulary]} >
                        <Text style={styles.formulary.text}> sintomas</Text>
                        <TextInput
                            value={sinto}
                            onChangeText={setSinto}
                            style={[styles.formulary.input, styles.formulary.textArea]}
                            placeholderTextColor={'#666'}
                            multiline={true}
                            numberOfLines={4}
                        />
                    </View>
                    <Pressable
                        onPress={handleSubmit}
                        style={styles.formulary.btnenviar} >
                        <Text style={styles.formulary.btnenviar.text}  >Enviar</Text>
                    </Pressable>
                </ScrollView>
            </SafeAreaView>
        </Modal >
    )
}
const styles = StyleSheet.create({
    modal: {
        backgroundColor: '#69C7F0',
        flex: 1
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

    text: {
        textAlign: 'center',
        fontSize: 20,
        textTransform: 'uppercase',
        fontWeight: '900',

    },
    formulary: {

        marginHorizontal: 20,
        marginVertical: 20,
        text: {
            color: '#fff',
            fontSize: 20,
            fontWeight: '900',
        },
        input: {
            padding: 15,
            backgroundColor: '#fff',
            borderRadius: 20,


        },
        textArea: {
            padding: 60,
        },

        row: {
            flexDirection: 'row',
            justifyContent: 'space-around',
        },

        btnenviar: {
            backgroundColor: '#01EB9D',
            padding: 15,
            marginVertical: 12,
            borderRadius: 20,
            marginHorizontal: 15,
            text: {
                textAlign: 'center',
                textTransform: 'uppercase',
                fontWeight: '900',
            }
        }
    }


})
export default Formulario