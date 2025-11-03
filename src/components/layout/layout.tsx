import { Grid } from "@mui/material";
import { ActionBar } from "../action-bar";
import { PageHeader } from "../../header";
import { BattlefieldPage } from "../../pages/battlefield";
import {
  BACKGROUND_COLOR,
  HEADER_COLOR,
  SIDEBAR_COLOR,
} from "../../constants/colors";
import { UpgradesPage } from "../../pages/upgrades";
import { useAtomValue } from "jotai";
import { activePageAtom } from "../../features/game-state/game-state.atoms";
import { Pages } from "../../features/game-state/game-state.types";

// import background from "../../../public/mage-idle-game-background.png";

export const Layout = () => {
  const currentPage = useAtomValue(activePageAtom);

  return (
    <>
      <Grid container sx={{ height: "100vh", width: "100vw" }}>
        {/* Header */}
        <Grid size={12} sx={{ height: "5%", backgroundColor: HEADER_COLOR }}>
          <PageHeader />
        </Grid>
        {/* Sidebar and Main Content */}
        <Grid container size={12} sx={{ height: "calc(100vh - 5%)" }}>
          <Grid
            size={3}
            sx={{ height: "100%", backgroundColor: SIDEBAR_COLOR }}
          >
            <ActionBar />
          </Grid>
          <Grid
            size={9}
            sx={{
              height: "100%",
              backgroundColor: BACKGROUND_COLOR,
            }}
          >
            {(() => {
              switch (currentPage) {
                case Pages.battlefield:
                  return <BattlefieldPage />;
                case Pages.upgrades:
                  return <UpgradesPage />;
                default:
                  return null;
              }
            })()}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
