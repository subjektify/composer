import React, { useState } from 'react';
import { Button, Header, Icon, Image, Form, List, Message, Modal } from 'semantic-ui-react';

export const NewNamespace = () => {

    const [open, setOpen] = useState(false);

    return (
        <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={
                <List.Item>
                    <Image size="tiny" src='https://assets.grams.dev/subjektify/home/new.png' />
                    <List.Header>New Namespace</List.Header>
                </List.Item>
            }
        >
            <Modal.Header>New Namespace</Modal.Header>
            <Modal.Content>
                <Modal.Description>
                    <Form size='large'>
                        <Form.Field>
                            <label>Namespace</label>
                            <input placeholder='Choose a name' />
                        </Form.Field>
                    </Form>
                    <Message info>
                        <Icon name='help' />

                        A namespace holds all your contracts, subjects, and data structures.
                    </Message>
                </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
                <Button color='black' onClick={() => setOpen(false)}>
                    Nope
                </Button>
                <Button
                    content="Let's go"
                    labelPosition='right'
                    icon='rocket'
                    onClick={() => setOpen(false)}
                    primary
                />
            </Modal.Actions>
        </Modal>
    )
}
