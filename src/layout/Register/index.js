import React from "react"
import { Link } from "react-router-dom"
import { Button, Form, Grid,Header as SemanticHeader, Segment } from "semantic-ui-react"
import Header from '../../components/Header'

const RegisterUI = ({form:{ onChange, form, registerFormValid, onSubmit, loading}}) => (
    <div>
        <Header />
        <Grid centered>
            <Grid.Column style={{ maxWidth: 550, marginTop: 20 }}>
                <SemanticHeader>
                    SignUp Here
                </SemanticHeader>
                <Segment>
                    <Form>
                        <Form.Field>
                            <Form.Input 
                            value={form.firstName || ""}
                            onChange={onChange}
                            name="firstName" 
                            placeholder="First Name" 
                            label="First Name" />
                        </Form.Field>
                        <Form.Field>
                            <Form.Input 
                            value={form.lastName || ""}
                            onChange={onChange}
                            name="lastName" 
                            placeholder="Last Name" 
                            label="Last Name" />
                        </Form.Field>
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
                        <Form.Field>
                            <Form.Select
                                fluid
                                label='Role'
                                name="role" 
                                value={form.role}
                                onChange={onChange}
                                options={[
                                    { key: 'SUPER_ADMIN', text: 'SUPER ADMIN', value: 'SUPER_ADMIN' },
                                    { key: 'EVENT_MANAGER', text: 'EVENT MANAGER', value: 'EVENT_MANAGER'},
                                    { key: 'LIVE_TELECASTER', text: 'LIVE TELECASTER', value: 'LIVE_TELECASTER'},
                                ]}
                                placeholder='role'
                            />
                        </Form.Field>
                        <Form.Field>
                        <Form.Input 
                            value={form.address || ""}
                            onChange={onChange} 
                            name="address" 
                            type="textarea" 
                            placeholder="Address" 
                            label="Address" />
                        </Form.Field>
                        <Form.Field>
                        <Form.Input 
                            value={form.city || ""}
                            onChange={onChange} 
                            name="city" 
                            type="text" 
                            placeholder="City" 
                            label="City" />
                        </Form.Field>        
                        <Button  
                        onClick={onSubmit}
                        disabled = {registerFormValid || loading} 
                        fluid 
                        loading={loading}
                        primary 
                        type='submit'>
                            Submit
                        </Button>
                        <Segment>if you are already registered. Click here to <Link to="/auth/login">
                            Login</Link></Segment>
                    </Form>
                </Segment>
            </Grid.Column>
        </Grid>
    </div>

)

export default RegisterUI