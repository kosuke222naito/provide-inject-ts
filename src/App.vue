<script setup lang="ts">
import { ref, provide } from "vue";
import BaseSection from "./components/BaseSection.vue";
import type { Member } from "@/interfaces";
import { membersKey } from "./injectionKeys";

const members = new Map<number, Member>();
members.set(33456, {
  id: 33456,
  name: "田中太郎",
  email: "tanaka@example.com",
  points: 100,
  note: "hogehoge",
});

members.set(45677, {
  id: 45677,
  name: "鈴木二郎",
  email: "suzuki@example.com",
  points: 1000,
});

provide(membersKey, ref(members));
</script>

<template>
  <BaseSection />
</template>
