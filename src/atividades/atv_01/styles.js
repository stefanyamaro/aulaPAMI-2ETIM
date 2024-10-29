import {StyleSheet} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#8ed4f5',
        padding: 8,
    },

    titulo: {
        //fontSize: 20,
        fontSize: RFValue(22),
        color: '#fafafa',
        fontWeight: 'bold',
        marginTop: 8,
    
    },

    texto: {
        //fontSize: 20,
        fontSize: RFValue(22),
        color: '#066c9c',
        fontWeight: 'bold',
        marginTop: 8,
    
    },
});

export default styles;