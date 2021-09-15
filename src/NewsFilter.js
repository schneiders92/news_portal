import React, {useState, useEffect} from 'react'
import News from "./News"

export default function NewsFilter(props){
    let [sort, setSort]=useState("popularity");

    return(
        <div>
            <div className="filter-cont">
                <select onChange={(e)=>setSort(e.target.value)} name="" id="">
                    <option value="popularity">Popularity</option>
                    <option value="newest">Newest</option>
                    <option value="relevancy">Relevancy</option>
                </select>
            </div>
            <News category={props.category} sort={sort}/>
        </div>


    )
}