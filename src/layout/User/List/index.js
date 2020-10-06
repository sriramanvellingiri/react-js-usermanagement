import React from 'react'
import Header from '../../../components/Header'
import { Icon, Label, Menu, Table } from 'semantic-ui-react'

const UserList = (list) => (
    <div>
        <Header/>       
        <Table celled>
        <Table.Header>
        <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>Address</Table.HeaderCell>
            <Table.HeaderCell>City</Table.HeaderCell>
            <Table.HeaderCell>Role</Table.HeaderCell>
        </Table.Row>
        </Table.Header>
        <Table.Body>
        {!list.list.users.loading && list.list.users.data.count 
        && list.list.users.data.results.map((row) =>(
            <Table.Row>
                <Table.Cell>{row.first_name} {row.last_name}</Table.Cell>
                <Table.Cell>{row.email} </Table.Cell>
                <Table.Cell>{row.profile.address}</Table.Cell>
                <Table.Cell>{row.profile.city}</Table.Cell>
                <Table.Cell>{row.profile.role}</Table.Cell>
            </Table.Row>    
        ) ) }
        
        </Table.Body>
        {/* <Table.Footer>
        <Table.Row>
            <Table.HeaderCell colSpan='3'>
            <Menu floated='right' pagination>
                <Menu.Item as='a' icon>
                <Icon name='chevron left' />
                </Menu.Item>
                <Menu.Item as='a'>1</Menu.Item>
                <Menu.Item as='a'>2</Menu.Item>
                <Menu.Item as='a'>3</Menu.Item>
                <Menu.Item as='a'>4</Menu.Item>
                <Menu.Item as='a' icon>
                <Icon name='chevron right' />
                </Menu.Item>
            </Menu>
            </Table.HeaderCell>
        </Table.Row>
        </Table.Footer> */}
    </Table>
    </div>
)

export default UserList;