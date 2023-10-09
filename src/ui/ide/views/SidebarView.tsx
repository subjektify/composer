import { Dropdown, Popup, Menu } from 'semantic-ui-react'
import { PiPaintBrush, PiPlanet } from "react-icons/pi"

export const SidebarView = () => {
    const size = 24;

    return (
        <Menu secondary>
            <Menu.Item>
                <Dropdown
                    button
                    className='icon'
                    icon='world'
                    labeled
                    placeholder='Default Namespace'
                    fluid
                >
                    <Dropdown.Menu>
                        <Dropdown.Item>Default Namespace</Dropdown.Item>
                        <Dropdown.Item>Token</Dropdown.Item>
                        <Dropdown.Item>Test Namespace</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item>
                            <Dropdown.Header icon='hdd' content='Connect locally' />
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <Dropdown.Header icon='puzzle' content='From a blueprint' />
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <Dropdown.Header icon='add' content='New namespace' />
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
            <Menu.Menu position='right'>
                <Menu.Item onClick={console.log}>
                    <Popup position="bottom center" content='Composer' trigger={<PiPaintBrush size={size} />} />
                </Menu.Item>
                <Menu.Item onClick={console.log}>
                    <Popup position="bottom center" content='Subject Universe' trigger={<PiPlanet size={size} />} />
                </Menu.Item>
            </Menu.Menu>
        </Menu>
    )
}
