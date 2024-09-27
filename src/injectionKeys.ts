import type { InjectionKey, Ref } from "vue";
import type { Member } from "@/interfaces";

export const membersKey: InjectionKey<Ref<Map<number, Member>>> = Symbol("members");
