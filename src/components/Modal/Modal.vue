<template>
  <Teleport to="body">
    <transition name="lv-modal-fade">
      <div
        v-if="modelValue"
        class="lv-modal"
        :style="overlayStyles"
      >
        <div
          class="lv-modal__backdrop"
          aria-hidden="true"
          @click="onBackdropClick"
        />

        <section
          ref="dialogRef"
          class="lv-modal__dialog"
          role="dialog"
          :aria-modal="isTopmost ? 'true' : 'false'"
          :aria-labelledby="title ? headingId : undefined"
          :aria-describedby="description ? descriptionId : undefined"
          :style="dialogStyles"
          tabindex="-1"
        >
          <header
            v-if="title || description || showClose || $slots.header"
            class="lv-modal__header"
          >
            <slot name="header">
              <div class="lv-modal__heading">
                <h2
                  v-if="title"
                  :id="headingId"
                  class="lv-modal__title"
                >
                  {{ title }}
                </h2>
                <p
                  v-if="description"
                  :id="descriptionId"
                  class="lv-modal__description"
                >
                  {{ description }}
                </p>
              </div>
            </slot>

            <button
              v-if="showClose"
              type="button"
              class="lv-modal__close"
              aria-label="Close dialog"
              @click="requestClose('close-button')"
            >
              <BaseIcon
                name="close"
                size="sm"
                aria-hidden="true"
              />
            </button>
          </header>

          <div class="lv-modal__body">
            <slot />
          </div>

          <footer
            v-if="$slots.footer"
            class="lv-modal__footer"
          >
            <slot name="footer" />
          </footer>
        </section>
      </div>
    </transition>
  </Teleport>
</template>

<script setup>
import { computed, nextTick, onBeforeUnmount, ref, watch } from 'vue'
import BaseIcon from '../BaseIcon/BaseIcon.vue'

let nextModalId = 1
const openModalIds = []
let bodyLockCount = 0

function pushModal(id) {
  if (!openModalIds.includes(id)) {
    openModalIds.push(id)
  }
}

function removeModal(id) {
  const index = openModalIds.indexOf(id)
  if (index >= 0) {
    openModalIds.splice(index, 1)
  }
}

function lockBodyScroll() {
  bodyLockCount += 1
  if (bodyLockCount === 1) {
    document.body.style.overflow = 'hidden'
  }
}

function unlockBodyScroll() {
  bodyLockCount = Math.max(0, bodyLockCount - 1)
  if (bodyLockCount === 0) {
    document.body.style.overflow = ''
  }
}

const SIZE_WIDTH = {
  sm: 'min(32rem, calc(100vw - 2rem))',
  md: 'min(40rem, calc(100vw - 2rem))',
  lg: 'min(52rem, calc(100vw - 2rem))',
  xl: 'min(64rem, calc(100vw - 2rem))',
  full: 'calc(100vw - 2rem)',
}

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: undefined,
  },
  description: {
    type: String,
    default: undefined,
  },
  size: {
    type: String,
    default: 'md',
    validator: (v) => ['sm', 'md', 'lg', 'xl', 'full'].includes(v),
  },
  closeOnEsc: {
    type: Boolean,
    default: true,
  },
  closeOnBackdrop: {
    type: Boolean,
    default: true,
  },
  showClose: {
    type: Boolean,
    default: true,
  },
  baseZIndex: {
    type: Number,
    default: 2000,
  },
})

const emit = defineEmits(['update:modelValue', 'open', 'close'])

const modalId = `lv-modal-${nextModalId}`
// eslint-disable-next-line no-useless-assignment
nextModalId += 1
const headingId = `${modalId}-title`
const descriptionId = `${modalId}-description`

const dialogRef = ref(null)
const opened = ref(false)

const stackIndex = computed(() => {
  const index = openModalIds.indexOf(modalId)
  return index >= 0 ? index : 0
})

const isTopmost = computed(() => openModalIds.at(-1) === modalId)

const overlayStyles = computed(() => ({
  zIndex: String(props.baseZIndex + stackIndex.value * 20),
}))

const dialogStyles = computed(() => ({
  width: SIZE_WIDTH[props.size],
  transform: `translateY(${stackIndex.value * 0.75}rem)`,
}))

function requestClose(reason) {
  if (!isTopmost.value) {
    return
  }

  emit('update:modelValue', false)
  emit('close', reason)
}

function onBackdropClick() {
  if (props.closeOnBackdrop) {
    requestClose('backdrop')
  }
}

function onKeydown(event) {
  if (!props.modelValue || !isTopmost.value) {
    return
  }

  if (event.key === 'Escape' && props.closeOnEsc) {
    event.preventDefault()
    requestClose('escape')
  }
}

watch(
  () => props.modelValue,
  async (isOpen) => {
    if (isOpen && !opened.value) {
      opened.value = true
      pushModal(modalId)
      lockBodyScroll()
      window.addEventListener('keydown', onKeydown)
      emit('open')

      await nextTick()
      dialogRef.value?.focus()
      return
    }

    if (!isOpen && opened.value) {
      opened.value = false
      removeModal(modalId)
      unlockBodyScroll()
      window.removeEventListener('keydown', onKeydown)
    }
  },
  { immediate: true },
)

onBeforeUnmount(() => {
  if (opened.value) {
    removeModal(modalId)
    unlockBodyScroll()
    window.removeEventListener('keydown', onKeydown)
  }
})
</script>

<style scoped>
.lv-modal {
  position: fixed;
  inset: 0;
  display: grid;
  place-items: center;
  padding: var(--space-4);
}

.lv-modal__backdrop {
  position: absolute;
  inset: 0;
  background-color: rgba(15, 23, 42, 0.48);
}

.lv-modal__dialog {
  position: relative;
  background-color: var(--bg-surface);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-xl);
  color: var(--text-primary);
  display: flex;
  flex-direction: column;
  max-height: calc(100vh - 2rem);
  overflow: hidden;
}

.lv-modal__header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: var(--space-4);
  padding: var(--space-5) var(--space-5) var(--space-3);
  border-bottom: 1px solid var(--border-subtle);
}

.lv-modal__heading {
  min-width: 0;
}

.lv-modal__title {
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-lg);
  font-weight: var(--font-semibold);
  line-height: var(--leading-tight);
}

.lv-modal__description {
  margin: var(--space-2) 0 0;
  color: var(--text-secondary);
  font-size: var(--text-sm);
  line-height: var(--leading-normal);
}

.lv-modal__close {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border: none;
  background: transparent;
  border-radius: var(--radius-sm);
  color: var(--text-secondary);
  cursor: pointer;
}

.lv-modal__close:hover {
  background: var(--color-slate-100);
  color: var(--text-primary);
}

.lv-modal__close:focus-visible {
  outline: 2px solid var(--brand-primary);
  outline-offset: 2px;
}

.lv-modal__body {
  padding: var(--space-5);
  overflow: auto;
}

.lv-modal__footer {
  border-top: 1px solid var(--border-subtle);
  padding: var(--space-4) var(--space-5);
}

.lv-modal-fade-enter-active,
.lv-modal-fade-leave-active {
  transition: opacity var(--duration-normal) var(--ease-in-out);
}

.lv-modal-fade-enter-active .lv-modal__dialog,
.lv-modal-fade-leave-active .lv-modal__dialog {
  transition: transform var(--duration-normal) var(--ease-out), opacity var(--duration-normal) var(--ease-out);
}

.lv-modal-fade-enter-from,
.lv-modal-fade-leave-to {
  opacity: 0;
}

.lv-modal-fade-enter-from .lv-modal__dialog,
.lv-modal-fade-leave-to .lv-modal__dialog {
  transform: translateY(1.25rem) scale(0.98);
  opacity: 0;
}

@media (max-width: 640px) {
  .lv-modal {
    padding: var(--space-2);
    align-items: end;
  }

  .lv-modal__dialog {
    width: 100% !important;
    max-height: calc(100vh - 1rem);
    border-radius: var(--radius-lg) var(--radius-lg) 0 0;
  }
}
</style>
