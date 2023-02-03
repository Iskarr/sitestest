import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <span>Home</span>,
  },
  {
    path: "/:id",
    element: <span>Category</span>,
  },
  {
    path: "/:id",
    element: <span>Product</span>,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
      <h1>water</h1>
      <h2>more stuff and water</h2>
    </div>
  );
}

export default App;
