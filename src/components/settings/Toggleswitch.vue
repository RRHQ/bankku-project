<script setup>
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['update:modelValue'])

const handleToggle = () => {
  emit('update:modelValue', !props.modelValue)
}
</script>

<template>
  <button
    type="button"
    role="switch"
    :aria-checked="props.modelValue"
    @click="handleToggle"
    class="relative h-[30px] w-[56px] shrink-0 rounded-full transition-colors duration-200"
    :class="props.modelValue ? 'bg-[#16DBCC]' : 'bg-[#DFEAF2]'"
  >
    <span
      class="absolute left-[2px] top-[2px] h-[26px] w-[26px] rounded-full bg-white shadow-sm transition-transform duration-200"
      :class="props.modelValue ? 'translate-x-[26px]' : 'translate-x-0'"
    ></span>
  </button>
</template>
