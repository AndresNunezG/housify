<script setup lang="ts">
import { reactive, computed } from 'vue';
import { useI18n } from 'vue-i18n';
const { locale } = useI18n();

const langs = reactive(
  [
    { code: "es", text: "ES", selected: true },
    { code: "en", text: "EN", selected: false },
  ]
)

const selectedLang = computed(() => langs.find(e => e.selected))

const toggleLang = () => {
  langs.forEach(lang => lang.selected = !lang.selected)
  locale.value = selectedLang.value?.code ?? langs[0].code
}
</script>

<template>
  <div class="d-flex flex-column justify-center">
    <button class="btn btn-secondary locale-changer" type="button" @click="toggleLang">
      {{ selectedLang?.text }}
    </button>
  </div>
</template>

<style scoped lang="css">
.locale-changer {
  font-weight: 600;
  border-radius: 0.2rem;
  height: fit-content;
  border-color: inherit;
}
</style>
