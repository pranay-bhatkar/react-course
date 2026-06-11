import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <h1 className="text-gray-300 border-2 p-4 py-6 rounded-2xl">
        Learn to integrate tailwindcss
      </h1>
      <div className="flex gap-4 mx-2">
        <Card
          title="Strawberry"
          buttenText="Buy Now"
          imageUrl="https://static.vecteezy.com/system/resources/thumbnails/057/068/323/small/single-fresh-red-strawberry-on-table-green-background-food-fruit-sweet-macro-juicy-plant-image-photo.jpg"
        />
        <Card
          title="Info on Cats"
          imageUrl="https://images.pexels.com/photos/11476826/pexels-photo-11476826.jpeg"
        />
        <Card
          title="Somewhere in India"
          imageUrl="https://images.pexels.com/photos/35904663/pexels-photo-35904663.jpeg"
        />
      </div>
    </>
  );
}

export default App;
