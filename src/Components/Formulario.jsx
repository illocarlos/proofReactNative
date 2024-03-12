
import { useState } from 'react'
import { Text, Pressable, Modal, StyleSheet, SafeAreaView, TextInput, View, ScrollView, Alert } from 'react-native'
import DatePicker from '@react-native-community/datetimepicker';

const Formulario = ({ PrimerClick, click, setPaciente, paciente }) => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [propietary, setPropietary] = useState("")
    const [age, setAge] = useState(null)
    const [phone, setPhone] = useState("")
    const [date, setDate] = useState(new Date());
    const [sinto, setSinto] = useState("")

    const reset = () => {
        setName("")
        setEmail("")
        setPropietary("")
        setAge(null)
        setPhone("")
        setDate(new Date())
        setSinto("")
    }
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
        if ([name, email, age, propietary, phone, date, sinto].includes('')) {
            // ALERT es un componente de react native  y le pasamos 3 parametros 
            //1 el encabezado el mensaje generico 
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
            age,
            propietary,
            phone,
            date,
            sinto
        }
        setPaciente([...paciente, nuevoPaciente])
        reset()
        PrimerClick()
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
                        <Text style={styles.formulary.text}> edad</Text>
                        <TextInput
                            value={age}
                            onChangeText={setAge}
                            placeholder='coloca la edad del paciente'
                            style={styles.formulary.input}
                            keyboardType='numeric'
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
                            onDateChange={setDate}
                            display='spinner'
                            mode='datetime'
                        />
                    </View>

                    <View style={[styles.formulary]} >
                        <Text style={styles.formulary.text}> sintomas</Text>
                        <TextInput
                            value={sinto}
                            onChangeText={setSinto}
                            placeholder=''
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
            textAlign: 'center',
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