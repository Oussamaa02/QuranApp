import { Text, View, TouchableOpacity, StyleSheet, Image } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import dayjs from 'dayjs';
import { useEffect, useState } from "react";
import 'dayjs/locale/ar';
import moment from "moment-hijri";
import { styles } from "./indexStyles";

moment.locale("ar");
dayjs.locale('ar');

export default function Index() {
  const [currentDateTime, setCurrentDateTime] = useState(dayjs());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(dayjs());
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  const formatTime = (date: dayjs.Dayjs) => {
    return date.format('HH:mm');
  };

  const formatDate = (date: dayjs.Dayjs) => {
    const gregorianDate = date.format('D MMMM YYYY');
    const hijriDate = moment().format("iD iMMMM iYYYY"); 
    return `${gregorianDate} / ${hijriDate} هــ `;
  };

  const items = [
    { text: 'قـراءة', image: require('@/assets/images/kiraa.png') },
    { text: 'تـرتيل', image: require('@/assets/images/tertil.png') },
    { text: 'أذكـار', image: require('@/assets/images/adhkar.png') },
    { text: 'مواعيد الصلاة', image: require('@/assets/images/prayerTime.png') },
    { text: 'منـتدى التـفاعـل ', image: require('@/assets/images/forum.png') },
  ];

  return (
<View style={{flex:1, flexDirection:'column'}}>
  <Text style={{textAlign:'center', color: "#000",fontSize: 30,fontWeight: '600', paddingTop:20}}>{formatTime(currentDateTime )}</Text>
    <Text style={{textAlign:'center', color: "#000",fontSize: 15,fontWeight: '600', paddingTop:5}}>{formatDate(currentDateTime )}</Text>
    <View style={styles.separator} />

    <View style={styles.container}>
      {items.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.button,index === items.length - 1 && styles.lastButton,]}>
          <LinearGradient colors={['#E4F1FA', '#B3D8F1']} style={styles.gradient}>
            <View style={styles.insideButton}>
              <Text style={[styles.text, index === items.length - 1 && styles.lastButtonText]}>{item.text}</Text>
              <Image source={item.image} style={[styles.image,index === items.length - 1 && styles.lastButtonImage]}></Image>
            </View>
          </LinearGradient>
        </TouchableOpacity>
      ))}
    </View>
    </View>
  );
}


