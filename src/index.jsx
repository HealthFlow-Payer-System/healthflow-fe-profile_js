import React from 'react';
import ProfileToolbarContribution from "./components/ProfileToolbarContribution";
import ChangePasswordPage from "./components/ChangePasswordPage";
import messages_en from "./translations/en.json";
import MyProfilePage from "./components/MyProfilePage";
import { reducer } from "./reducer";

const DEFAULT_CONFIG = {
  translations: [{ key: "en", messages: messages_en }],
  "core.Router": [
    { 
      path: "profile/changePassword",
      component: ChangePasswordPage,
      //rights: ['profile.changePassword'],
      icon: "Fingerprint",
      text: "profile.menu.changePassword",
      id: "profile.changePassword",
    },
    { 
      path: "profile/myProfile",
      text: "profile.menu.myProfile",
      icon: "InsertEmoticon",
      id: "profile.myProfile",
      component: MyProfilePage, 
      //rights: ['profile.myProfile'], 
   },
  ],
  "core.MainMenu": [{ name: 'ProfileMainMenu', id:"profile.MainMenu", icon:"AccountCircle", text: "profile.mainMenu"}],
  reducers: [{ key: "profile", reducer }],
  "core.AppBar": [ProfileToolbarContribution],
  "profile.MainMenu": [
    {
      route: "profile/myProfile",
    },
    {
      route: "profile/changePassword",
    }
  ],
};

export const ProfileModule = (cfg) => {
  let config = { ...DEFAULT_CONFIG, ...cfg };
  cfg?.AppBarMenuContribution === true ? config['core.MainMenu'] = [] : config['core.AppBar'] = []
  return { ...config, ...cfg };
};
