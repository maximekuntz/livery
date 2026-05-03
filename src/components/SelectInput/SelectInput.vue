<template>
  <div :class="rootClasses">
    <label v-if="label" :for="inputId" class="lv-select-input__label">
      {{ label }}
      <span v-if="required" class="lv-select-input__required" aria-hidden="true">*</span>
    </label>

    <div class="lv-select-input__wrapper">
      <select
        :id="inputId"
        :value="modelValue"
        :disabled="disabled"
        :required="required"
        :aria-describedby="hint || error ? descriptionId : undefined"
        :aria-invalid="!!error"
        class="lv-select-input__select"
        v-bind="$attrs"
        @change="$emit('update:modelValue', $event.target.value)"
      >
        <option v-if="placeholder" value="" disabled :selected="!modelValue">
          {{ placeholder }}
        </option>
        <option
          v-for="opt in normalizedOptions"
          :key="opt.value"
          :value="opt.value"
          :disabled="opt.disabled"
        >
          {{ opt.label }}
        </option>
      </select>

      <span class="lv-select-input__chevron" aria-hidden="true">
        <BaseIcon name="chevron-down" size="sm" />
      </span>
    </div>

    <p v-if="error" :id="descriptionId" class="lv-select-input__hint lv-select-input__hint--error" role="alert">
      {{ error }}
    </p>
    <p v-else-if="hint" :id="descriptionId" class="lv-select-input__hint">
      {{ hint }}
    </p>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import BaseIcon from '../BaseIcon/BaseIcon.vue'

/**
 * SelectInput — Styled native <select> with label, hint, and error states.
 * Options accept { label, value, disabled? } objects or plain strings.
 */
const props = defineProps({
  modelValue: {
    default: '',
  },
  options: {
    type: Array,
    default: () => [],
  },
  label:       { type: String,  default: undefined },
  placeholder: { type: String,  default: undefined },
  hint:        { type: String,  default: undefined },
  error:       { type: String,  default: undefined },
  disabled:    { type: Boolean, default: false },
  required:    { type: Boolean, default: false },
  id:          { type: String,  default: undefined },
})

defineEmits(['update:modelValue'])

const uid           = Math.random().toString(36).slice(2, 8)
const inputId       = computed(() => props.id ?? `lv-select-${uid}`)
const descriptionId = computed(() => `${inputId.value}-desc`)

const normalizedOptions = computed(() =>
  props.options.map((o) =>
    typeof o === 'string' ? { label: o, value: o } : o
  )
)

const rootClasses = computed(() => [
  'lv-select-input',
  {
    'lv-select-input--disabled': props.disabled,
    'lv-select-input--error':    !!props.error,
  },
])
</script>

<style scoped>
.lv-select-input {
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  font-family: var(--font-sans);
}

.lv-select-input__label {
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  color: var(--text-primary);
}

.lv-select-input__required {
  color: var(--color-danger);
  margin-left: var(--space-1);
}

.lv-select-input__wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.lv-select-input__select {
  width: 100%;
  height: 2.5rem;
  padding: var(--space-2) 2.25rem var(--space-2) var(--space-3);
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--text-primary);
  background-color: var(--bg-surface);
  border: 1.5px solid var(--border-default);
  border-radius: var(--radius-md);
  outline: none;
  appearance: none;
  cursor: pointer;
  transition:
    border-color var(--duration-fast) var(--ease-in-out),
    box-shadow   var(--duration-fast) var(--ease-in-out);
}

.lv-select-input__select:hover:not(:disabled) {
  border-color: var(--border-strong);
}

.lv-select-input__select:focus {
  border-color: var(--brand-primary);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--brand-primary) 15%, transparent);
}

.lv-select-input__select:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  background-color: var(--color-slate-50);
}

.lv-select-input--error .lv-select-input__select {
  border-color: var(--color-danger);
}

.lv-select-input--error .lv-select-input__select:focus {
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-danger) 15%, transparent);
}

.lv-select-input__chevron {
  position: absolute;
  right: var(--space-3);
  pointer-events: none;
  color: var(--text-secondary);
  display: flex;
  align-items: center;
}

.lv-select-input__hint {
  font-size: var(--text-xs);
  color: var(--text-secondary);
  line-height: var(--leading-normal);
}

.lv-select-input__hint--error {
  color: var(--color-danger);
}
</style>
