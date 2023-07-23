import React from 'react';
import { StyleSheet, View,  Text} from 'react-native';


export default function PaymentsCard() {

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Payments</Text>

      <View style={styles.paymentInfoContainer}>
      <View style={styles.tableRow}>
        <View style={styles.labelCell}>
          <Text style={styles.labelText}>Total Due</Text>
        </View>
        <View style={styles.labelCell}>
          <Text style={styles.labelText}>Due Date</Text>
        </View>
      </View>

      <View style={styles.tableRow}>
        <View style={styles.textCell}>
          <Text style={styles.text}>$110</Text>
        </View>
        <View style={styles.textCell}>
          <Text style={styles.text}>July 7th</Text>
        </View>
      </View>
    </View>

      <Text style={styles.label}>View Payment History</Text>
      <Text style={styles.comment}>Payments via Venmo & Paypal will appear here</Text>
      <Text style={styles.comment}>*May take up to 24 hours*</Text>

      <Text style={styles.label}>Manually Log A Payment</Text>
      <Text style={styles.comment}>Log payments via cash/check here</Text>

      <Text style={styles.comment}></Text>
    </View>

  );
}

const styles = StyleSheet.create({
    container: {
      borderColor: '#2fc02d',
      borderWidth: 8,
      borderRadius: 5,
      marginBottom: 15,
      marginTop: 15,
      backgroundColor: 'rgba(0,0,0,0.7)',
      marginHorizontal: 20,
      padding: 10,
      borderImage: 'linearGradient(to right, #11998e, #38ef7d)',
    },
    paymentInfoContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 20

    },
    headerText: {
      textAlign: 'center',
      fontFamily: 'economica',
      fontSize: 40,
      color: 'white',
      marginBottom: 0,
    },
    label: {
      textAlign: 'center',
      color: 'white',
      fontFamily: 'economica',
      fontWeight: 'bold',
      fontSize: 24,
      textDecorationLine: 'underline',
      marginTop: 20,
    },
    text: {
      textAlign: 'center',
      fontFamily: 'economica',
      fontSize: 24,
      color: 'white',
      // color: 'white',
      marginTop: 0,
      textDecorationLine: 'underline',
    },
    comment: {
      color: '#cccccc',
      fontStyle: 'italic',
      textAlign: 'center',
    },
    labelCell: {
      borderStyle: 'solid',
      borderColor: '#2fc02d',
      flex: 1,
      // padding: 10,
      margin: 5,
      borderRadius: 5,
      alignItems: 'center',
    },
    textCell: {
      flex: 1,
      // padding: 10,
      // margin: 5,
      borderRadius: 5,
      alignItems: 'center',
    },
    tableRow: {
      borderStyle: 'solid',
      borderColor: '#2fc02d',
      flexDirection: 'row',
    },
    labelText: {
      textAlign: 'center',
      color: '#2fc02d',
      fontFamily: 'economica',
      fontWeight: 'bold',
      fontSize: 24,
      textDecorationLine: 'underline',
      marginTop: 20,
    },

});

