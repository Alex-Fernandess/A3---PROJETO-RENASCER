import { ScrollView, StyleSheet, View } from "react-native";
import Banner from '../../components/banner';
import Explicacao from '../../components/explicacao';
import Relatos from '../../components/relatos';
import Topo from '../../components/topo';

export default function Index() {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Topo/>
        </View>
        <View>
          <Banner/>
        </View>
        <View>
          <Explicacao/>
        </View>
        <View>
          <Relatos/>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    overflowY: 'scroll',
    overflowX: 'hidden',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topContainer: {
    marginTop: 10,
    marginBottom: 10,
  },
});
