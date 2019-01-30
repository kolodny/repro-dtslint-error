type ArrayUnpacker<T> = T extends Array<infer U> ? U : never;
const stringArray = ['this', 'is', 'cool'];
// $ExpectType string
let unpackedStringArray: ArrayUnpacker<typeof stringArray>;
