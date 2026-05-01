<template>
  <div :class="classes" role="alert" :aria-live="variant === 'danger' ? 'assertive' : 'polite'">
    <span class="lv-toast__icon" aria-hidden="true">
      <LvBaseIcon :name="iconName" size="sm" />
    </span>

    <div class="lv-toast__body">
      <p v-if="title" class="lv-toast__title">{{ title }}</p>
      <p class="lv-toast__message">{{ message }}</p>
    </div>

    <button
      type="button"
      class="lv-toast__close"
      aria-label="Dismiss notification"
      @click="$emit('remove', id)"
    >
      <LvBaseIcon name="close" size="xs" aria-hidden="true" />
    </button>

    <!-- Progress bar — only shown when duration > 0 -->
    <div v-if="duration > 0" class="lv-toast__progress" :style="progressStyle" aria-hidden="true" />
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import LvBaseIcon from '../../LvBaseIcon/LvBaseIcon.vue'

/**
 * LvToast — Individual toast notification.
 *
 * Rendered by LvToastContainer. Use the useToast composable to dispatch toasts.
 * The progress bar uses a CSS animation driven by the duration prop.
 */
const props = defineProps({
  id:       { type: Number, required: true },
  message:  { type: String, required: true },
  title:    { type: String,  default: undefined },
  variant:  {
    type: String,
    default: 'info',
    validator: (v) => ['info', 'success', 'warning', 'danger'].includes(v),
  },
  /** Auto-dismiss duration in ms. 0 = persistent. */
  duration: { type: Number, default: 4000 },
})

defineEmits(['remove'])

const ICONS = {
  info:    'info',
  success: 'check-circle',
  warning: 'warning',
  danger:  'x-circle',
}

const iconName = computed(() => ICONS[props.variant])

const classes = computed(() => [
  'lv-toast',
  `lv-toast--${props.variant}`,
])

const progressStyle = computed(() => ({
  animationDuration: `${props.duration}ms`,
}))
</script>

<style scoped>
.lv-toast {
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
  padding: var(--space-3) var(--space-4);
  background-color: var(--color-slate-900);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--text-inverse);
  min-width: 280px;
  max-width: 420px;
  overflow: hidden;
  pointer-events: all;
}

/* ── Colour accent on left edge ── */
.lv-toast::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 3px;
  border-radius: var(--radius-lg) 0 0 var(--radius-lg);
}

.lv-toast--info::before    { background-color: var(--color-blue-600); }
.lv-toast--success::before { background-color: var(--color-green-500); }
.lv-toast--warning::before { background-color: var(--color-amber-500); }
.lv-toast--danger::before  { background-color: var(--color-red-500); }

/* ── Icon colour ── */
.lv-toast__icon { flex-shrink: 0; margin-top: 1px; }
.lv-toast--info    .lv-toast__icon { color: var(--color-blue-600); }
.lv-toast--success .lv-toast__icon { color: var(--color-green-500); }
.lv-toast--warning .lv-toast__icon { color: var(--color-amber-500); }
.lv-toast--danger  .lv-toast__icon { color: var(--color-red-400); }

/* ── Body ── */
.lv-toast__body {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.lv-toast__title {
  font-weight: var(--font-semibold);
  margin: 0;
  font-size: var(--text-sm);
}

.lv-toast__message {
  margin: 0;
  color: var(--color-slate-300);
  font-size: var(--text-xs);
  line-height: var(--leading-relaxed);
}

/* ── Close ── */
.lv-toast__close {
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
  color: var(--color-slate-400);
  padding: 0;
  border-radius: var(--radius-sm);
  transition: color var(--duration-fast) var(--ease-in-out);
}

.lv-toast__close:hover { color: var(--text-inverse); }
.lv-toast__close:focus-visible {
  outline: 2px solid var(--color-blue-600);
  outline-offset: 2px;
}

/* ── Progress bar ── */
.lv-toast__progress {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.2);
  transform-origin: left;
  animation: lv-toast-progress linear forwards;
}

@keyframes lv-toast-progress {
  from { transform: scaleX(1); }
  to   { transform: scaleX(0); }
}
</style>
