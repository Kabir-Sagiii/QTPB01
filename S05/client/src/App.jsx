import RouteComp from "./config/Route";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <div>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          duration: 4000,
        }}
      />
      <RouteComp />
    </div>
  );
}
export default App;
