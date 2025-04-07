import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {Colors, screenWidth} from '@utils/Constants';
import {useRoute} from '@react-navigation/native';
import {goBack, navigate} from '@navigation/NavigationUtil';
import LottieView from 'lottie-react-native';

const PaymentSuccess = () => {
  const route = useRoute();
  const orderDetails = route?.params as any;
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      goBack();
      navigate('Account', {
        isRefresh: true,
      });
    }, 4000);
    return () => clearTimeout(timeoutId);
  }, []);
  return (
    <View style={styles.container}>
      <LottieView 
        source={require('@assets/animations/confirm.json')}
        autoPlay
        loop={false}
        duration={2000}
        speed={1}
        style={styles.lottieView}
        enableMergePathsAndroidForKitKatAndAbove={true}
        hardwareAccelerationAndroid
      />
      <Text style={styles.ordersPlacedText}>
        ORDER PLACED - ₹{orderDetails?.price}
      </Text>
      <View style={styles.deliveryContainer}>
        <Text style={styles.deliveryText}>
            Delivering to Home
        </Text>
      </View>
      <Text style={{textAlign:"center"}}>
        {orderDetails?.address}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  deliveryText: {
    marginTop: 15,
    borderColor: Colors.active,
    textAlign: 'center',
  },
  addressText: {
    opacity: 0.8,
    textAlign: 'center',
  },
  deliveryContainer: {
    borderBottomWidth: 2,
    paddingBottom: 4,
    marginBottom: 5,
    borderColor: Colors.active,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  lottieView: {
    width: screenWidth * 0.6,
    height: 150,
  },
  ordersPlacedText: {
    opacity: 0.4,
    textAlign: 'center',
  },
});

export default PaymentSuccess;
