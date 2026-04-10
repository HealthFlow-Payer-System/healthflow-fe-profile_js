import React, { Component } from "react";
import { injectIntl } from "react-intl";
import { connect } from "react-redux";

import { GetIconComponent } from "@openimis/fe-core";
const AccountCircle = GetIconComponent("AccountCircle")

import {
  formatMessage,
  MainMenuContribution,
  withModulesManager,
} from "@openimis/fe-core";

const PROFILE_MAIN_MENU_CONTRIBUTION_KEY = "profile.MainMenu";

class ProfileMainMenu extends Component {

  render() {
    return (
      <MainMenuContribution
        {...this.props}
        header={formatMessage(this.props.intl, "profile", "mainMenu")}
        icon={<AccountCircle />}
        menuId='ProfileMainMenu'
        contributionKey={PROFILE_MAIN_MENU_CONTRIBUTION_KEY}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  rights: state.core?.user?.i_user?.rights ?? [],
});

export { PROFILE_MAIN_MENU_CONTRIBUTION_KEY };
export { ProfileMainMenu };
export default injectIntl(
  withModulesManager(connect(mapStateToProps)(ProfileMainMenu))
);
