import {StyleSheet} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        flex: 1,
        backgroundColor: 'orange',
        padding: 8,
    },

    titulo: {
        //fontSize: 20,
        fontSize: RFValue(22),
        color: '#fafafa',
        fontWeight: 'bold',
        marginTop: 8,
    
    },
});

export default styles;