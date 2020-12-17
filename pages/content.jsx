import React from "react";

import useApi from "../lib/use-api";
import Layout from "../components/layout";
import { useFetchUser } from "../lib/user";
import withAuth from "../components/with-auth";

function Content() {
  const { user, loading } = useFetchUser();
  const { response, error, isLoading } = useApi("api/content");
  if(response)
  {
    console.log(response)
    localStorage.setItem("content", JSON.stringify(response))
  }
  return (
    <Layout user={user} loading={loading}>
      <h1>Contenido de BookLick</h1>

      {isLoading && <p>Cargando el contenido...</p>}

      {/* {!isLoading && response && (
        <>
          <pre>
            {JSON.stringify(
              response.map((content) => content),
              null,
              2
            )}
          </pre>
        </>
      )} */}
      {!isLoading && response && (
        <>
          <table style={{ borderCollapse: "collapse", width: "100%" }}>
            <thead style={{ borderBottom: "3px solid #eceeef" }}>
              <tr>
                <th
                  style={{
                    border: "1px solid #eceeef",
                    padding: "7px 2px",
                    textAlign: "left",
                  }}
                >
                  Titulo
                </th>
                <th
                  style={{
                    border: "1px solid #eceeef",
                    padding: "7px 2px",
                    textAlign: "left",
                  }}
                >
                  Categoria
                </th>
                <th
                  style={{
                    border: "1px solid #eceeef",
                    padding: "7px 2px",
                    textAlign: "left",
                  }}
                >
                  Autores
                </th>
                <th
                  style={{
                    border: "1px solid #eceeef",
                    padding: "7px 2px",
                    textAlign: "left",
                  }}
                >
                  Palabras clave
                </th>
                <th
                  style={{
                    border: "1px solid #eceeef",
                    padding: "7px 2px",
                    textAlign: "left",
                  }}
                >
                  Score
                </th>
                <th
                  style={{
                    border: "1px solid #eceeef",
                    padding: "7px 2px",
                    textAlign: "left",
                  }}
                >
                  Año publicación
                </th>
                <th
                  style={{
                    border: "1px solid #eceeef",
                    padding: "7px 2px",
                    textAlign: "left",
                  }}
                >
                  Link
                </th>
                <th
                  style={{
                    border: "1px solid #eceeef",
                    padding: "7px 2px",
                    textAlign: "left",
                  }}
                >
                  Fecha
                </th>
              </tr>
            </thead>
            <tbody>
              {response.map((document, i) => (
                <>
                  <tr key={i}>
                    <td
                      style={{
                        border: "1px solid #eceeef",
                        padding: "7px 2px",
                        textAlign: "left",
                      }}
                    >
                      {document.title}
                    </td>
                    <td
                      style={{
                        border: "1px solid #eceeef",
                        padding: "7px 2px",
                        textAlign: "left",
                      }}
                    >
                      {document.category}
                    </td>
                    <td
                      style={{
                        border: "1px solid #eceeef",
                        padding: "7px 2px",
                        textAlign: "left",
                      }}
                    >
                      {document.authors}
                    </td>
                    <td
                      style={{
                        border: "1px solid #eceeef",
                        padding: "7px 2px",
                        textAlign: "left",
                      }}
                    >
                      {document.keyWords}
                    </td>
                    <td
                      style={{
                        border: "1px solid #eceeef",
                        padding: "7px 2px",
                        textAlign: "left",
                      }}
                    >
                      {document.score}
                    </td>
                    <td
                      style={{
                        border: "1px solid #eceeef",
                        padding: "7px 2px",
                        textAlign: "left",
                      }}
                    >
                      {document.publishedYear}
                    </td>

                    <td
                      style={{
                        border: "1px solid #eceeef",
                        padding: "7px 2px",
                        textAlign: "left",
                      }}
                    >
                      <a href={document.upload} target="_blank">
                        VER DOCUMENTO
                      </a>
                    </td>
                    <td
                      style={{
                        border: "1px solid #eceeef",
                        padding: "7px 2px",
                        textAlign: "left",
                      }}
                    >
                      {document.uploaded_at}
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </>
      )}

      {!isLoading && error && (
        <>
          <p>Error loading content: INTEGRITY ERROR</p>
          <pre style={{ color: "red" }}>{JSON.stringify(error, null, 2)}</pre>
        </>
      )}
    </Layout>
  );
}

export default withAuth(Content);
