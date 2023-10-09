import { Card, Grid, Header, Icon, Item, List, Message, Image, Rating } from "semantic-ui-react"
import { MdVerified } from "react-icons/md"

export const HomeView = () => {
    return (
        <Grid columns={2}>

            <Grid.Column width={5}>

                <Item.Group className="mb-ti">
                    <Item>
                        <Item.Image size="tiny" src="https://assets.grams.dev/subjektify/logo/logo.svg" />
                        <Item.Content>
                            <Item.Header as='h3'>Subjektify Composer</Item.Header>
                            <Item.Description>Building the future of decentralized applications.</Item.Description>
                        </Item.Content>
                    </Item>
                </Item.Group>

                <Grid.Row centered>
                    <List selection horizontal size="big" >
                        <List.Item as='a' href='https://github.com/subjektify' target='_blank'>
                            <Icon color="black" size="large" name="github" />
                        </List.Item>
                        <List.Item as='a' href='https://www.reddit.com/r/Subjektify/' target='_blank'>
                            <Icon color="orange" size="large" name="reddit" />
                        </List.Item>
                        <List.Item as='a' href='https://discord.gg/7Sdtw2WQvc' target='_blank'>
                            <Icon color="purple" size="large" name="discord" />
                        </List.Item>
                        <List.Item as='a' href='https://stackoverflow.com/search?q=subjekt' target='_blank'>
                            <Icon color="orange" size="large" name="stack overflow" />
                        </List.Item>
                        <List.Item as='a' href='https://www.youtube.com/@SubjektifyDev' target='_blank'>
                            <Icon color="red" size="large" name="youtube" />
                        </List.Item>
                    </List>
                </Grid.Row>

                <Header className="mt-ti">Create a Namespace</Header>
                <Grid.Row centered>
                    <List selection horizontal size="small" >
                        <List.Item>
                            <Image size="tiny" src="https://assets.grams.dev/subjektify/home/new.png" />
                            <List.Header>New Namespace</List.Header>
                        </List.Item>
                        <List.Item>
                            <Image size="tiny" src="https://assets.grams.dev/subjektify/home/template.png" />
                            <List.Header>From a Blueprint</List.Header>
                        </List.Item>
                        <List.Item>
                            <Image size="tiny" src="https://assets.grams.dev/subjektify/home/connect.png" />
                            <List.Header>Connect Locally</List.Header>
                        </List.Item>
                    </List>
                </Grid.Row>

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

            </Grid.Column>

            <Grid.Column width={11}>

                <Header>Get Started with a Blueprint</Header>
                <Card.Group>



                    <Card onClick={console.log}>
                        <Card.Content>
                            <Card.Header>Air Dropper</Card.Header>
                            <Card.Meta content='Namespace' />
                            <Card.Description content='Seamlessly create token airdrops across different blockchain platforms.' />
                        </Card.Content>
                        <Card.Content extra>
                            <Rating icon='star' defaultRating={5} maxRating={5} />
                        </Card.Content>
                    </Card>

                    <Card onClick={console.log}>
                        <Card.Content
                            header='NFT Collection'
                            meta='Namespace'
                            description='Create your own NFT collection based on the ERC721A standard.'
                        />
                        <Card.Content extra>
                            <Rating icon='star' defaultRating={5} maxRating={5} />
                        </Card.Content>
                    </Card>

                    <Card onClick={console.log}>
                        <Card.Content
                            header='Organization'
                            meta='Namespace'
                            description='Create your own organizational DAO based on the ERC4824 standard.'
                        />
                        <Card.Content extra>
                            <Rating icon='star' defaultRating={5} maxRating={5} />
                        </Card.Content>
                    </Card>
                </Card.Group>

                <Message warning>
                    <Message.Header><Icon name='warning sign' />Scam Alert</Message.Header>
                    <Message.Content>
                        The only URL Subjektify's composer uses is <b>composer.subjektify.dev</b>.
                        <br />
                        Be sure to check the URL you are visiting before connecting your wallet. <a href='https://subjektify.dev/docs/develop' target='_blank' rel="noreferrer">Learn more</a>
                    </Message.Content>
                </Message>

                <Header className="mb-none">Featured Blueprints</Header>
                <Card.Group>

                    <Card onClick={console.log}>
                        <Card.Content>
                            <Card.Header><MdVerified className="mr-mi" color="teal" />Subjektify/Royalty NFT</Card.Header>
                            <Card.Meta content='Subject' />
                            <Card.Description content='This blueprint allows you to set and retrieve royalty information for a token.' />
                        </Card.Content>
                        <Card.Content extra>
                            <Rating icon='star' defaultRating={4} maxRating={5} />
                        </Card.Content>
                    </Card>

                    <Card onClick={console.log}>
                        <Card.Content>
                            <Card.Header><MdVerified className="mr-mi" color="teal" />Subjektify/Token</Card.Header>
                            <Card.Meta content='Subject' />
                            <Card.Description content='Create your own cryptocurrency based on the ERC20 standard.' />
                        </Card.Content>
                        <Card.Content extra>
                            <Rating icon='star' defaultRating={5} maxRating={5} />
                        </Card.Content>
                    </Card>

                    <Card onClick={console.log}>
                        <Card.Content>
                            <Card.Header><MdVerified className="mr-mi" color="teal" />Grams/Name Resolver</Card.Header>
                            <Card.Meta content='Subject' />
                            <Card.Description content='This blueprint provides a reverse lookup for addresses to their corresponding ENS or GNS names.' />
                        </Card.Content>
                        <Card.Content extra>
                            <Rating icon='star' defaultRating={4} maxRating={5} />
                        </Card.Content>
                    </Card>

                </Card.Group>

                <Header className="mb-none">Featured Plugins</Header>
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

            </Grid.Column>

        </Grid>
    )
}
