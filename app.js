const days = document.querySelector("#days");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");

let year = new Date().getFullYear();

const getRemainingTime = () => {
    const deadline = `Dec 31 ${year} 23:59:59 GMT-0500`;
    let now = new Date(),
        remainTime = (new Date(deadline) - now + 1000) / 1000,
        remainSeconds = ("0" + Math.floor(remainTime % 60)).slice(-2),
        remainMinutes = ("0" + Math.floor((remainTime / 60) % 60)).slice(-2),
        remainHours = ("0" + Math.floor((remainTime / 3600) % 24)).slice(-2),
        remainDays = Math.floor(remainTime / (3600 * 24));

    return {
        remainSeconds,
        remainMinutes,
        remainHours,
        remainDays,
        remainTime,
    };
};

const countdown = () => {
    const timerUpdate = setInterval(() => {
        let t = getRemainingTime();

        days.textContent =t.remainDays
        hours.textContent =  t.remainHours
        minutes.textContent = t.remainMinutes
        seconds.textContent = t.remainSeconds

        if (t.remainTime <= 1) {
            const parent = days.parentNode.parentNode
            parent.innerHTML = "<b>Se acabó 🚀</b>"
            clearInterval(timerUpdate)
        }

    }, 1000);
};

countdown();
