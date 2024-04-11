function solution() {

    const articlesListUrl = 'http://localhost:3030/jsonstore/advanced/articles/list';
    const mainSectionElement = document.getElementById('main');

    fetch(articlesListUrl)
    .then(res => res.json())
    .then(data => {

        const articles = Object.values(data);

        articles.forEach(article => {

            fetchArticleContent(article._id)
            .then(content => {
                createElements(article, content);
            });

        });

    });


    function createElements(article, content){

        const pContentElement = document.createElement('p');
        pContentElement.textContent = content;

        const divExtraHiddenElement = document.createElement('div');
        divExtraHiddenElement.classList.add('extra');

        divExtraHiddenElement.appendChild(pContentElement); // EXTRA HIDDEN ELEMENT AND IT'S CHILD 

        const moreOrLessButton = document.createElement('button');
        moreOrLessButton.classList.add('button');
        moreOrLessButton.textContent = 'More';
        moreOrLessButton.id = article._id;

        const spanElement = document.createElement('span');
        spanElement.textContent = article.title;

        const divHeadElement = document.createElement('div');
        divHeadElement.classList.add('head');

        divHeadElement.appendChild(spanElement); // HEAD ELEMENT AND IT'S CHILDREN
        divHeadElement.appendChild(moreOrLessButton); // HEAD ELEMENT AND IT'S CHILDREN

        const divAccordionElement = document.createElement('div');
        divAccordionElement.classList.add('accordion');

        divAccordionElement.appendChild(divHeadElement);
        divAccordionElement.appendChild(divExtraHiddenElement);

        mainSectionElement.appendChild(divAccordionElement);


        moreOrLessButton.addEventListener('click', ()=> {

            if ( moreOrLessButton.textContent == "Less"){
                divExtraHiddenElement.style.display = 'none';
                moreOrLessButton.textContent = "More";
            } else {
                divExtraHiddenElement.style.display = 'block';
                moreOrLessButton.textContent = "Less";
            }
        });

        return mainSectionElement;
    }

    function fetchArticleContent(articleId) {
        const articleUrl = `http://localhost:3030/jsonstore/advanced/articles/details/${articleId}`;
        return fetch(articleUrl)
            .then(res => res.json())
            .then(data => data.content);
    }
}

solution();