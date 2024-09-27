import type { InjectionKey } from "vue";
import type { Member } from "@/interfaces";

export const membersKey: InjectionKey<Map<number, Member>> = Symbol("members");
