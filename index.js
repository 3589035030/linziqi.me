function updateCountdown(targetDate, elementId) {
    const now = new Date().getTime();
    const target = new Date(targetDate).getTime();
    const timeElement = document.getElementById(elementId);
    timeElement.innerHTML = '';
    const difference = target - now;

    if (difference <= 0) {
        document.getElementById(elementId).innerHTML = '已经到了！';
        return;
    }

    const months = Math.floor(difference / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor((difference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    let timeString = '<div class="countdown-unit">';
    if (months > 0) {
        timeString += `<span>${months}月</span>`;
    }
    timeString += `<span>${days}天</span>
                   <span>${hours}时</span>
                   <span>${minutes}分</span>
                   <span>${seconds}秒</span>
                </div>`;

    document.getElementById(elementId).innerHTML = timeString;
}

// 设置目标日期
const time1 = '2025-03-15 10:00:00';
const time2 = '2025-03-16 09:00:00';
const time3 = '2025-03-22 09:00:00';
const time6 = '2025-04-24 00:00:00';
const time5 = '2025-05-15 00:00:00';
const time4 = '2025-06-07 09:00:00';

// 初始更新
updateCountdown(time1, 'time1');
updateCountdown(time2, 'time2');
updateCountdown(time3, 'time3');
updateCountdown(time6, 'time6');
updateCountdown(time5, 'time5');
updateCountdown(time4, 'time4');

// 每秒更新倒计时
setInterval(() => {
    updateCountdown(time1, 'time1');
    updateCountdown(time2, 'time2');
    updateCountdown(time3, 'time3');
    updateCountdown(time6, 'time6');
    updateCountdown(time5, 'time5');
    updateCountdown(time4, 'time4');
}, 1000);