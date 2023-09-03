import { Pressable, StyleSheet, View, Text } from "react-native";
import { GlobalStyles } from "../../constants/styles";

const Button = ({children, onPress, mode, style}) => {
    return (
        <View style={style}>
            <Pressable onPress={onPress} style={({pressed})=>pressed && styles.press}>
                <View style={[styles.button, mode === "flat" && styles.flat]}>
                    <Text style={[styles.buttonText, mode === "flatt" && styles.flatText]}>
                        {children}
                    </Text>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 4,
        padding: 8,
        backgroundColor: GlobalStyles.colors.primary500
    },
    flat: {
        backgroundColor: "transparent",
    },
    buttonText: {
        color: "white",
        textAlign: "center"
    },
    flatText: {
        color: GlobalStyles.colors.primary200
    },
    press: {
        opacity: 0.75,
        backgroundColor: GlobalStyles.colors.primary100,
        borderRadius: 4
    }

})

export default Button;