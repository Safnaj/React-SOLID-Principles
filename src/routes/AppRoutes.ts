import { ButtonWithOCP } from "../principles/OCP";
import { ProductListGood } from "../principles/SRP";

const routes = [
  { path: "/", component: ProductListGood },
  { path: "/ocp", component: ButtonWithOCP },
];

export default routes;
