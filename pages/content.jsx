import React from "react";

import useApi from "../lib/use-api";
import Layout from "../components/layout";
import { useFetchUser } from "../lib/user";
import withAuth from "../components/with-auth";

function Content() {
  const { user, loading } = useFetchUser();
  const { response, error, isLoading } = useApi("/api/content");

  return (
    <Layout user={user} loading={loading}>
      <h1>Contenido de BookLick</h1>

      {isLoading && <p>Cargando el contenido...</p>}

      {!isLoading && response && (
        <>
          <pre>
            {JSON.stringify(
              response.map((content) => content),
              null,
              2
            )}
          </pre>
        </>
      )}

      {!isLoading && error && (
        <>
          <p>Error loading content</p>
          <pre style={{ color: "red" }}>{JSON.stringify(error, null, 2)}</pre>
        </>
      )}
    </Layout>
  );
}

export default withAuth(Content);
