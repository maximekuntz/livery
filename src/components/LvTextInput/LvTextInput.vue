<template>
  <div :class="rootClasses">
    <label v-if="label" :for="inputId" class="lv-text-input__label">
      {{ label }}
      <span v-if="required" class="lv-text-input__required" aria-hidden="true">*</span>
    </label>

    <div class="lv-text-input__wrapper">
      <span v-if="$slots.leading" class="lv-text-input__addon lv-text-input__addon--leading" aria-hidden="true">
        <slot name="leading" />
      </span>

      <input
        :id="inputId"
        :type="currentType"
        :value="modelValue"
        :placeholder="placeholder"
        :disabled="disabled"
        :readonly="readonly"
        :required="required"
        :autocomplete="autocomplete"
        :aria-describedby="descriptionId"
        :aria-invalid="!!error"
        class="lv-text-input__input"
        :class="{
          'lv-text-input__input--has-leading': $slots.leading,
          'lv-text-input__input--has-trailing': $slots.trailing || (type === 'password'),
        }"
        v-bind="$attrs"
        @input="$emit('update:modelValue', $event.target.value)"
      />

      <span v-if="type === 'password'" class="lv-text-input__addon lv-text-input__addon--trailing">
        <LvClickableIcon
          :icon="showPassword ? 'eye-off' : 'eye'"
          :ariaLabel="showPassword ? 'Hide password' : 'Show password'"
          size="sm"
          variant="ghost"
          @click="showPassword = !showPassword"
        />
      </span>
      <span v-else-if="$slots.trailing" class="lv-text-input__addon lv-text-input__addon--trailing" aria-hidden="true">
        <slot name="trailing" />
      </span>
    </div>

    <p v-if="error" :id="descriptionId" class="lv-text-input__hint lv-text-input__hint--error" role="alert">
      {{ error }}
    </p>
    <p v-else-if="hint" :id="descriptionId" class="lv-text-input__hint">
      {{ hint }}
    </p>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import LvClickableIcon from '../LvClickableIcon/LvClickableIcon.vue'

/**
 * LvTextInput — Single-line text field with label, hint, and error states.
 * Supports leading/trailing addon slots and password visibility toggle.
 */
const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  /** Input type — password gets a built-in reveal toggle */
  type: {
    type: String,
    default: 'text',
    validator: (v) => ['text', 'email', 'password', 'number', 'tel', 'url', 'search'].includes(v),
  },
  label: { type: String, default: undefined },
  placeholder: { type: String, default: undefined },
  hint: { type: String, default: undefined },
  /** Renders error style and announces message via role="alert" */
  error: { type: String, default: undefined },
  disabled: { type: Boolean, default: false },
  readonly: { type: Boolean, default: false },
  required: { type: Boolean, default: false },
  autocomplete: { type: String, default: undefined },
  /** Explicit id — auto-generated if omitted */
  id: { type: String, default: undefined },
})

defineEmits(['update:modelValue'])

const uid = Math.random().toString(36).slice(2, 8)
const inputId = computed(() => props.id ?? `lv-input-${uid}`)
const descriptionId = computed(() => `${inputId.value}-desc`)

const showPassword = ref(false)
const currentType = computed(() => {
  if (props.type === 'password') return showPassword.value ? 'text' : 'password'
  return props.type
})

const rootClasses = computed(() => [
  'lv-text-input',
  {
    'lv-text-input--disabled': props.disabled,
    'lv-text-input--error': !!props.error,
  },
])
</script>

<style scoped>
.lv-text-input {
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
}

.lv-text-input__label {
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  color: var(--text-primary);
  font-family: var(--font-sans);
}

.lv-text-input__required {
  color: var(--color-danger);
  margin-left: var(--space-1);
}

.lv-text-input__wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.lv-text-input__input {
  width: 100%;
  height: 2.5rem;
  padding: var(--space-2) var(--space-3);
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--text-primary);
  background-color: var(--bg-surface);
  border: 1.5px solid var(--border-default);
  border-radius: var(--radius-md);
  outline: none;
  transition:
    border-color var(--duration-fast) var(--ease-in-out),
    box-shadow   var(--duration-fast) var(--ease-in-out);
  appearance: none;
}

.lv-text-input__input::placeholder {
  color: var(--text-disabled);
}

.lv-text-input__input:hover:not(:disabled) {
  border-color: var(--border-strong);
}

.lv-text-input__input:focus {
  border-color: var(--brand-primary);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--brand-primary) 15%, transparent);
}

.lv-text-input__input:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  background-color: var(--color-slate-50);
}

.lv-text-input--error .lv-text-input__input {
  border-color: var(--color-danger);
}

.lv-text-input--error .lv-text-input__input:focus {
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-danger) 15%, transparent);
}

/* Addon slots */
.lv-text-input__addon {
  position: absolute;
  display: flex;
  align-items: center;
  color: var(--text-secondary);
}

.lv-text-input__addon--leading {
  left: var(--space-3);
}

.lv-text-input__addon--trailing {
  right: var(--space-2);
}

.lv-text-input__input--has-leading  { padding-left:  2.25rem; }
.lv-text-input__input--has-trailing { padding-right: 2.25rem; }

/* Hint / error */
.lv-text-input__hint {
  font-size: var(--text-xs);
  color: var(--text-secondary);
  font-family: var(--font-sans);
  line-height: var(--leading-normal);
}

.lv-text-input__hint--error {
  color: var(--color-danger);
}
</style>
