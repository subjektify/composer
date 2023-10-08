import { List, Image, Popup } from "semantic-ui-react"
import { VscBeaker, VscDebugAlt, VscExtensions, VscFiles, VscRepo, VscRocket, VscSearch, VscSettingsGear, VscSourceControl, VscVmConnect } from "react-icons/vsc"

export const MenuView = () => {

    const size = 24;
    return (
        <List selection size="big">
            <List.Item>
                <Image size="mini" src="https://assets.grams.dev/subjektify/logo/logo.png" />
            </List.Item>
            <List.Item>
                <Popup position="right center" content='Explorer' trigger={<VscFiles size={size} />} />
            </List.Item>
            <List.Item>
                <Popup position="right center" content='Search' trigger={<VscSearch size={size} />} />
            </List.Item>
            <List.Item>
                <Popup position="right center" content='Source Control' trigger={<VscSourceControl size={size} />} />
            </List.Item>
            <List.Item>
                <Popup position="right center" content='Build' trigger={<VscBeaker size={size} />} />
            </List.Item>
            <List.Item>
                <Popup position="right center" content='Run and Debug' trigger={<VscDebugAlt size={size} />} />
            </List.Item>
            <List.Item>
                <Popup position="right center" content='Deploy and Publish' trigger={<VscRocket size={size} />} />
            </List.Item>
            <List.Item>
                <Popup position="right center" content='Blueprints' trigger={<VscRepo size={size} />} />
            </List.Item>
            <List.Item>
                <Popup position="right center" content='Plugins' trigger={<VscExtensions size={size} />} />
            </List.Item>
            <List.Item>
                <Popup position="right center" content='Namespaces' trigger={<VscVmConnect size={size} />} />
            </List.Item>
            <List.Item>
                <Popup position="right center" content='Settings' trigger={<VscSettingsGear size={size} />} />
            </List.Item>
        </List>
    )
}