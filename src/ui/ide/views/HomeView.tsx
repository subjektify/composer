import { Card, Grid, Header, Icon, Item, List, Message, Segment } from "semantic-ui-react"

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
                    <List.Item>
                        <Icon color="red" size="large" name="youtube" />
                    </List.Item>
                </List>

                <Segment>
                    <Header>Learn Subjektify</Header>
                    <List selection size="medium">
                        <List.Item>
                            <List.Icon name='book' />
                            <List.Content>
                                <List.Header>Read the Handbook</List.Header>
                                <List.Description>Get comprehensive insights into Subjektify's ecosystem, from basic concepts to advanced features.</List.Description>
                            </List.Content>
                        </List.Item>
                        <List.Item>
                            <List.Icon name='puzzle' />
                            <List.Content>
                                <List.Header>Explore Subjektify Blueprints</List.Header>
                                <List.Description>Jumpstart your DApp development with pre-designed templates and best practices.</List.Description>
                            </List.Content>
                        </List.Item>
                        <List.Item>
                            <List.Icon name='video' />
                            <List.Content>
                                <List.Header>Watch Tutorials</List.Header>
                                <List.Description>Visualize the development process with step-by-step video tutorials.</List.Description>
                            </List.Content>
                        </List.Item>
                        <List.Item>
                            <List.Icon name='users' />
                            <List.Content>
                                <List.Header>Join the Community</List.Header>
                                <List.Description>Engage with other developers, share your projects, and get your questions answered.</List.Description>
                            </List.Content>
                        </List.Item>
                    </List>
                </Segment>

            </Grid.Column>

            <Grid.Column width={11}>

                <Header>Get Started with a Blueprint</Header>
                <Card.Group>

                    <Card onClick={console.log}>
                        <Card.Content>
                            <Card.Header content='Token' />
                            <Card.Meta content='DeFi' />
                            <Card.Description content='Create your own cryptocurrency based on the ERC20 standard.' />
                        </Card.Content>
                    </Card>

                    <Card onClick={console.log}>
                        <Card.Content
                            header='NFT Collection'
                            meta='Collectibles'
                            description='Create your own NFT collection based on the ERC721 standard.'
                        />
                    </Card>

                    <Card onClick={console.log}
                        header='Organization'
                        meta='Governance'
                        description='Create your own organizational DAO based on the ERC4824 standard.'
                    />
                </Card.Group>

                <Message warning>
                    <Message.Header><Icon name='warning sign' />Scam Alert</Message.Header>
                    <Message.Content>
                        The only URL Subjektify's composer uses is <b>composer.subjektify.dev</b>.
                        <br />
                        Be sure to check the URL you are visiting before connecting your wallet. <a href='https://subjektify.dev/docs/develop' target='_blank' rel="noreferrer">Learn more</a>
                    </Message.Content>
                </Message>

                <Segment>
                    <Header>Featured Blueprints</Header>
                    <Card.Group>

                        <Card onClick={console.log}>
                            <Card.Content>
                                <Card.Header content='subjektify/Royalty NFT' />
                                <Card.Meta content='Collectibles' />
                                <Card.Description content='This blueprint allows you to set and retrieve royalty information for a token.' />
                            </Card.Content>
                        </Card>

                        <Card onClick={console.log}>
                            <Card.Content
                                header='subjektify/Air Dropper'
                                meta='DeFi'
                                description='Create your own NFT collection based on the ERC721 standard.'
                            />
                        </Card>

                        <Card onClick={console.log}
                            header='grams/Name Resolver'
                            meta='Utility'
                            description='This blueprint provides a reverse lookup for addresses to their corresponding ENS or GNS names.'
                        />
                    </Card.Group>
                </Segment>

                <Segment>
                    <Header>Featured Plugins</Header>
                    <Card.Group>

                        <Card onClick={console.log}>
                            <Card.Content>
                                <Card.Header content='subjektify/Solidity' />
                                <Card.Meta content='Build' />
                                <Card.Description content='Build your subjekt model to solidity smart contracts.' />
                            </Card.Content>
                        </Card>

                        <Card onClick={console.log}>
                            <Card.Content
                                header='subjektify/TypeScript'
                                meta='Build'
                                description='Build your subjekt model to a typescript web3 client.'
                            />
                        </Card>

                        <Card onClick={console.log}
                            header='subjektify/Android'
                            meta='Build'
                            description='Build your subjekt model to an Android web3 sdk.'
                        />
                    </Card.Group>
                </Segment>

            </Grid.Column>

        </Grid>
    )
}
