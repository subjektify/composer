import "./ide.css"
import { Grid } from "semantic-ui-react"
import { TabView, SidebarView, MenuView } from "./views"

export const ComposerIDE = () => {
    return (
        <Grid divided className="ide" columns={3} padded={false}>
            <Grid.Column width={1} className="sidebar-menu" textAlign="center">
                <MenuView />
            </Grid.Column>
            <Grid.Column width={3} className="sidebar-view">
                <SidebarView />
            </Grid.Column>
            <Grid.Column width={12} className="tab-view">
                <TabView />
            </Grid.Column>
        </Grid>
    )
}
