import Pesquisa from '@/components/pesquisa';
import Profissional from '@/components/profissional';
import { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Topo from '../../../components/topo';


export default function ListaDeProfissionais() {
  const [nome, setNome] = useState('');
  const [localizacao, setLocalizacao] = useState('');

  return (
    <ScrollView>
    <View style={styles.backgroundPagina}>

      <View style={{ paddingTop: 10 }}>
        <Topo />
      </View>
      <View style={[styles.pesquisa, { paddingTop: 10 }]}>
        <Pesquisa onNomeChange={setNome} onLocalizacaoChange={setLocalizacao} />
      </View>
      <View style={{ paddingTop: 10, flexDirection: 'row', gap: 10, justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
        <Profissional nome="João da Silva" especialidade="Psicólogo" crp="123456" descricao="João é um psicólogo que trabalha com terapia individual e familiar." onAgendar={() => { }} onWhatsApp={() => { }} onInstagram={() => { }} />
        <Profissional nome="João da Silva" especialidade="Psicólogo" crp="123456" descricao="João é um psicólogo que trabalha com terapia individual e familiar." onAgendar={() => { }} onWhatsApp={() => { }} onInstagram={() => { }} />
        <Profissional nome="João da Silva" especialidade="Psicólogo" crp="123456" descricao="João é um psicólogo que trabalha com terapia individual e familiar." onAgendar={() => { }} onWhatsApp={() => { }} onInstagram={() => { }} />
        <Profissional nome="João da Silva" especialidade="Psicólogo" crp="123456" descricao="João é um psicólogo que trabalha com terapia individual e familiar." onAgendar={() => { }} onWhatsApp={() => { }} onInstagram={() => { }} />
        <Profissional nome="João da Silva" especialidade="Psicólogo" crp="123456" descricao="João é um psicólogo que trabalha com terapia individual e familiar." onAgendar={() => { }} onWhatsApp={() => { }} onInstagram={() => { }} />
      </View>
    </View>
    </ScrollView>

  )

}
const styles = StyleSheet.create({
  backgroundPagina: {
    flex: 1,
    backgroundColor: '#ffffff',
    gap: 8,
  },
  pesquisa: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    height: 200,
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
    backgroundColor: '#336BF7',
  },
})