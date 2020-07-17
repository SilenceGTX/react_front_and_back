import React, {useState} from 'react';
import CallApi from './CallApi';

export default function Page() {
    const [content, setContent] = useState("");
    const [greeting, setGreeting] = useState("");

    function getContent() {
        CallApi.getSomething()
        .then(response => {
            console.log(response.data)
            setContent(response.data)
        })
    }
    
    function handleLB () {
        CallApi.sendSomething({"name":"刘备"})
        .then(response => {
            console.log(response.data)
            setGreeting(response.data)
        })
    }

    function handleCC () {
        CallApi.sendSomething({"name":"曹操"})
        .then(response => {
            console.log(response.data)
            setGreeting(response.data)
        })
    }

        getContent();
        console.log(content)

    return (
            <>
                <h1>{ content }</h1>
                <div>
                    <button onClick={ handleLB }>刘备来了</button>
                    <button onClick={ handleCC }>曹操来了</button>
                </div>
                <div>
                    <p>{ greeting }</p>
                </div>
            </>
    );
}
