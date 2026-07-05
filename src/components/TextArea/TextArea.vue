<template>
  <div :class="rootClasses">
    <label
      v-if="label"
      :for="inputId"
      class="lv-text-area__label"
    >
      {{ label }}
      <span
        v-if="required"
        class="lv-text-area__required"
        aria-hidden="true"
      >*</span>
    </label>

    <textarea
      :id="inputId"
      ref="textareaEl"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
      :required="required"
      :rows="minRows"
      :aria-describedby="descriptionId"
      :aria-invalid="!!error"
      class="lv-text-area__input"
      v-bind="$attrs"
      @input="onInput"
    />

    <p
      v-if="error"
      :id="descriptionId"
      class="lv-text-area__hint lv-text-area__hint--error"
      role="alert"
    >
      {{ error }}
    </p>
    <p
      v-else-if="hint"
      :id="descriptionId"
      class="lv-text-area__hint"
    >
      {{ hint }}
    </p>
  </div>
</template>

<script setup>
import { computed, nextTick, onMounted, ref, watch } from 'vue'

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  label: { type: String, default: undefined },
  placeholder: { type: String, default: undefined },
  hint: { type: String, default: undefined },
  /** Renders error style and announces message via role="alert" */
  error: { type: String, default: undefined },
  disabled: { type: Boolean, default: false },
  readonly: { type: Boolean, default: false },
  required: { type: Boolean, default: false },
  /** Minimum number of visible rows */
  minRows: { type: Number, default: 3 },
  /** Explicit id — auto-generated if omitted */
  id: { type: String, default: undefined },
})

const emit = defineEmits(['update:modelValue'])

const uid = Math.random().toString(36).slice(2, 8)
const inputId = computed(() => props.id ?? `lv-textarea-${uid}`)
const descriptionId = computed(() => `${inputId.value}-desc`)

const textareaEl = ref(null)

function resize() {
  const el = textareaEl.value
  if (!el) return
  el.style.height = 'auto'
  el.style.height = `${el.scrollHeight}px`
}

function onInput(event) {
  emit('update:modelValue', event.target.value)
  resize()
}

// Resize when value changes externally (e.g. v-model from parent)
watch(() => props.modelValue, () => nextTick(resize))

onMounted(() => nextTick(resize))

const rootClasses = computed(() => [
  'lv-text-area',
  {
    'lv-text-area--disabled': props.disabled,
    'lv-text-area--error': !!props.error,
  },
])
</script>

<style scoped>
.lv-text-area {
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
}

.lv-text-area__label {
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  color: var(--text-primary);
  font-family: var(--font-sans);
}

.lv-text-area__required {
  color: var(--color-danger);
  margin-left: var(--space-1);
}

.lv-text-area__input {
  width: 100%;
  min-height: 2.5rem;
  padding: var(--space-2) var(--space-3);
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--text-primary);
  background-color: var(--bg-surface);
  border: 1.5px solid var(--border-default);
  border-radius: var(--radius-md);
  outline: none;
  resize: none;
  overflow: hidden;
  line-height: var(--leading-normal);
  transition:
    border-color var(--duration-fast) var(--ease-in-out),
    box-shadow   var(--duration-fast) var(--ease-in-out);
  appearance: none;
}

.lv-text-area__input::placeholder {
  color: var(--text-disabled);
}

.lv-text-area__input:hover:not(:disabled) {
  border-color: var(--border-strong);
}

.lv-text-area__input:focus {
  border-color: var(--brand-primary);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--brand-primary) 15%, transparent);
}

.lv-text-area__input:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  background-color: var(--color-slate-50);
}

.lv-text-area--error .lv-text-area__input {
  border-color: var(--color-danger);
}

.lv-text-area--error .lv-text-area__input:focus {
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-danger) 15%, transparent);
}

/* Hint / error */
.lv-text-area__hint {
  font-size: var(--text-xs);
  color: var(--text-secondary);
  font-family: var(--font-sans);
  line-height: var(--leading-normal);
}

.lv-text-area__hint--error {
  color: var(--color-danger);
}
</style>
