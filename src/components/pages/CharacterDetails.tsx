import React from "react";
import { Layout } from "../layouts/Layout";
import { RouteComponentProps } from "react-router-dom";

type TParams = { id: string };

export function CharacterDetails({
  match
}: RouteComponentProps<TParams>): JSX.Element {
  return (
    <Layout className="container">
      [{match.params.id}]Implementar detalhe do personagem
    </Layout>
  );
}
