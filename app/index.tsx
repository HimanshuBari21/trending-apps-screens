import { Link } from "expo-router";
import { FlatList } from "react-native";

const pages: { key: string; link: "/x" | "/food-app" }[] = [
  {
    key: "Food App",
    link: "/food-app",
  },
  {
    key: "X",
    link: "/x",
  },
];

export default function Index() {
  return (
    <FlatList
      className="w-full p-4"
      data={pages}
      renderItem={({ item }) => (
        <Link className="text-4xl mt-4" href={item.link}>
          {item.key}
        </Link>
      )}
    ></FlatList>
  );
}
