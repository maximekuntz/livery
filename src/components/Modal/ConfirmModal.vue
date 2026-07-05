<template>
  <Modal
    :model-value="modelValue"
    :title="title"
    :description="description"
    :size="size"
    :close-on-esc="closeOnEsc"
    :close-on-backdrop="closeOnBackdrop"
    :show-close="showClose"
    @update:model-value="(value) => $emit('update:modelValue', value)"
    @close="(reason) => $emit('close', reason)"
  >
    <slot>
      <p class="lv-confirm-modal__message">{{ message }}</p>
    </slot>

    <template #footer>
      <slot
        name="footer"
        :confirm="onConfirm"
        :cancel="onCancel"
      >
        <div class="lv-confirm-modal__actions">
          <Button
            :label="cancelLabel"
            variant="ghost"
            :disabled="loading"
            @click="onCancel"
          />
          <Button
            :label="confirmLabel"
            :variant="confirmVariant"
            :loading="loading"
            @click="onConfirm"
          />
        </div>
      </slot>
    </template>
  </Modal>
</template>

<script setup>
import Button from '../Button/Button.vue'
import Modal from './Modal.vue'

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: 'Please confirm',
  },
  description: {
    type: String,
    default: undefined,
  },
  message: {
    type: String,
    default: 'This action cannot be undone.',
  },
  confirmLabel: {
    type: String,
    default: 'Confirm',
  },
  cancelLabel: {
    type: String,
    default: 'Cancel',
  },
  confirmVariant: {
    type: String,
    default: 'danger',
    validator: (v) => ['filled', 'outlined', 'ghost', 'danger'].includes(v),
  },
  autoCloseOnConfirm: {
    type: Boolean,
    default: true,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: 'sm',
    validator: (v) => ['sm', 'md', 'lg', 'xl', 'full'].includes(v),
  },
  closeOnEsc: {
    type: Boolean,
    default: true,
  },
  closeOnBackdrop: {
    type: Boolean,
    default: false,
  },
  showClose: {
    type: Boolean,
    default: true,
  },
})

const emit = defineEmits(['update:modelValue', 'confirm', 'cancel', 'close'])

function onConfirm() {
  emit('confirm')
  if (props.autoCloseOnConfirm) {
    emit('update:modelValue', false)
  }
}

function onCancel() {
  emit('cancel')
  emit('update:modelValue', false)
}
</script>

<style scoped>
.lv-confirm-modal__message {
  margin: 0;
  color: var(--text-secondary);
  line-height: var(--leading-relaxed);
}

.lv-confirm-modal__actions {
  display: flex;
  justify-content: flex-end;
  gap: var(--space-3);
  flex-wrap: wrap;
}
</style>
