const btns = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.description-container');
const articles = document.querySelectorAll('.text-container');

about.addEventListener('click', (e) => {
    const id = e.target.dataset.id;

    if (id) {
        //remove active from all btns
        btns.forEach((btn) => {
            btn.classList.remove('active');
            e.target.classList.add('active');
        })
        articles.forEach((article) => {
            article.classList.remove('active');
        })
        const element = document.getElementById(id)
        element.classList.add('active')
    }
})