import { Tab } from "semantic-ui-react"
import { EditorView } from "./EditorView"
import { HomeView } from "./HomeView"

const panes = [
    { menuItem: 'Home', render: () => <Tab.Pane><HomeView /></Tab.Pane> },
    { menuItem: 'file.js', render: () => <Tab.Pane><EditorView /></Tab.Pane> },
]

export const TabView = () => {
    return (
        <Tab fluid panes={panes} />
    )
}
