import React from "react"
import { useParams } from "react-router-dom";
import {useFindLocation} from "../hooks/useFindLocation"
import {Typography} from "@mui/material"
const Location = () => {
    const params = useParams();
    const {data, loading} = useFindLocation(params.locationId)
    console.log(data)
    if (loading){
        return <></>
    }

    return (<div>
       <Typography>{data.location.name}</Typography> 

        {data.location.residents.map((result) => (

            <Typography>{result.name}</Typography>

        ))}

    </div>)
}

export default Location;