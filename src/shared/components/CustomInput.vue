<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  modelValue: string | number | null
  error?: string
  label: string
  type?: string
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
})

const emit = defineEmits<{
  (e: 'update:modelValue', id: string | number | null): void
}>()

const hasError = computed(() => !!props.error);

const inputValue = computed({
  get() {
    return props.modelValue
  },
  set(val) {
    emit('update:modelValue', val)
  }
})

</script>

<template>
  <div class="d-flex flex-column">
    <label :for="label">{{ label }}</label>
    <input
      :type="type"
      :id="label"
      v-model="inputValue"
      class="input"
      :class="{ 'error-border': hasError }"
    />
    <div v-if="hasError" class="error-message">{{ error }}</div>
  </div>
</template>

<style lang="css">
.error-border {
  border: 1px solid var(--tertiary-color);
}
.error-message {
  color: var(--tertiary-color);
  font-size: 12px;
  margin-top: 4px;
}
</style>
