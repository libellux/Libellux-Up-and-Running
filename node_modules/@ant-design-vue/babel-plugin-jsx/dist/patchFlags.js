"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatchFlagNames = void 0;
// dev only flag -> name mapping
exports.PatchFlagNames = (_a = {},
    _a[1 /* TEXT */] = 'TEXT',
    _a[2 /* CLASS */] = 'CLASS',
    _a[4 /* STYLE */] = 'STYLE',
    _a[8 /* PROPS */] = 'PROPS',
    _a[16 /* FULL_PROPS */] = 'FULL_PROPS',
    _a[32 /* HYDRATE_EVENTS */] = 'HYDRATE_EVENTS',
    _a[64 /* STABLE_FRAGMENT */] = 'STABLE_FRAGMENT',
    _a[128 /* KEYED_FRAGMENT */] = 'KEYED_FRAGMENT',
    _a[256 /* UNKEYED_FRAGMENT */] = 'UNKEYED_FRAGMENT',
    _a[1024 /* DYNAMIC_SLOTS */] = 'DYNAMIC_SLOTS',
    _a[512 /* NEED_PATCH */] = 'NEED_PATCH',
    _a[-1 /* HOISTED */] = 'HOISTED',
    _a[-2 /* BAIL */] = 'BAIL',
    _a);
