import "./x.js";
import "./x.scss";
import "./y.less";
import "./z.styl";
import png from "./2020.png";

const div = document.getElementById("app1");
div.innerHTML = `<img src="${png}">`;

const button = document.createElement("button");
button.innerHTML = "懒加载";
button.onclick = () => {
  const promise = import("./lazy.js");
  promise.then(
    module => {
      module.default();
    },
    () => {
      console.error("模块加载错误");
    }
  );
};
div.appendChild(button);
