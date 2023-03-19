const ids = new Set([1, 2, 3]);
ids.add(2); //nothing will change as 2 is a part of set right now
ids.add(4);

const names = new Set(['Bart', 'Thomas', 'Tim']);
for (const entry of names.entries) {
    console.log(entry); // will log [Bartek, Bartek][Thomas, Thomas] etc because key of value Thomas is Thomas etc
}

if (names.has('Tim')) {
    console.log('Tim is a part of names set!')
}

names.delete('Thomas');

const namesMap = new Map([['key', 'value'], ['key2', 'value']]);

for (const [key, value] of namesMap.entries()) {
    console.log(key, value);
}

for (const key of namesMap.keys()) {
    console.log(key);
}

for (const value of namesMap.values()) {
    console.log(value);
}
