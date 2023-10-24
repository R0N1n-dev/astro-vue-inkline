import { Inkline, components } from "@inkline/inkline";
import "@inkline/inkline/inkline.scss";
import "./main.scss";
import { createPinia } from "pinia";
const pinia = createPinia();
export default (app) => {
  app.use(pinia);
  app.use(Inkline, {
    components,
  });
};
