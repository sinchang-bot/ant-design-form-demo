import React from 'react'
import { Form, Input, Button } from 'antd'
import 'antd/dist/antd.css'
import './App.css'

type LayoutType = Parameters<typeof Form>[0]['layout']

function App() {
  const [form] = Form.useForm()

  return (
    <Form
      layout='vertical'
      form={form}
      initialValues={{
        username: 'Jeff',
        age: 10,
      }}
      wrapperCol={{
        span: 8,
      }}
    >
      <Form.Item label='Age' name='age'>
        <Input placeholder='input placeholder' />
      </Form.Item>
      <Form.Item label='Username' name='username'>
        <Input placeholder='input placeholder' />
      </Form.Item>
      <Form.Item>
        <Button type='primary'>Submit</Button>
      </Form.Item>
    </Form>
  )
}

export default App
