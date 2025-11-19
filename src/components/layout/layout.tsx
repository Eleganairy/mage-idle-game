import { Grid } from "@mui/material";
import { ActionBar } from "../action-bar";
import { PageHeader } from "../header";
import { BattlefieldPage } from "../../pages/battlefield";
import {
  BACKGROUND_COLOR,
  HEADER_COLOR,
  SIDEBAR_COLOR,
} from "../../constants/colors";
import { UpgradesPage } from "../../pages/upgrades";
import { useAtomValue } from "jotai";
import { gameStateAtom } from "../../features/game-state/game-state.atoms";
import { Pages } from "../../features/game-state/game-state.types";
import { PokedexPage } from "../../pages/pokedex";
import { AreaSelectionPage } from "../../pages/area-selection";

export const Layout = () => {
  const currentPage = useAtomValue(gameStateAtom).activePage;

  return (
    <>
      <Grid container sx={{ height: "100vh" }}>
        {/* Header */}
        <Grid size={12} sx={{ height: "10%", backgroundColor: HEADER_COLOR }}>
          <PageHeader />
        </Grid>
        {/* Sidebar and Main Content */}
        <Grid container size={12} sx={{ height: "90%" }}>
          <Grid
            size={3}
            sx={{
              width: "25%",
              height: "100%",
              backgroundColor: SIDEBAR_COLOR,
              position: "sticky", // Keeps the sidebar fixed
              top: 0,
            }}
          >
            <ActionBar />
          </Grid>
          <Grid
            size={9}
            sx={{
              width: "75%",
              height: "100%",
              backgroundColor: BACKGROUND_COLOR,
              overflowY: "auto", // Enables scrolling for overflowing content
            }}
          >
            {(() => {
              switch (currentPage) {
                case Pages.battlefield:
                  return <BattlefieldPage />;
                case Pages.AreaSelection:
                  return <AreaSelectionPage />;
                case Pages.upgrades:
                  return <UpgradesPage />;
                case Pages.pokedex:
                  return <PokedexPage />;
                case Pages.traits:
                  return <div>Traits Page (to be implemented)</div>;
                case Pages.settings:
                  return <div>Settings Page (to be implemented)</div>;
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
