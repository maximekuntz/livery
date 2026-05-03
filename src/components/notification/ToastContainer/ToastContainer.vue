<template>
  <Teleport to="body">
    <div :class="classes" aria-label="Notifications" role="region">
      <TransitionGroup name="lv-toast" tag="div" class="lv-toast-container__stack">
        <Toast
          v-for="toast in toasts"
          :key="toast.id"
          v-bind="toast"
          @remove="$emit('remove', $event)"
        />
      </TransitionGroup>
    </div>
  </Teleport>
</template>

<script setup>
import { computed } from 'vue'
import Toast from '../Toast/Toast.vue'

/**
 * ToastContainer — Fixed overlay that renders the toast stack.
 *
 * Mount once at the app root and connect to useToast():
 *
 *   <ToastContainer :toasts="toasts" @remove="remove" />
 *
 * Position can be controlled via the `position` prop.
 */
const props = defineProps({
  /** Array of toast objects from useToast() */
  toasts: {
    type: Array,
    default: () => [],
  },
  position: {
    type: String,
    default: 'bottom-right',
    validator: (v) => [
      'top-right', 'top-left', 'top-center',
      'bottom-right', 'bottom-left', 'bottom-center',
    ].includes(v),
  },
})

defineEmits(['remove'])

const classes = computed(() => [
  'lv-toast-container',
  `lv-toast-container--${props.position}`,
])
</script>

<style scoped>
.lv-toast-container {
  position: fixed;
  z-index: 9999;
  pointer-events: none;
  padding: var(--space-4);
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

/* ── Positions ── */
.lv-toast-container--top-right    { top: 0; right: 0; align-items: flex-end; }
.lv-toast-container--top-left     { top: 0; left: 0;  align-items: flex-start; }
.lv-toast-container--top-center   { top: 0; left: 50%; transform: translateX(-50%); align-items: center; }
.lv-toast-container--bottom-right { bottom: 0; right: 0; align-items: flex-end;   flex-direction: column-reverse; }
.lv-toast-container--bottom-left  { bottom: 0; left: 0;  align-items: flex-start; flex-direction: column-reverse; }
.lv-toast-container--bottom-center {
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  align-items: center;
  flex-direction: column-reverse;
}

.lv-toast-container__stack {
  display: flex;
  flex-direction: inherit;
  gap: var(--space-3);
  align-items: inherit;
}

/* ── Transitions ── */
.lv-toast-enter-active {
  transition:
    opacity  var(--duration-normal) var(--ease-out),
    transform var(--duration-normal) var(--ease-out);
}

.lv-toast-leave-active {
  transition:
    opacity  var(--duration-fast) var(--ease-in-out),
    transform var(--duration-fast) var(--ease-in-out);
}

.lv-toast-enter-from {
  opacity: 0;
  transform: translateY(0.5rem) scale(0.96);
}

.lv-toast-leave-to {
  opacity: 0;
  transform: translateX(1rem) scale(0.96);
}

.lv-toast-move {
  transition: transform var(--duration-normal) var(--ease-in-out);
}
</style>
