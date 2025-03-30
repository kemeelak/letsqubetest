import React from "react";
import { Route, Switch } from "react-router-dom";
import MainContentPage from "./components/layout/pages/MainContentPage";
import AboutPage from "./components/layout/pages/AboutPage";
import AdvertisePage from "./components/layout/pages/AdvertisePage";
import MemoriesPage from "./components/layout/pages/MemoriesPage";
import RespondToQubePage from "./components/layout/pages/RespondToQubePage";
import ContactPage from "./components/layout/pages/ContactPage";
import EditQubePage from "./components/layout/pages/EditQubePage";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={MainContentPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/advertise" component={AdvertisePage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/memories" component={MemoriesPage} />
      <Route path="/respond" component={RespondToQubePage} />
      <Route path="/edit" component={EditQubePage} />
    </Switch>
  );
};

export default Routes;
