const reviewContents = document.getElementsByClassName('review__content')[0]
const txtArea = document.getElementById("review_text")
const reviews = [
    {
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt unde nisi modi corporis dignissimos animi ab nesciunt maxime voluptatum natus. Saepe quo aspernatur voluptatum pariatur accusamus repellat, natus consectetur i ?",
        date: '2002.08.13'
    },
    {
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt unde nisi modi corporis dignissimos animi ab nesciunt maxime voluptatum natus. Saepe quo aspernatur voluptatum pariatur accusamus repellat, natus consectetur i ?",
        date: '2002.08.13'
    }
]

function smbtForm() {
    if (txtArea.value !== '') {
        reviews.push({ desc: txtArea.value, date: formatDate(new Date()) })
        renderReviews(reviews)
        txtArea.value = ""
    } else {
        alert("Set Desc PLS!")
    }
}

renderReviews(reviews)
function renderReviews(array) {
    let str = ``;
    array.map((arr) => (
        str += `
        <div class="review__text">
            ${arr.desc}
            <div class="review__options">
                <p class="review__date">${arr.date}</p>
                <p class="review__user-name">FootballFan</p>
            </div>
        </div>
    `
    ))

    return (reviewContents.innerHTML = str)
}

function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [year, month, day].join('.');
}