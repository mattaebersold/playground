<template>
  <div>
    <client-only>
      <div
        v-if="$nuxt.isPreview"
        class="fixed bottom-5 z-50 left-5 p-2 text-left bg-black text-white bg-opacity-50 flex flex-col"
      >
        <div
          v-if="$preview.isRealtime"
          class="font-semibold text-left text-sm"
        >
          Realtime Preview
        </div>
        <button v-else class="font-semibold underline text-left text-sm" @click="$nuxt.refresh()">
          Refresh Preview
        </button>
      </div>
    </client-only>
  </div>
</template>
