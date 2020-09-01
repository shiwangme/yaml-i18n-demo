<template>
  <div>
    <h1>测试</h1>
    <h2>Tag: {{ $t('test') }}</h2>
    <ul id="locale">
      <li v-for="locale in availableLocales" :key="locale.code">
        <nuxt-link :to="switchLocalePath(locale.code)">{{ locale.name }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    availableLocales() {
      return this.$i18n.locales; // .filter((i) => i.code !== this.$i18n.locale);
    }
  }
};
</script>
