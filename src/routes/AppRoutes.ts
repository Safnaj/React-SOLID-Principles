import { VideoListWithISP } from "../principles/ISP";
import { LSP } from "../principles/LSP/Button";
import { ButtonWithOCP } from "../principles/OCP";
import { ProductListGood } from "../principles/SRP";

const routes = [
  { path: "/", component: ProductListGood },
  { path: "/ocp", component: ButtonWithOCP },
  { path: "/lsp", component: LSP },
  { path: "/isp", component: VideoListWithISP },
];

export default routes;
