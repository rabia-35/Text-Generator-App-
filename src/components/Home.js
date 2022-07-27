import {useState, useEffect} from 'react'
import { Container, Row, Col, Form, H1} from 'react-bootstrap'
import {Textarea, Center, Text} from "@chakra-ui/react"
import axios from "axios"

function Home() {
    const[html, setHtml]=useState(false)
    const[params, setParams]=useState(4)
    const [text, setText]=useState("")

    useEffect( ()=>{
        axios(
            `https://baconipsum.com/api/?type=all-meat&paras=${params}&format=${html ? "html" : "text"}`
          ).then((res) =>{setText(res.data)} );
    },[params, html])

  return (
    <Container >
            <Center>
            <Text fontSize="3rem" my={5} textAlign="center">
            React sample text generator app
            </Text>
        </Center>
        <Row className='pt-5 justify-content-center'>
            <Col xs={5} sm={4} className='box rounded-pill d-flex  pt-2'>
                <span onClick={(e)=>setParams(params===1 ? params: params-1)} >-</span>
                <input className="mb-2 ms-2" type="text" placeholder={params} />
                <span onClick={(e)=>setParams(params+1)} >+</span>
            </Col>
            <Col className=' offset-1 mt-3'>
                <Form className='html-content ' >
                <Form.Check 
                    type="switch"
                    id="custom-switch"
                    label="HTML"
                    onClick={()=>{setHtml(html ? false : true);}}
                />
                </Form>
            </Col>
        </Row>
        <br/>
        <hr/>
        <div className='text-area'>
        <Textarea w="80%"  rows={20} isReadOnly={true} value={text} h="auto" border="none" />
      </div>
    </Container>
  )
}

export default Home;