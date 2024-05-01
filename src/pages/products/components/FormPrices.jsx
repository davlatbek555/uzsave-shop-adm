import { Col, Form, InputNumber, Row, Switch } from "antd"

function FormPrices() {
    return (
        <Row>
            <Col span={24}>
                <Form.Item label="Narxi" name='price' rules={[{
                    type: 'number',
                    required: true,
                    message: 'Maydon Bo\'sh'
                }]}>
                    <InputNumber style={{ width: '100%' }} controls={false} />
                </Form.Item>
            </Col>
            <Col span={24}>
                <Form.Item label="Oldingi Narxi" name='oldPrice' rules={[{
                    type: 'number',
                    required: false,
                    message: 'Maydon Bo\'sh'
                }]}>
                    <InputNumber style={{ width: '100%' }} controls={false} />
                </Form.Item>
            </Col>
            <Col span={24}>
                <Form.Item label="Chegirma" name='discount' rules={[{
                    type: 'number',
                    required: false,
                    message: 'Maydon Bo\'sh'
                }]}>
                    <InputNumber style={{ width: '100%' }} controls={false} />
                </Form.Item>
            </Col>
            <Col span={24}>
                <Form.Item label="Taklif" name='isOffer' rules={[{
                    type: 'boolean',
                    required: false,
                    message: 'Maydon Bo\'sh'
                }]}>
                    <Switch checkedChildren="Bor" unCheckedChildren="Yo'q"/>
                </Form.Item>
            </Col>
        </Row>
    )
}

export default FormPrices