<template>
  <div
    class="lv-template-view"
    :class="rootClasses"
  >
    <!-- ── Chrome: header + toolbar (optionally sticky) ── -->
    <div
      v-if="hasChrome"
      class="lv-template-view__chrome"
    >
      <div
        v-if="$slots.header || hasInlineHeader"
        class="lv-template-view__header"
      >
        <slot
          v-if="$slots.header"
          name="header"
        />
        <PageHeader
          v-else
          :icon="icon"
          :eyebrow="eyebrow"
          :subtitle="subtitle"
          :tag="titleTag"
          :loading="loading"
        >
          {{ title }}

          <template
            v-if="$slots.breadcrumb || normalizedBreadcrumbs.length"
            #breadcrumb
          >
            <slot
              v-if="$slots.breadcrumb"
              name="breadcrumb"
            />
            <Breadcrumb
              v-else
              :items="normalizedBreadcrumbs"
              @click="onBreadcrumbClick"
            />
          </template>

          <template
            v-if="$slots.actions || normalizedActions.length"
            #actions
          >
            <slot
              v-if="$slots.actions"
              name="actions"
            />
            <div
              v-else
              class="lv-template-view__header-actions"
            >
              <Button
                v-for="(action, index) in normalizedActions"
                :key="action.key || `${action.label}-${index}`"
                :label="action.label || ''"
                :variant="action.variant || 'outlined'"
                :size="action.size || 'sm'"
                :icon="action.icon || null"
                :icon-position="action.iconPosition || 'left'"
                :disabled="Boolean(action.disabled)"
                :loading="Boolean(action.loading)"
                :aria-label="action.ariaLabel"
                v-bind="action.attrs || {}"
                @click="onActionClick(action, index)"
              />
            </div>
          </template>

          <template
            v-if="$slots.meta"
            #meta
          >
            <slot name="meta" />
          </template>
        </PageHeader>
      </div>
      <div
        v-if="$slots.toolbar"
        class="lv-template-view__toolbar"
      >
        <slot name="toolbar" />
      </div>
    </div>

    <!-- ── Body: main content + optional aside ── -->
    <div class="lv-template-view__body">
      <main
        class="lv-template-view__main"
        tabindex="-1"
      >
        <slot />
      </main>

      <aside
        v-if="$slots.aside"
        class="lv-template-view__aside"
        :aria-label="asideLabel"
      >
        <slot name="aside" />
      </aside>
    </div>
  </div>
</template>

<script setup>
import { computed, useSlots } from 'vue'
import PageHeader from '../../PageHeader/PageHeader.vue'
import Button from '../../Button/Button.vue'
import Breadcrumb from '../../Breadcrumb/Breadcrumb.vue'

/**
 * TemplateView — Standard page-view layout shell.
 *
 * Use inside the content area of SidebarLayout or TopNavLayout
 * to structure any page view into header chrome, an optional toolbar,
 * a main content area, and an optional aside panel.
 *
 * Slots:
 *   header     — full-width page header zone (compose PageHeader manually)
 *   breadcrumb — custom breadcrumb slot for built-in PageHeader mode
 *   actions    — custom actions slot for built-in PageHeader mode
 *   meta       — custom meta slot for built-in PageHeader mode
 *   toolbar  — optional bar below header: tabs, filter controls, bulk actions
 *   default  — main scrollable page content
 *   aside    — optional side panel alongside the main content
 */
const props = defineProps({
  /**
   * Adds standard horizontal padding (`--space-6`) to all zones.
   * Set to `false` for full-bleed content such as data tables.
   */
  padding: {
    type: Boolean,
    default: true,
  },
  /**
   * Maximum width of the entire view. Use to constrain wide viewports.
   * Accepts any valid CSS length (`1280px`, `90ch`, etc.)
   * or `'none'` for full-width.
   */
  maxWidth: {
    type: String,
    default: 'none',
  },
  /**
   * Width of the aside panel. Accepts any valid CSS length.
   */
  asideWidth: {
    type: String,
    default: '320px',
  },
  /**
   * Stick the header + toolbar chrome to the top of the scroll container.
   */
  stickyChrome: {
    type: Boolean,
    default: false,
  },
  /**
   * Which side the aside panel appears on.
   */
  asidePosition: {
    type: String,
    default: 'right',
    validator: (v) => ['left', 'right'].includes(v),
  },
  /**
   * Accessible label for the aside landmark element.
   */
  asideLabel: {
    type: String,
    default: 'Side panel',
  },
  /** Page title used by built-in PageHeader mode. */
  title: {
    type: String,
    default: '',
  },
  /** Small label above title in built-in PageHeader mode. */
  eyebrow: {
    type: String,
    default: undefined,
  },
  /** Supporting text below title in built-in PageHeader mode. */
  subtitle: {
    type: String,
    default: undefined,
  },
  /** Optional icon shown beside title in built-in PageHeader mode. */
  icon: {
    type: String,
    default: undefined,
  },
  /** Heading element used by built-in PageHeader mode. */
  titleTag: {
    type: String,
    default: 'h1',
    validator: (v) => ['h1', 'h2', 'h3'].includes(v),
  },
  /** Shows loader in place of icon for built-in PageHeader mode. */
  loading: {
    type: Boolean,
    default: false,
  },
  /**
   * Built-in breadcrumb model:
   * [{ label, href?, current?, key?, onClick? }]
   */
  breadcrumbs: {
    type: Array,
    default: () => [],
  },
  /**
   * Built-in actions model:
   * [{ label, key?, variant?, size?, icon?, iconPosition?, disabled?, loading?, ariaLabel?, attrs? }]
   */
  actions: {
    type: Array,
    default: () => [],
  },
})

const emit = defineEmits(['action', 'breadcrumb-click'])
const slots = useSlots()

const normalizedBreadcrumbs = computed(() =>
  props.breadcrumbs.filter((crumb) => crumb && typeof crumb.label === 'string' && crumb.label.length > 0)
)

const normalizedActions = computed(() => props.actions.filter(Boolean))

const hasInlineHeader = computed(() =>
  Boolean(
    props.title ||
    props.eyebrow ||
    props.subtitle ||
    props.icon ||
    props.loading ||
    normalizedBreadcrumbs.value.length ||
    normalizedActions.value.length ||
    slots.breadcrumb ||
    slots.actions ||
    slots.meta
  )
)

const hasChrome = computed(() => Boolean(slots.header || slots.toolbar || hasInlineHeader.value))

function onActionClick(action, index) {
  emit('action', { action, index, key: action?.key })
}

function onBreadcrumbClick(crumb, index, event) {
  emit('breadcrumb-click', { crumb, index, event })
}

const rootClasses = computed(() => ({
  'lv-template-view--padded':        props.padding,
  'lv-template-view--constrained':   props.maxWidth !== 'none',
  'lv-template-view--sticky-chrome': props.stickyChrome,
  'lv-template-view--aside-left':    props.asidePosition === 'left',
}))
</script>

<style scoped>
/* ── Root ── */
.lv-template-view {
  display: flex;
  flex-direction: column;
  min-height: 100%;
  width: 100%;
  box-sizing: border-box;
  background: var(--bg-page);
  font-family: var(--font-sans);
  color: var(--text-primary);
}

.lv-template-view--constrained {
  max-width: v-bind(maxWidth);
  margin-inline: auto;
}

/* ── Chrome ── */
.lv-template-view__chrome {
  flex-shrink: 0;
  background: var(--bg-page);
}

.lv-template-view--sticky-chrome .lv-template-view__chrome {
  position: sticky;
  top: 0;
  z-index: 100;
  /* Lift above content that scrolls underneath */
  box-shadow: 0 1px 0 var(--border-subtle);
}

/* ── Header ── */
.lv-template-view__header {
  padding-top: var(--space-6);
  padding-bottom: var(--space-6);
  border-bottom: 1px solid var(--border-subtle);
}

.lv-template-view--padded .lv-template-view__header {
  padding-inline: var(--space-6);
}

.lv-template-view__header-actions {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  flex-wrap: wrap;
}

/* ── Toolbar ── */
.lv-template-view__toolbar {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  min-height: 48px;
  padding-block: var(--space-2);
  border-bottom: 1px solid var(--border-subtle);
  background: var(--bg-surface);
}

.lv-template-view--padded .lv-template-view__toolbar {
  padding-inline: var(--space-6);
}

/* ── Body ── */
.lv-template-view__body {
  display: flex;
  flex-direction: row;
  flex: 1 1 auto;
  min-height: 0;
}

.lv-template-view--aside-left .lv-template-view__body {
  flex-direction: row-reverse;
}

/* ── Main ── */
.lv-template-view__main {
  flex: 1 1 auto;
  min-width: 0;
  padding-block: var(--space-6);
  outline: none;
}

.lv-template-view--padded .lv-template-view__main {
  padding-inline: var(--space-6);
}

/* ── Aside ── */
.lv-template-view__aside {
  flex: 0 0 v-bind(asideWidth);
  width: v-bind(asideWidth);
  min-width: 0;
  overflow-y: auto;
  padding: var(--space-4);
  background: var(--bg-surface);
  border-left: 1px solid var(--border-subtle);
}

.lv-template-view--aside-left .lv-template-view__aside {
  border-left: none;
  border-right: 1px solid var(--border-subtle);
}
</style>
