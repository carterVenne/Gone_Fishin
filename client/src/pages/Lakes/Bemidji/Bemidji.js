import { useLoadScript } from "@react-google-maps/api";
import Map from "./index";


export default function Minnetonka() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyAoGlAtYj-gG0Nx7EA3EPiRY0tmyOJNpZ4" // Add your API key
  });

  return isLoaded ? <Map /> : null;
}