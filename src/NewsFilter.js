import React, {useState, useEffect} from 'react'
import News from "./News"

export default function NewsFilter(props){
    let [sort, setSort]=useState("popularity")

    return(
        <div>
            <div className="filter-cont">
                <select name="" id="">
                    <option value="">Popularity</option>
                    <option value="">Newest</option>
                    <option value="">Relevancy</option>
                </select>
            </div>
            <News category={props.category}></News>
        </div>


    )
}