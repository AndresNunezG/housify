<script setup lang="ts">
import CloseIcon from '@/assets/icons/CloseIcon.vue';
defineProps<{
  showModal: boolean
}>()
const emit = defineEmits<{
  (e: 'onCloseModal'): void
}>()
</script>

<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="showModal" class="modal-mask" @click="emit('onCloseModal')">
        <div class="modal-container">
          <close-icon
            role="button"
            class="close-modal"
            @click="emit('onCloseModal')"
          />
          <slot>default body</slot>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped lang="css">
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  transition: opacity 0.3s ease;
}
.modal-container {
  margin: auto;
  padding: 30px;
  background-color: #fff;
  border-radius: var(--border-radius);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  position: relative;
  & .close-modal {
    position: absolute;
    top: 0;
    right: 0;
    margin: 1rem;
    cursor: pointer;
  }
}
.modal-enter-from {
  opacity: 0;
}
.modal-leave-to {
  opacity: 0;
}
.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
