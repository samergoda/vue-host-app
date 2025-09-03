import { defineComponent, h, onMounted, onBeforeUnmount, ref } from "vue";
import React from "react";
import ReactDOM from "react-dom/client";

export default function ReactInVue(ReactComponent) {
  return defineComponent({
    name: "ReactInVue",
    setup() {
      const root = ref(null);
      let reactRoot;

      onMounted(() => {
        reactRoot = ReactDOM.createRoot(root.value);
        reactRoot.render(React.createElement(ReactComponent));
      });

      onBeforeUnmount(() => {
        if (reactRoot) reactRoot.unmount();
      });

      return () => h("div", { ref: root });
    },
  });
}
