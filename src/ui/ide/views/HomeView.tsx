import { Grid, Header, Icon, Image, Item, Label, List, Segment, Tab } from "semantic-ui-react"

export const HomeView = () => {
    return (
        <Grid columns={2}>
            <Grid.Column width={5}>
                <Item.Group>
                <Item>
                    <Item.Image size="tiny" src="https://assets.grams.dev/subjektify/logo/logo.svg" />
                    <Item.Content>
                        <Item.Header as='h3'>Subjektify Composer</Item.Header>
                        <Item.Description>Building the future of decentralized applications.</Item.Description>
                    </Item.Content>
                </Item>
                </Item.Group>
                <List selection horizontal size="big" >
                    <List.Item>
                        <Icon color="black" size="large" name="github"/>
                    </List.Item>
                    <List.Item>
                        <Icon color="orange" size="large" name="reddit"/>
                    </List.Item>
                    <List.Item>
                        <Icon color="purple" size="large" name="discord"/>
                    </List.Item>
                    <List.Item>
                        <Icon color="orange" size="large" name="stack overflow"/>
                    </List.Item>
                </List>
            </Grid.Column>
            <Grid.Column width={11}>
                    <Header>Get Started with a Blueprint</Header>
                <Segment>
                    <Header>Featured Blueprints</Header>
                </Segment>
                <Segment>
                    <Header>Featured Plugins</Header>
                </Segment>
            </Grid.Column>
        </Grid>
    )
}
