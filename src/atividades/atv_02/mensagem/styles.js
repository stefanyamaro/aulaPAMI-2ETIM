import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({ 
    texto: {
        fontSize: RFValue(20),
        fontWeight: 'bold',
    }, 

    idade: {
        fontSize: RFValue(20),
    },

    container:{
        alignItems: 'center',
        marginBottom: RFValue(10),
        borderBottomWidth: RFValue(2),
        width: '100%',
       
    }

});

export default styles;

