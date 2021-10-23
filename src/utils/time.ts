function now() {
    return Math.floor(new Date().getTime() / 1000)
}

const duration = {
    now: function () { return Math.floor(new Date().getTime() / 1000) },
    seconds: function (val: number) { return val },
    minutes: function (val: number) { return val * this.seconds(60) },
    hours: function (val: number) { return val * this.minutes(60) },
    days: function (val: number) { return val * this.hours(24) },
    weeks: function (val: number) { return val * this.days(7) },
    years: function (val: number) { return val * this.days(365) },
};

export default {
    now,
    duration,
};