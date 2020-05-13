/* eslint-disable no-unused-vars */
import React from "react";
import QuickPanelToggler from "./quick-panel-toggler/QuickPanelToggle";
import QuickActionsPanel from "../../../../app/partials/layout/QuickActionsPanel";
import UserNotifications from "../../../../app/partials/layout/UserNotifications";
import UserProfile from "../../../../app/partials/layout/UserProfile";
import LanguageSelector from "../../../../app/partials/layout/LanguageSelector";
import { toAbsoluteUrl } from "../../../utils/utils";

export default class Topbar extends React.Component {
  render() {
    return (
        <div className="kt-header__topbar">

        <UserNotifications
          bgImage={toAbsoluteUrl("/media/misc/bg-1.jpg")}
          pulse="true"
          pulseLight="false"
          skin="dark"
          icon={toAbsoluteUrl("/media/icons/svg/Code/Compiling.svg")}
          iconType=""
          type="success"
          useSVG="true"
          dot="false"
        />

        <QuickActionsPanel
          bgImage={toAbsoluteUrl("/media/misc/bg-2.jpg")}
          skin="dark"
          iconType=""
          icon={toAbsoluteUrl("/media/icons/svg/Media/Equalizer.svg")}
          useSVG="true"
          gridNavSkin="light"
        />

        <QuickPanelToggler />

        {/* <LanguageSelector iconType="" /> */}

        <UserProfile showAvatar={true} showHi={true} showBadge={false} />
      </div>
    );
  }
}
