import {useState} from "react";
import fetch from 'isomorphic-unfetch';
import Booklistcard from "./Booklistcard";
import useSWR, { mutate } from 'swr';
import Grid from '@material-ui/core/Grid';
const API_URL2 = `https://od6ufz9hbg.execute-api.us-east-2.amazonaws.com/booklist/list`;

import Button from '@material-ui/core/Button';
import Modal from "./Modal"
async function fetcher(url) {
  console.log(url)
    const res = await fetch(url);
    console.log(res)
    const json = await res.json();
    return json;
  }

const Booklist = ({owner})=>{
    const { data, error } = useSWR(API_URL2, fetcher);
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
    console.log(data)
    return (
        <>
        <Button onClick={()=>setOpen(true)}style={{fontSize: "3rem"}}size="large" color="#333">
        +
        </Button>
        <Grid container spacing={3}>
        {data.map(({id,content,name}) =>  <Grid item xs={12} sm={4}> <Booklistcard key={id} name={name} content={content} owner={owner} /></Grid>)}
        </Grid>
       <Modal open = {open} handleClose={handleClose} nameChange={nameChange} onCrate={handlecreateBooklist}/>
        </>
        );
}
export default Booklist;