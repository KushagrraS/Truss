import React from "react";
import { ArchiveScreen } from "../../screens/ArchiveScreen";
import { Layout } from "../../components/library/Layout/Layout";
import { Provider } from "../../app/provider";

const archive = () => {
  return (
    <Provider>
      <Layout>
        <ArchiveScreen />
      </Layout>
    </Provider>
  );
};

export default archive;
