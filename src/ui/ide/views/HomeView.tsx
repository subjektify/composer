import { Grid, Header, Icon, Item, List, Message, Segment } from "semantic-ui-react"

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
                    <List.Item as='a' href='https://github.com/subjektify' target='_blank'>
                        <Icon color="black" size="large" name="github" />
                    </List.Item>
                    <List.Item as='a' href='https://subjektify.dev/docs/handbook' target='_blank'>
                        <Icon color="blue" size="large" name="book" />
                    </List.Item>
                    <List.Item>
                        <Icon color="orange" size="large" name="reddit" />
                    </List.Item>
                    <List.Item>
                        <Icon color="purple" size="large" name="discord" />
                    </List.Item>
                    <List.Item>
                        <Icon color="orange" size="large" name="stack overflow" />
                    </List.Item>
                </List>

            </Grid.Column>

            <Grid.Column width={11}>

                <Header>Get Started with a Blueprint</Header>
                <List horizontal selection celled className="centered">
                    <List.Item className="getstarted-item">
                        <List.Icon size="big" name="money bill alternate" />
                        <List.Content>
                        <List.Header>Token</List.Header>
                        <List.Description>Create your own cryptocurrency based on the ERC20 standard.</List.Description>
                        </List.Content>
                    </List.Item>
                    <List.Item className="getstarted-item">
                        <List.Icon size="big" name="gem" />
                        <List.Content>
                        <List.Header>NFT Collection</List.Header>
                        <List.Description>Create your own NFT collection based on the ERC721 standard.</List.Description>
                        </List.Content>
                    </List.Item>
                    <List.Item className="getstarted-item">
                        <List.Icon size="big" name="building" />
                        <List.Content>
                        <List.Header>Organization</List.Header>
                        <List.Description>Create your own organizational DAO based on the ERC4824 standard.</List.Description>
                        </List.Content>
                    </List.Item>
                    <List.Item className="getstarted-item">
                        <List.Icon size="big" name="rocket" />
                        <List.Content>
                        <List.Header>Space</List.Header>
                        <List.Description>Create your own space that is compatible with Soonaverse.</List.Description>
                        </List.Content>
                    </List.Item>
                </List>

                <Message warning>
                    <Message.Header><Icon name='warning sign' />Scam Alert</Message.Header>
                    <Message.Content>
                        The only URL Subjektify's composer uses is <b>composer.subjektify.dev</b>.
                        <br />
                        Be sure to check the URL you are visiting before connecting your wallet. <a href='https://subjektify.dev/docs/develop' target='_blank'  rel="noreferrer">Learn more</a>
                    </Message.Content>
                </Message>

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
