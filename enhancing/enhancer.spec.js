const enhancer = require("./enhancer.js");
// test away!

const items = [
    { name: "Broad Sword", durability: 55, enhancement: 16 },
    { name: "Battle Fury", durability: -3, enhancement: -2 },
    { name: "Bracer", durability: "fasd", enhancement: "abc" },
];

test("successfully enhances an item", () => {
    expect(enhancer.succeed(items[0])).toEqual({
        name: "Broad Sword",
        durability: 55,
        enhancement: 17,
    });
    expect(enhancer.succeed(items[1])).toEqual({
        name: "Battle Fury",
        durability: -3,
        enhancement: 0,
    });
    expect(() => enhancer.succeed(items[2])).toThrow();
});

test("enahancement failed", () => {
    expect(enhancer.fail(items[0])).toEqual({
        name: "Broad Sword",
        durability: 45,
        enhancement: 16,
    });
    expect(enhancer.fail(items[1])).toEqual({
        name: "Battle Fury",
        durability: -8,
        enhancement: 0,
    });
    expect(() => enhancer.fail(items[2])).toThrow();
});

test("repair an item", () => {
    expect(enhancer.repair(items[0])).toEqual({
        name: "Broad Sword",
        durability: 100,
        enhancement: 16,
    });
    expect(enhancer.repair(items[1])).toEqual({
        name: "Battle Fury",
        durability: 100,
        enhancement: 0,
    });
    expect(() => enhancer.repair(item[2])).toThrow();
});
