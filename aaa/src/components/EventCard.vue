<script setup lang="ts">
import {  } from 'vue';
import type { Event } from '@/types';

// 正确定义props来接收外部传入的event对象
defineProps<{
  event: Event;
}>();
</script>

<template>
  <!-- 直接使用props接收的event对象 -->
  What's next?
  <div class="event-class">
    <div class="event-card">
      <h2>{{ event.title }}</h2>
      <span>@{{ event.time }} on {{ event.date }}</span>
    </div>
  </div>
</template>

<style scoped>
.event-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}

.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>
