import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#181818",
    padding: 24,
  },
  calendar: {
    backgroundColor: "transparent",
  },
  selected: {
    color: "#fff",
    fontSize: 16,
    marginTop: 42,
  },
  dayText: {
    color: "#E8E8E8",
  },
  day: {
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 7,
  },
  disabled: {
    color: "#717171",
  },
  today: {
    color: "#F06543",
    fontWeight: "bold",
  },
  daySelected: {
    backgroundColor: "#F06543",
  },
})
