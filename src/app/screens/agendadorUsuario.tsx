import ConfirmarConsulta from "@/components/confirmarConsulta";
import Topo from "@/components/topo";
import { ScrollView, StyleSheet, View } from "react-native";

export default function agendadorUsuario() {
    return (
        <View style={styles.container}>
            <View>
                <Topo />
            </View>

            <ScrollView
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={true}
            >
                <ConfirmarConsulta
                    style={styles.consulta}
                    tipo="users"
                />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: "#fff",
    },
    scrollContent: {
        
        alignItems: "center",
        paddingBottom: 25,
    },
    consulta: {
        width: "75%", // evita largura fixa gigante
        marginVertical: 100,
    },
});
