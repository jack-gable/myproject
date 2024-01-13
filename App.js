import React from "react";
import {
	StyleSheet,
	Text,
	View,
	FlatList,
	Alert,
	TouchableWithoutFeedback,
	Keyboard,
} from "react-native";
import Header from "./src/components/Header";
import TodoItem from "./src/components/TodoItem";
import AddTodo from "./src/components/AddTodo";

export default function App() {
	const [todos, setTodos] = React.useState([
		{ key: 1, text: "buy coffee" },
		{ key: 2, text: "create an app" },
		{ key: 3, text: "play on the switch" },
	]);

	function handlePress(key) {
		setTodos((prevTodos) => {
			return prevTodos.filter((todo) => todo.key !== key);
		});
	}

	function handleSubmit(text) {
		if (text.length > 3) {
			setTodos((prevTodos) => {
				return [{ text: text, key: Math.random() }, ...prevTodos];
			});
		} else {
			Alert.alert("Oops!", "Todos must be over 3 characters long", [
				{
					text: "understood",
					onPress: () => console.log("alert closed"),
				},
			]);
		}
	}

	return (
		<TouchableWithoutFeedback
			onPress={() => {
				Keyboard.dismiss();
				console.log("dismissed keyboard");
			}}
		>
			<View style={styles.container}>
				<Header />
				<View style={styles.content}>
					<AddTodo handleSubmit={handleSubmit} />
					<View style={styles.list}>
						<FlatList
							data={todos}
							renderItem={({ item }) => (
								<TodoItem item={item} handlePress={handlePress} />
							)}
							keyExtractor={(item) => item.id}
						/>
					</View>
				</View>
			</View>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
	content: {
		padding: 40,
		flex: 1,
	},
	list: {
		marginTop: 20,
		flex: 1,
	},
});
