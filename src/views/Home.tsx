import { NewNamespace } from '../components/home';
import logo from '../logo.svg';
import {
    Grid,
    Header,
    Image,
    List
} from "semantic-ui-react";

export const Home = () => {
    return (
        <Grid>
            <Grid.Column className='mt-lg' textAlign='center'>

                <Image centered size='small' src={logo} />
                <Header as='h1'>Subjektify Composer</Header>
                <Header as='h4' className='mv-none'>Version: 0.0.1</Header>

                <List horizontal selection relaxed size="big">

                    <NewNamespace />

                    <List.Item>
                        <Image size="tiny" src='https://assets.grams.dev/subjektify/home/template.png' />
                        <List.Header>Use a Template</List.Header>
                    </List.Item>

                    <List.Item>
                        <Image size="tiny" src='https://assets.grams.dev/subjektify/home/connect.png' />
                        <List.Header>Connect Locally</List.Header>
                    </List.Item>

                </List>
            </Grid.Column>
        </Grid>
    );
}
