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
      <h1>Hello world</h1>
    </div>
  );
}

export default App;
