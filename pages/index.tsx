import { useState } from 'react'

import { Button, Col, Container, Input, Row } from 'reactstrap'
import { Person } from '../classes/Person'
import { Manager } from '../classes/Manager'

import { ISalSum } from '../classes/ISalSum'

import { Event } from '../classes/Event'

import Modal from 'react-modal'
import ModalInfo from '../components/ModalInfo'
import { Seller } from '../classes/Seller'

const mngr: Manager = new Manager()
Manager.f = false

const AddAssistant = new Event()

const section = []
let input10Text = ''

const Index = () => {
  const [modal, setModal] = useState({ show: false, text: '' })
  const [input1, setInput1] = useState('')
  const [input2, setInput2] = useState('')
  const [input3, setInput3] = useState('')
  const [input4, setInput4] = useState('')
  const [input5, setInput5] = useState('')
  const [input6, setInput6] = useState('')
  const [input7, setInput7] = useState('')
  const [input8, setInput8] = useState('')
  const [input9, setInput9] = useState('')
  const [input10, setInput10] = useState('')

  return (
    <>
      <ModalInfo
        isOpen={modal.show}
        text={modal.text}
        close={() => {
          setModal({ show: false, text: '' })
        }}
      ></ModalInfo>
      <div
        style={{
          width: '100%',
          height: '100vh',
          background: 'url("/images/background.png") no-repeat center red',
          backgroundSize: 'cover',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            width: 650,
            height: 550,
            boxShadow: 'inset 0 0 15px rgba(0, 0, 0, 0.233)',
            borderRadius: '5px',
            background: '#ffffff',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div style={{ width: '95%', height: '95%' }}>
            <p>Класс менеджер :</p>
            <Row className="mb-3">
              <Col className="d-flex align-items-center justify-content-between">
                <p style={{ fontSize: 15 }} className="mr-3 m-0">
                  Имя
                </p>
                <Input
                  onChange={(e) => {
                    setInput1(e.target.value)
                  }}
                  value={input1}
                  style={{ height: 30, width: 200 }}
                />
              </Col>
              <Col className="d-flex align-items-center">
                <Button
                  color="primary"
                  style={{ height: 30, width: '100%', padding: 0 }}
                  onClick={() => {
                    if (!Manager.f) {
                      Manager.f = true
                      mngr.Name = input1
                      mngr.Fio = input2
                      mngr.Experience = Number(input3)
                      mngr.Salary = Number(input4)
                      mngr.Subordinate = section.length

                      console.log(mngr.Name)
                      console.log(mngr.Fio)
                      console.log(mngr.Experience)
                      console.log(mngr.Salary)
                      console.log(mngr.Subordinate)

                      const iss: ISalSum = mngr
                      mngr.Salarysum = iss.CalcSum()
                      console.log(mngr.Salarysum)
                      setInput5(mngr.Salarysum.toString())
                    } else {
                      setModal({
                        show: true,
                        text: 'В отделе может быть только однн управляющий',
                      })
                    }
                  }}
                >
                  Создать
                </Button>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col className="d-flex align-items-center justify-content-between">
                <p style={{ fontSize: 15 }} className="mr-3 m-0">
                  Фамилия
                </p>
                <Input
                  onChange={(e) => {
                    setInput2(e.target.value)
                  }}
                  value={input2}
                  style={{ height: 30, width: 200 }}
                />
              </Col>
              <Col className="d-flex align-items-center justify-content-between">
                <p style={{ fontSize: 15 }} className="mr-3 m-0">
                  Зарплата
                </p>
                <Input
                  onChange={(e) => {
                    setInput3(e.target.value)
                  }}
                  value={input3}
                  style={{ height: 30, width: 200 }}
                />
              </Col>
            </Row>
            <Row className="mb-3">
              <Col className="d-flex align-items-center justify-content-between">
                <p style={{ fontSize: 15 }} className="mr-3 m-0">
                  Стаж
                </p>
                <Input
                  onChange={(e) => {
                    setInput4(e.target.value)
                  }}
                  value={input4}
                  style={{ height: 30, width: 200 }}
                />
              </Col>
              <Col className="d-flex align-items-center justify-content-between"></Col>
            </Row>
            <Row className="mb-3">
              <Col className="d-flex align-items-center justify-content-between">
                <p style={{ fontSize: 15 }} className="mr-3 m-0">
                  Оклад
                </p>
                <Input
                  onChange={(e) => {
                    setInput5(e.target.value)
                  }}
                  value={input5}
                  style={{ height: 30, width: 200 }}
                />
              </Col>
              <Col className="d-flex align-items-center justify-content-between"></Col>
            </Row>
            <p>Класс Продавец :</p>
            <div style={{ display: 'flex' }}>
              <div style={{ width: '100%' }}>
                {/* <div className="d-flex align-items-center justify-content-between mr-3"> */}
                <Row className="mb-3">
                  <Col className="d-flex align-items-center justify-content-between">
                    <p style={{ fontSize: 15 }} className="mr-3 m-0">
                      Имя
                    </p>
                    <Input
                      onChange={(e) => {
                        setInput6(e.target.value)
                      }}
                      value={input6}
                      style={{ height: 30, width: 200 }}
                    />
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col className="d-flex align-items-center justify-content-between">
                    <p style={{ fontSize: 15 }} className="mr-3 m-0">
                      Фамилия
                    </p>
                    <Input
                      onChange={(e) => {
                        setInput7(e.target.value)
                      }}
                      value={input7}
                      style={{ height: 30, width: 200 }}
                    />
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col className="d-flex align-items-center justify-content-between">
                    <p style={{ fontSize: 15 }} className="mr-3 m-0">
                      Стаж
                    </p>
                    <Input
                      onChange={(e) => {
                        setInput8(e.target.value)
                      }}
                      value={input8}
                      style={{ height: 30, width: 200 }}
                    />
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col className="d-flex align-items-center justify-content-between">
                    <p style={{ fontSize: 15 }} className="mr-3 m-0">
                      Оклад
                    </p>
                    <Input
                      onChange={(e) => {
                        setInput9(e.target.value)
                      }}
                      value={input9}
                      style={{ height: 30, width: 200 }}
                    />
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col className="d-flex align-items-center justify-content-between">
                    <Button
                      style={{ height: 30 }}
                      className="d-block p-0 w-100"
                      color="primary"
                      onClick={() => {
                        if (Manager.f) {
                          const ass: Seller = new Seller()
                          mngr.Subordinate = section.length + 1

                          console.log(mngr)

                          ass.Name = input6
                          ass.Fio = input7
                          ass.Experience = Number(input8)
                          ass.Salary = Number(input9)

                          console.log(ass.Name)
                          console.log(ass.Fio)
                          console.log(ass.Experience)
                          console.log(ass.Salary)

                          mngr.DoEvent()
                          mngr.Salarysum.toString()

                          // ass.AddSeller.add(mngr.DoEvent)
                          // ass.AddSeller.add(() => {
                          //   setInput5(mngr.Salarysum.toString())
                          // })

                          ass.AddSeller.execute()

                          const iss: ISalSum = ass
                          ass.Salarysum = iss.CalcSum()
                          section.push(ass)

                          input10Text +=
                            ass.Name +
                            ' ' +
                            ass.Fio +
                            ' ' +
                            ass.Salary.toString() +
                            ' ' +
                            ass.Experience +
                            ' ' +
                            ass.Salarysum.toString() +
                            '\n'
                          setInput10(input10Text)
                        } else {
                          setModal({
                            show: true,
                            text:
                              'Предварительно следует ввести информацию о менеджере',
                          })
                        }
                      }}
                    >
                      Создать
                    </Button>
                  </Col>
                </Row>
              </div>
              <div
                className="ml-4"
                style={{
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <p className="mb-2" style={{ fontSize: 15 }}>
                  Список продавцов
                </p>
                <textarea
                  value={input10}
                  className="form-control d-block m-0 p-0"
                ></textarea>
                <Button
                  style={{ height: 30 }}
                  className="d-block p-0 mt-3 w-100"
                  color="primary"
                >
                  Обновить
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Index
