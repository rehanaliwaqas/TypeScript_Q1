var names = ["Muhammad", 'Rehan', 'Waqas'];
var printInvitations = function (name) { return console.log("Dear ".concat(name, ",\nYou are cordially invited to dinner at my place.Please let me know if you can make it.\nSincerely, Muhamamd Irfan\n")); };
names.forEach(function (name) {
    printInvitations(name);
});
var busyGuestIndex = Math.floor(Math.random() * names.length);
console.log("".concat(names[busyGuestIndex], " can't make it to the dinner."));
names[busyGuestIndex] = 'Muhammad';
names.forEach(function (name) {
    printInvitations(name);
});
