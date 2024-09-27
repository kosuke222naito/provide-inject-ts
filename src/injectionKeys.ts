import type { InjectionKey } from "vue";
import type { Member } from "@/interfaces";

export const memberListKey: InjectionKey<Map<number, Member>> = Symbol("memberList");
