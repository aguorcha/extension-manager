<template>
  <div
    class="w-[72%] lg:w-[80%] mt-8 flex flex-col lg:flex-row lg:items-center lg:justify-between"
  >
    <h1
      class="text-3xl lg:text-4xl font-bold text-neutral-900 flex justify-center lg:mt-4"
    >
      Extensions List
    </h1>
    <div class="mt-4 flex justify-between">
      <button
        class="bg-neutral-0 px-5 py-2 border-2 rounded-3xl hover:bg-red-400 hover:text-neutral-0"
      >
        All
      </button>
      <button
        class="bg-neutral-0 px-5 py-2 border-2 rounded-3xl lg:ml-3 hover:bg-red-400 hover:text-neutral-0"
      >
        Active
      </button>
      <button
        class="bg-neutral-0 px-5 py-2 border-2 rounded-3xl lg:ml-3 hover:bg-red-400 hover:text-neutral-0"
      >
        Inactive
      </button>
    </div>
  </div>
</template>
