import { Button } from "react-native-paper";

export default function CustomButton({ title, onPress }) {
  return (
    <Button mode="contained" onPress={onPress}>
      {title}
    </Button>
  );
}
