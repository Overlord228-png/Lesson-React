import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios'
const App = () => {
    
    // https://jsonplaceholder.typicode.com/comments?_limit=5&_page=actovePage
    // Коментарии
    // activePage = 3
    // _limit - Сколько элементов я хочу получить, _page - сколько элементов пропуская я хочу получить
    // 1 - Знать общее количество элементов - 500
    // 2 - Нужно знать количество кнопок 500/limit = 100
    // 3 - Зная количество кнопок - создать массив с этими данными [1,2,3..100]
    // 4 - Отрисовую кнопки на верстке
    // 5 - При событии нажатия на кнопку - мы меняем статус активной странички на то значение которое было указанно в кнопке
    // 6 - Если меняется активПаже - запрашивать новые комментарии

    const limit = 25;
    const [activePage,setActivePage] = useState(1)
    const [comments,setComments] = useState([])
    const [buttons,setButtons] = useState([])

    const fetchComments = async () =>  {
        const resp = await axios.get(`https://jsonplaceholder.typicode.com/comments?_limit=${limit}&_page=${activePage}`)
        const countComments = resp.headers['x-total-count']
        const countButtons = countComments/limit
        const btns = []
        for(let i = 1; i <= countButtons; i++) {
            btns.push(i)
        }
        const coms = resp.data
        setButtons(btns)
        setComments(coms)
    }

    useEffect(() => {
        fetchComments()
    }, [activePage])

    const addBrand = async () => {
        const resp = await axios.post('http://127.0.0.1:5000/api/brand',{name: "Gucci"})
        console.log(resp)
    }

    const addTypes = async()=>{
        const resp = await axios.post("http://127.0.0.1:5000/api/type",{name:"Холодильник"})
        console.log(resp)
    }
    return (
        <>
        
        <button onClick={addBrand}>add brand</button>
        <button onClick={addTypes}>add Types</button>
        <div>
            {
                comments.map(com=><h4 key={com.id}>{com.name}</h4>)
            }
            <button onClick={()=>setActivePage(activePage-1)}> - </button>
            {
                buttons.map(btn=>
                <button key={btn} onClick={()=>setActivePage(btn)}>{btn}</button>)
            }
            <button onClick={()=>setActivePage(activePage+1)}> + </button>
        </div>
        </>
    )
}

export default App
