import React from "react"
import { Link } from "react-router-dom"
import { Button, Form, Grid, Header as SemanticHeader, Message, Segment } from "semantic-ui-react"
import Header from '../../components/Header'

const LoginUI = ({ form: { onChange, form, loginFormValid, onSubmit, loading, error } }) => (
    <div>
        <Header />
        <Grid centered>
            <Grid.Column style={{ maxWidth: 550, marginTop: 20 }}>
                <SemanticHeader>
                    Login
                </SemanticHeader>
                <Segment>
                    <Form>
                        {error && <Message content={error?.message} negative />}
                        <Form.Field>
                            <Form.Input
                                value={form.email || ""}
                                onChange={onChange}
                                name="email"
                                type="email"
                                placeholder="Email"
                                label="Email" />
                        </Form.Field>
                        <Form.Field>
                            <Form.Input
                                value={form.password || ""}
                                onChange={onChange}
                                name="password"
                                type="password"
                                placeholder="Password"
                                label="Password" />
                        </Form.Field>
                        <Button
                            onClick={onSubmit}
                            disabled={loginFormValid || loading}
                            fluid
                            loading={loading}
                            primary
                            type='submit'>
                            Submit
                        </Button>
                        <Segment>if you have not registered. Click here to <Link to="/auth/register">
                            Register</Link></Segment>
                    </Form>
                </Segment>
            </Grid.Column>
        </Grid>
    </div>
)

export default LoginUI