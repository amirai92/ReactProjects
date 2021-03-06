import React, { useState, useEffect } from "react";
import List from "./List";
import Filter from "./Filter";
import Profile from "./Profile";
import styled from "styled-components";

const App = () => {
  const [original_list, set_original_list] = useState([]);
  const [filtered_list, set_filtered_list] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProfile, setSelectedProfile] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data_url = "https://my.api.mockaroo.com/robots.json";
        let key = "c3d6dbf0";
        const response = await fetch(data_url, {
          headers: { "X-API-Key": key }
        });
        const data = await response.json();
        set_original_list(data);
        set_filtered_list(data);
        if (data.length > 0) setSelectedProfile(data[0]);

        setIsLoading(false);
      } catch (error) {
        setErrorMessage(`fetch operation failed: ${error.message}`);
      }
    }
    fetchData();
  }, []);

  const update_list_state = (filtered_list) => {
    set_filtered_list(filtered_list);
  };
  const update_selcted_profile = (item) => {
    setSelectedProfile(item);
  };
  return errorMessage !== "" ? (
    <h1>{errorMessage}</h1>
  ) : isLoading ? (
    <h1>Loading the data..</h1>
  ) : (
    <>
      <Box>
        <Filter
          list_data={original_list}
          on_filter={update_list_state}
          num={filtered_list.length}
        />
        <DataBox>
          <Profile item={selectedProfile} />
          <List
            list_data={filtered_list}
            onItemSelect={update_selcted_profile}
          />
        </DataBox>
      </Box>
    </>
  );
};
export default App;

const Box = styled.div`
  background: Cornsilk;
  padding: 10.5rem 1.5rem 1.5rem;
  border-radius: 0.4rem;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0.4rem 1.5rem DimGrey;
  position: relative;
  margin-top: 7rem;
  min-width: 60rem;
`;

const DataBox = styled.div`
  display: flex;
  flex: 2;
`;
