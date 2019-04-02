import React, { useEffect, useState } from 'react';
import showdown from 'showdown';
import { markdownStore } from 'src/config';

const converter = new showdown.Converter();
export default function MarkdownPanel(props : {url : string}) {

    useEffect(()=>{
        return () => {
            
        }
    })
    const [html, setHtml] = useState('');
    async function load(fileName : string) {
        const md = await markdownStore.get(fileName);
        setHtml(converter.makeHtml(md));
    }
    load(props.url);
    return (
        <div dangerouslySetInnerHTML={{__html : html}}/>
    )
}