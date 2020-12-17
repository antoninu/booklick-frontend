
import {useState} from "react";
import fetch from 'isomorphic-unfetch';
import Booklistcard from "./Booklistcard";
import useSWR, { mutate } from 'swr';
import Grid from '@material-ui/core/Grid';
const API_URL2 = `http://54.161.84.80:8082/institucion/member?correo=antonioaspite@gmail.com`;
import Institutioncard from "./Institutioncard"
import Button from '@material-ui/core/Button';
import Modal from "./Modal"
async function fetcher(url) {
 
    const res = await fetch(url);
    
    const json = await res.json();
    return json;
  }

const Institution = ({owner})=>{
    const {data, error } = useSWR(API_URL2, fetcher);
    const [open, setOpen] = useState(false);
    const [name, setName] = useState("");
  
    if (error) return <div>failed to load</div>;
    if (!data) return <div>loading...</div>;

    const handlecreateBooklist = async () => {
        const updatedTodo = await fetch(POST_BOOKLIST, {
            method: 'POST',
            body: JSON.stringify({ name,owner })
          })
    }
    const handleClose = () => {
        setOpen(false);
      };
    const nameChange = (name)=>{
        setName(name)
    }
    console.log(data[0])
    if(data){
        const institution = data[0].institucion;
        return (
            <>
            <Grid container spacing={3}>
            <Grid item xs={12} sm={4}> <Institutioncard name={institution.nombre} address={institution.direccion} members={institution.members.length} /></Grid>
            </Grid>
           <Modal open = {open} handleClose={handleClose} nameChange={nameChange} onCrate={handlecreateBooklist}/>
            </>
            );
    }
    
}
export default Institution;