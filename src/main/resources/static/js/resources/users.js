import React from 'react';
import { List, Edit, Create, Datagrid, BooleanInput, BooleanField, TextField, ReferenceField, NumberField, NumberInput, EditButton, DeleteButton, DisabledInput, LongTextInput, ReferenceInput, required, SelectInput, SimpleForm, TextInput } from 'admin-on-rest';

export const UserList = (props) => (

    <List {...props}>

        <Datagrid>

            <NumberField source="username" />
            <TextField source="password" />
            <BooleanField source="admin" />
            <BooleanField source="active" />
            <EditButton />
            <DeleteButton />
        </Datagrid>

    </List>
);


const UserTitle = ({ record }) => {
    return <span>Edit { record ? `"${record.username}"` : '' }</span>
};

export const UserEdit = (props) => (
    <Edit title={<UserTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="username" />
            <TextInput source="password" />
            <BooleanInput source="admin" />
            <BooleanInput source="active" />
        </SimpleForm>
    </Edit>
);

const check = false;

export const UserCreate = (props) => (
    <Create {...props}>
        <SimpleForm redirect="list" >
            <TextInput label="Username" source="username" />
            <TextInput label="Password" source="password" />
            <BooleanInput label="is Admin?" source="admin" defaultValue={false} />
            <BooleanInput label="Active?" source="active" defaultValue={false} />
        </SimpleForm>
    </Create>
);