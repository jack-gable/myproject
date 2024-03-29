import React from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";

export default function AddTodo({ handleSubmit }) {
	const [text, setText] = React.useState("");

	function handleChange(val) {
		setText(val);
	}

	return (
		<View>
			<TextInput
				style={styles.input}
				placeholder="new todo..."
				onChangeText={handleChange}
			/>
			<Button
				title="Add Todo"
				onPress={() => handleSubmit(text)}
				color={"coral"}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	input: {
		marginBottom: 10,
		paddingHorizontal: 8,
		paddingVertical: 6,
		borderBottomWidth: 1,
		borderBottomColor: "#ddd",
	},
});
