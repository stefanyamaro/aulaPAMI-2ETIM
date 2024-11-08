import { StyleSheet } from 'react-native';
import { RfValue } from 'react-native-responsive-fontsize';


const styles = StyleSheet.create({
    container: {        
        padding: RfValue(15),      
        alignItems: 'center', 
        width: '100%', 
        height: '100%', 
        backgroundColor: '#e3f2fd', 
        borderRadius: RfValue (20), 
    },  
    titulo: {
        fontSize: RfValue(25), 
        fontWeight: 'bold', 
    }, 
    imagem: {
        width: '80%', 
        resizeMode: 'center', // stretch
    },
});

export default styles;

