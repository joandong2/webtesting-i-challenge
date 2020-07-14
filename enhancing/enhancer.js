module.exports = {
    succeed,
    fail,
    repair,
    get,
};

function succeed(item) {
    if (item.enhancement < 0) {
        item.enhancement = 0;
    } else if (typeof item.enhancement !== "number") {
        throw new Error("enhancement is invalid");
    } else if (item.enhancement < 20) {
        item.enhancement++;
    }
    return { ...item };
}

function fail(item) {
    if (typeof item.enhancement !== "number") {
        throw new Error("enhancement is invalid");
    }

    if (item.enhancement >= 15) {
        item.durability -= 10;

        if (item.enhancement > 16) {
            item.enhancement--;
        }
    } else {
        item.durability -= 5;
    }

    return { ...item };
}

function repair(item) {
    if (typeof item.durability !== "number") {
        throw new Error("durability is invalid");
    }

    return { ...item, durability: 100 };
}

function get(item) {
    return { ...item };
}
