window.onload = function() {
    getCards()

    input = document.getElementsByClassName('header__form__search__input')[0]
    input.onfocus = function() {
        if (document.getElementsByClassName('header__form__search__input_placeholder active')[0]) {
            document.getElementsByClassName('header__form__search__input_placeholder active')[0].classList.toggle('active')
        }
    }
    input.onblur = function() {
        if (!document.getElementsByClassName('header__form__search__input_placeholder active')[0] && !input.value) {
            document.getElementsByClassName('header__form__search__input_placeholder')[0].classList.toggle('active')
        }
    }
    body = document.getElementsByTagName('body')[0]
    window.addEventListener('click', fn)
}

function fn(e) {
    e.stopPropagation()
    
    if (e.target.className === 'header__burger') {
        e.stopPropagation()
        nav = document.getElementsByClassName('header__navigation')[0]
        nav.classList.toggle('active')
    } else if (e.target.closest('.header__search__container')) {
        e.stopPropagation()
        search = document.getElementsByClassName('header__form')[0]
        search.classList.toggle('active')
    } else if (e.target.closest('.header__contacts__container')) {
        e.stopPropagation()
        call = document.getElementsByClassName('header__contacts_popup')[0]
        call.classList.toggle('active')
    } else if (e.target.className === 'header__account__button') {
        e.stopPropagation()
        login = document.getElementsByClassName('header__popup')[0]
        login.classList.toggle('active')
    } else if (e.target.className === 'header__popup active') {
        e.stopPropagation()
        logout = document.getElementsByClassName('header__popup active')[0]
        logout.classList.toggle('active')
    } else {
        fn2()
    }
}

function fn2() {
    strings = ['header__navigation', 'header__contacts_popup']
    for (let i = 0; i < strings.length; i++) {
        if (document.getElementsByClassName(`${strings[i]} active`)[0]) {
            document.getElementsByClassName(`${strings[i]} active`)[0].classList.toggle('active')
        }
    }
}

function getCards() {
    fetch('http://127.0.0.1:8000/example.com/api/v1/johan')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        const cards = document.getElementsByClassName('teacher__list')[0]

        data.map(card => cards.innerHTML += 
                            <li class="teacher__list__item" key={card.id}>
                                <a href="#" class="teacher__list-item-link">
                                    <div class="teacher__list-link-item-img">
                                        <img src={card.photo} alt=""></img>
                                    </div>
                                    <p class="teacher__list-item-name">{card.name_surname}</p>
                                </a>
                            </li>
                            )
    });
}