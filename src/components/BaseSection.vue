<script setup lang="ts">
import { computed, inject } from "vue";
import OneMember from "./OneMember.vue";
import type { Member } from "@/interfaces";

const memberList = inject("memberList") as Map<number, Member>;

const totalPoints = computed((): number => {
  return Array.from(memberList.values()).reduce((sum, member) => sum + member.points, 0);
});
</script>

<template>
  <section>
    <h2>会員リスト</h2>
    <p>会員の合計ポイント数: {{ totalPoints }}</p>
    <OneMember v-for="id of memberList.keys()" :key="`member-${id}`" :id />
  </section>
</template>

<style scoped>
section {
  border: orange 1px dashed;
  margin: 10px;
}
</style>
