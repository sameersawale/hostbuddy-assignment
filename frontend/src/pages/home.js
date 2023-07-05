import React, {useEffect, useState} from 'react';
import axios from 'axios';

export default function Home() {

    const [items, setItems] = useState([])
    const [Displayitems, setDisplayItems] = useState([])
    const [text, setText] = useState("");
    useEffect(() => {
        loadItems();
    }, []);

    const loadItems = async () => {
        const result = await axios.get("http://localhost:8080/itemList");
        setItems(result.data);
        setDisplayItems(result.data);
    };
    function onChangeSearchName(e) {
        const searchName = e.target.value.toLowerCase();
        setText(searchName);
        if(searchName.length>0){
          console.log(items[0].name,text);
          const filteredResults=items.filter((item)=>
            
            item.name.includes(searchName)
          )
          console.log("filtered data",filteredResults);
          setDisplayItems(filteredResults);
        }else{
          setDisplayItems(items);
          console.log("reset to items");
        }
    };

    return (


        <div className='container'>
          
            <input type="text" className="form-control" placeholder="Search by Name"
                value={text}
                onChange={onChangeSearchName}/>
            <div className='py-4'>
                <table className="table border shadow">
                    <thead>
                        <tr>
                            <th scope="col">S.N</th>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Category</th>
                            <th scope="col">Description</th>
                        </tr>
                    </thead>
                    <tbody> {
                        Displayitems.map((item) => (
                            <tr>
                                <td key={
                                    item.id
                                }>
                                    {
                                    item.id
                                } </td>
                                <td>{
                                    item.name
                                }</td>
                                <td>{
                                    item.price
                                }</td>
                                <td>{
                                    item.category
                                }</td>
                                <td>{
                                    item.description
                                }</td>
                            </tr>
                        ))
                    } </tbody>
                </table>
            </div>
        </div>
    )
}
