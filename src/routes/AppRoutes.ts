import { ProductListGood } from "../principles/SRP";
import { ButtonWithOCP } from "../principles/OCP";
import { LSP } from "../principles/LSP/Button";
import { VideoListWithISP } from "../principles/ISP";
import { FormWithDIP } from "../principles/DIP";

const routes = [
  { path: "/", component: ProductListGood },
  { path: "/srp", component: ProductListGood },
  { path: "/ocp", component: ButtonWithOCP },
  { path: "/lsp", component: LSP },
  { path: "/isp", component: VideoListWithISP },
  { path: "/dip", component: FormWithDIP },
];

export default routes;
