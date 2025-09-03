<script setup>
import { defineAsyncComponent } from "vue";
import ReactInVue from "./utils/ReactInVue";

const RemoteReactApp = defineAsyncComponent(() => import("remote_app/App").then((module) => ReactInVue(module.default)));
</script>

<template>
  <div>
    <h1>Vue Host Application</h1>
    <RemoteReactApp />
  </div>
</template>
