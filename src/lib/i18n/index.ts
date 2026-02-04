import { register, init, locale } from "svelte-i18n";

register("it", () => import("./translations/it.json"));
register("en", () => import("./translations/en.json"));

init({
  fallbackLocale: "it",
});
