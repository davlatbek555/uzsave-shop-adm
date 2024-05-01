import { Col, Form, InputNumber, Row } from "antd"

function FormRatings() {
  return (
    <Row>
      <Col span={24}>
        <Form.Item label="Sotilgan" name='sold' rules={[{
          type: 'number',
          required: true,
          message: 'Maydon Bo\'sh'
        }]}>
          <InputNumber style={{ width: '100%' }} controls={false} />
        </Form.Item>
      </Col>
      <Col span={24}>
        <Form.Item label="Sharhlar soni" name='reviewcount' rules={[{
          type: 'number',
          required: true,
          message: 'Maydon Bo\'sh'
        }]}>
          <InputNumber style={{ width: '100%' }} controls={false} />
        </Form.Item>
      </Col>
      <Col span={24}>
        <Form.Item label="Reyting" name='rating' rules={[{
          type: 'number',
          required: true,
          message: 'Maydon Bo\'sh'
        }]}>
          <InputNumber style={{ width: '100%' }} controls={false} />
        </Form.Item>
      </Col>
    </Row>
  )
}

export default FormRatings