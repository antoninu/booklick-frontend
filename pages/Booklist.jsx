import {useState} from 'react';
import { useFetchUser } from "../lib/user";
import Layout from '../components/layout';
import Booklist from "../src/components/Booklist";
export default function BookList() {
  const { user, loading } = useFetchUser();
 
  return (
    <Layout user={user} loading={loading}>
      <h1><i>BookList</i></h1>{user &&(<Booklist owner={user.email}/>)}
         

    </Layout>
  );
}
