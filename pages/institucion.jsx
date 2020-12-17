import {useState} from 'react';
import { useFetchUser } from "../lib/user";
import Layout from '../components/layout';
import Institution from "../src/components/institucion";
export default function institucion() {
  const { user, loading } = useFetchUser();

  return (
    <Layout user={user} loading={loading}>
      <h1><i>Institucion</i></h1>{user &&(<Institution owner={user.email}/>)}
         

    </Layout>
  );
}
