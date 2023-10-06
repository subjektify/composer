import {
    Grid,
    Header,
    Image,
    List
} from "semantic-ui-react";

export const Home = () => {
    return (
        <Grid className="home">
            <Grid.Column verticalAlign="middle">

                <Header as='h1'>How would you like to start?</Header>

                <List horizontal selection relaxed size="big">

                    <List.Item>
                        <Image size="tiny" src='https://assets.grams.dev/subjektify/home/default.png' />
                        <List.Header>Default Namespace</List.Header>
                    </List.Item>

                    <List.Item>
                        <Image size="tiny" src='https://assets.grams.dev/subjektify/home/template.png' />
                        <List.Header>From Template</List.Header>
                    </List.Item>

                    <List.Item>
                        <Image src='https://assets.grams.dev/subjektify/home/connect.png' verticalAlign="middle" />
                        <List.Header>Connect locally</List.Header>
                    </List.Item>
                    
                </List>
            </Grid.Column>
        </Grid>
    );
}
