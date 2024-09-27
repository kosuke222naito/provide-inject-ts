<script setup lang="ts">
import { reactive, provide } from "vue";
import BaseSection from "./components/BaseSection.vue";
import type { Member } from "@/interfaces";

const memberList = new Map<number, Member>();
memberList.set(33456, {
  id: 33456,
  name: "田中太郎",
  email: "tanaka@example.com",
  points: 100,
  note: "hogehoge",
});

memberList.set(45677, {
  id: 45677,
  name: "鈴木二郎",
  email: "suzuki@example.com",
  points: 1000,
});

provide("memberList", reactive(memberList));
</script>

<template>
  <BaseSection />
</template>
