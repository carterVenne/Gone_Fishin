import { useLoadScript } from "@react-google-maps/api";
import Map from "./MainMap/Map";


export default function Home() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyAoGlAtYj-gG0Nx7EA3EPiRY0tmyOJNpZ4" // Add your API key
  });

  return isLoaded ? <Map /> : null;
}