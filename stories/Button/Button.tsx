
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { View } from "react-native";

export type MyButtonProps = {
  onPress: () => void;
  text: string;
};

export const MyButton = ({ onPress, text }: MyButtonProps) => {
  return (
    <View className="items-center justify-center flex-1">
      <Avatar alt="Avatar">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    <Button variant={"outline"} onPress={onPress}>
      <Text >{text}</Text>
    </Button>
    </View>
  );
};

