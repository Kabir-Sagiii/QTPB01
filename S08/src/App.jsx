import RouteComp from "./config/Route";
import { Toaster } from "react-hot-toast";
import Home from "./pages/home/Home";
function App() {
  return (
    <div>
      <Home />
      {/* <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          duration: 4000,
        }}
      />
      <RouteComp /> */}
    </div>
  );
}
export default App;
