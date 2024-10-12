<script setup lang="ts">
import { computed, inject } from "vue";
import type { Member } from "@/interfaces";
import { membersKey } from "@/injectionKeys";

interface Props {
  id: number;
}

const { id } = defineProps<Props>();
const members = inject(membersKey)!;

const member = computed((): Member => {
  return members.value.get(id)!;
});

const noteDisplay = computed((): string => {
  return member.value.note != undefined ? member.value.note : "--";
});
</script>

<template>
  <section class="box">
    <h4>{{ member.name }}さんの情報</h4>
    <dl>
      <dt>ID</dt>
      <dd></dd>
      <dt>メールアドレス</dt>
      <dd></dd>
      <dt>ポイント</dt>
      <dd><input type="number" v-model.number="member.points" /></dd>
      <dt>備考</dt>
      <dd>{{ noteDisplay }}</dd>
    </dl>
  </section>
</template>

<style scoped>
.box {
  border: green 1px solid;
  margin: 10px;
}
</style>
