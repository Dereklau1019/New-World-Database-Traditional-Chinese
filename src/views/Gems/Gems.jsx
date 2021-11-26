import * as React from 'react';
import NewWorldTable from '../../components/Table/NewWorldTable.tsx';
import jsonItems from "../../assets/json/gemDetails.json";



export default function Gems() {
    return (<div><NewWorldTable jsonItems={jsonItems} /></div>)
}