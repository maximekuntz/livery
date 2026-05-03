<template>
  <div :class="rootClasses">
    <!-- Toggle / Checkbox -->
    <label class="lv-boolean-input__control" :class="{ 'lv-boolean-input__control--toggle': type === 'toggle' }">
      <input
        :id="inputId"
        :type="nativeType"
        :checked="isChecked"
        :disabled="disabled"
        :indeterminate="type === 'checkbox' && indeterminate"
        :aria-describedby="hint || error ? descriptionId : undefined"
        :aria-invalid="!!error"
        :name="name"
        :value="value"
        class="lv-boolean-input__native"
        v-bind="$attrs"
        @change="handleChange"
      />

      <!-- Checkbox custom mark -->
      <span v-if="type === 'checkbox'" class="lv-boolean-input__box" aria-hidden="true">
        <BaseIcon v-if="isChecked" name="check" size="xs" />
        <BaseIcon v-else-if="indeterminate" name="minus" size="xs" />
      </span>

      <!-- Toggle track -->
      <span v-if="type === 'toggle'" class="lv-boolean-input__track" aria-hidden="true">
        <span class="lv-boolean-input__thumb" />
      </span>

      <!-- Radio dot -->
      <span v-if="type === 'radio'" class="lv-boolean-input__radio" aria-hidden="true">
        <span v-if="isChecked" class="lv-boolean-input__radio-dot" />
      </span>

      <span v-if="label" class="lv-boolean-input__label">{{ label }}</span>
    </label>

    <p v-if="error" :id="descriptionId" class="lv-boolean-input__hint lv-boolean-input__hint--error" role="alert">
      {{ error }}
    </p>
    <p v-else-if="hint" :id="descriptionId" class="lv-boolean-input__hint">
      {{ hint }}
    </p>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import BaseIcon from '../BaseIcon/BaseIcon.vue'

/**
 * BooleanInput — Checkbox, toggle switch, or radio button.
 *
 * For checkbox/toggle: modelValue is Boolean.
 * For radio: modelValue is the currently selected value; value is this option's value.
 */
const props = defineProps({
  modelValue: {
    default: false,
  },
  /** Visual and semantic type */
  type: {
    type: String,
    default: 'checkbox',
    validator: (v) => ['checkbox', 'toggle', 'radio'].includes(v),
  },
  /** Radio option value */
  value: {
    default: undefined,
  },
  label: { type: String, default: undefined },
  hint:  { type: String, default: undefined },
  error: { type: String, default: undefined },
  disabled: { type: Boolean, default: false },
  /** Checkbox indeterminate state */
  indeterminate: { type: Boolean, default: false },
  name: { type: String, default: undefined },
  id:   { type: String, default: undefined },
})

const emit = defineEmits(['update:modelValue'])

const uid = Math.random().toString(36).slice(2, 8)
const inputId     = computed(() => props.id ?? `lv-bool-${uid}`)
const descriptionId = computed(() => `${inputId.value}-desc`)
const nativeType  = computed(() => props.type === 'toggle' ? 'checkbox' : props.type)
const isChecked   = computed(() =>
  props.type === 'radio' ? props.modelValue === props.value : !!props.modelValue
)

function handleChange(e) {
  if (props.type === 'radio') {
    emit('update:modelValue', props.value)
  } else {
    emit('update:modelValue', e.target.checked)
  }
}

const rootClasses = computed(() => [
  'lv-boolean-input',
  `lv-boolean-input--${props.type}`,
  {
    'lv-boolean-input--disabled': props.disabled,
    'lv-boolean-input--error':    !!props.error,
    'lv-boolean-input--checked':  isChecked.value,
  },
])
</script>

<style scoped>
.lv-boolean-input {
  display: inline-flex;
  flex-direction: column;
  gap: var(--space-1);
  font-family: var(--font-sans);
}

/* ── Control row ── */
.lv-boolean-input__control {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  cursor: pointer;
  user-select: none;
}

.lv-boolean-input--disabled .lv-boolean-input__control {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Hide native input visually, keep accessible */
.lv-boolean-input__native {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  pointer-events: none;
}

/* ── Checkbox box ── */
.lv-boolean-input__box {
  width: 1.125rem;
  height: 1.125rem;
  border: 1.5px solid var(--border-strong);
  border-radius: var(--radius-sm);
  background-color: var(--bg-surface);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition:
    background-color var(--duration-fast) var(--ease-in-out),
    border-color     var(--duration-fast) var(--ease-in-out);
  color: var(--text-inverse);
}

.lv-boolean-input--checked .lv-boolean-input__box {
  background-color: var(--brand-primary);
  border-color: var(--brand-primary);
}

.lv-boolean-input--error .lv-boolean-input__box {
  border-color: var(--color-danger);
}

.lv-boolean-input__native:focus-visible ~ .lv-boolean-input__box {
  outline: 2px solid var(--brand-primary);
  outline-offset: 2px;
}

/* ── Toggle track ── */
.lv-boolean-input__track {
  width: 2.5rem;
  height: 1.375rem;
  border-radius: var(--radius-full);
  background-color: var(--border-strong);
  position: relative;
  flex-shrink: 0;
  transition: background-color var(--duration-fast) var(--ease-in-out);
}

.lv-boolean-input--checked .lv-boolean-input__track {
  background-color: var(--brand-primary);
}

.lv-boolean-input__thumb {
  position: absolute;
  top: 0.1875rem;
  left: 0.1875rem;
  width: 1rem;
  height: 1rem;
  border-radius: var(--radius-full);
  background-color: var(--bg-surface);
  box-shadow: var(--shadow-sm);
  transition: transform var(--duration-fast) var(--ease-in-out);
}

.lv-boolean-input--checked .lv-boolean-input__thumb {
  transform: translateX(1.125rem);
}

.lv-boolean-input__native:focus-visible ~ .lv-boolean-input__track {
  outline: 2px solid var(--brand-primary);
  outline-offset: 2px;
}

/* ── Radio ── */
.lv-boolean-input__radio {
  width: 1.125rem;
  height: 1.125rem;
  border: 1.5px solid var(--border-strong);
  border-radius: var(--radius-full);
  background-color: var(--bg-surface);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition:
    background-color var(--duration-fast) var(--ease-in-out),
    border-color     var(--duration-fast) var(--ease-in-out);
}

.lv-boolean-input--checked .lv-boolean-input__radio {
  border-color: var(--brand-primary);
}

.lv-boolean-input__radio-dot {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: var(--radius-full);
  background-color: var(--brand-primary);
}

.lv-boolean-input__native:focus-visible ~ .lv-boolean-input__radio {
  outline: 2px solid var(--brand-primary);
  outline-offset: 2px;
}

/* ── Label ── */
.lv-boolean-input__label {
  font-size: var(--text-sm);
  color: var(--text-primary);
  line-height: var(--leading-normal);
}

/* ── Hint / Error ── */
.lv-boolean-input__hint {
  font-size: var(--text-xs);
  color: var(--text-secondary);
  margin-left: calc(1.125rem + var(--space-2));
  line-height: var(--leading-normal);
}

.lv-boolean-input__hint--error {
  color: var(--color-danger);
}
</style>
