const { Seq } = require('immutable');

export default function printBestStudents(grades) {
    const fltr = Seq(grades)
        .filter(std => std.score >= 70)
        .map(std => ({
            ...std,
            firstName: cap(std.firstName),
            lastName: cap(std.lastName),
        })).toObject();
    console.log(fltr);
}

function cap(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}