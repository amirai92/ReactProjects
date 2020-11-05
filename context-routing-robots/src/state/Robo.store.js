import React, { useState, useEffect } from "react";
import * as robo_service from "../services/Robo.service";

const RoboStore = React.createContext();
const { Provider } = RoboStore;

const RoboProvider = ({ children }) => {
  const [all_robots, set_all_robots] = useState([]);
  const [filtered_robots, set_filtered_robots] = useState([]);
  const [selected_robot, set_selected_robot] = useState({});
  const [loading_robots, set_loading_robots] = useState(true);
  const [error_message, set_error_message] = useState(null);

  useEffect(() => {
    (async () => {
      const data = await robo_service.get_all_robots();
      set_all_robots(data);
      set_filtered_robots(data);
      set_selected_robot(data[0]);
      set_loading_robots(false);
    })().catch(err => set_error_message(err.message));
  }, []);

  // state === values to display
  const state = {
    all_robots,
    filtered_robots,
    selected_robot,
    loading_robots,
    error_message
  };
  // actions === callbacks to call
  const actions = {
    set_filtered_robots,
    set_selected_robot,
    set_all_robots
  };

  return <Provider value={{ ...state, ...actions }}>{children}</Provider>;
};

export { RoboProvider, RoboStore };
