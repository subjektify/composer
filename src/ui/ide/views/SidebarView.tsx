import React from 'react'
import { Popup, Menu, Segment } from 'semantic-ui-react'
import { PiPaintBrush, PiPlanet } from "react-icons/pi"

export const SidebarView = () => {
    const size = 24;

    return (
        <Segment basic>
            <Menu secondary>
                <Menu.Item>
                    <Menu.Header as='h3'>Subjektify</Menu.Header>
                </Menu.Item>
                <Menu.Menu position='right'>
                <Menu.Item>
                    <Popup position="bottom center" content='Composer' trigger={<PiPaintBrush size={size} />} />
                </Menu.Item>
                <Menu.Item>
                    <Popup position="bottom center" content='Subject Universe' trigger={<PiPlanet size={size} />} />
                </Menu.Item>
                </Menu.Menu>
            </Menu>
        </Segment>
    )
}
