import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);


/*
    Создать новый проект сделать в нем пагинацию страничек
    Странички: Юзеры, посты, комментарии
    Обработать ошибку 404


    Route углубление
    Динамическое создание страниц
*/