const students = [
    {
        name: 'Mark',
        marks: [100, 65, 88, 90, 50],
        attends: 0,
        avgMark: getAvgMark,
        maxMark: getMaxMark,
        changeAttends: changeAttends,
        info: getInfo
    },
    {
        name: 'John',
        marks: [83, 10, 65, 0, 50, 83],
        attends: 0,
        avgMark: getAvgMark,
        maxMark: getMaxMark,
        changeAttends: changeAttends,
        info: getInfo
    },
    {
        name: 'Joel',
        marks: [100, 65, 90, 20],
        attends: 0,
        avgMark: getAvgMark,
        maxMark: getMaxMark,
        changeAttends: changeAttends,
        info: getInfo
    }
];

function getAvgMark() {
    let avgMark = 0;
    for(let i = 0; i <this.marks.length;i++) {
        avgMark += this.marks[i];
    }
    let res = avgMark / this.marks.length;
    return res;
};

function getMaxMark() {
    return Math.max.apply(Math, this.marks);
}

function changeAttends() {
    return this.attends++;
}

function getInfo() {
    return `
        Name: ${this.name};
        average mark: ${this.marks};
        attends: ${this.attends};
    `;
}