import { Button, Col, Container, Input, Row } from 'reactstrap'
import { Person } from '../classes/Person'

const person = new Person()

console.log(person.Fio)

const Index = () => {
  return (
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

          {/* <div style={{ display: 'flex' }}>
            <p className="mr-3" >Имя</p>
            <Input style={{ height: 30 }}>123</Input>
          </div> */}
          <Row className="mb-3">
            <Col className="d-flex align-items-center justify-content-between">
              <p style={{ fontSize: 15 }} className="mr-3 m-0">
                Имя
              </p>
              <Input style={{ height: 30, width: 200 }} />
            </Col>
            <Col className="d-flex align-items-center">
              <Button
                color="primary"
                style={{ height: 30, width: '100%', padding: 0 }}
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
              <Input style={{ height: 30, width: 200 }} />
            </Col>
            <Col className="d-flex align-items-center justify-content-between">
              <p style={{ fontSize: 15 }} className="mr-3 m-0">
                Зарплата
              </p>
              <Input style={{ height: 30, width: 200 }} />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col className="d-flex align-items-center justify-content-between">
              <p style={{ fontSize: 15 }} className="mr-3 m-0">
                Стаж
              </p>
              <Input style={{ height: 30, width: 200 }} />
            </Col>
            <Col className="d-flex align-items-center justify-content-between"></Col>
          </Row>
          <Row className="mb-3">
            <Col className="d-flex align-items-center justify-content-between">
              <p style={{ fontSize: 15 }} className="mr-3 m-0">
                Оклад
              </p>
              <Input style={{ height: 30, width: 200 }} />
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
                    Оклад
                  </p>
                  <Input style={{ height: 30, width: 200 }} />
                </Col>
              </Row>
              <Row className="mb-3">
                <Col className="d-flex align-items-center justify-content-between">
                  <p style={{ fontSize: 15 }} className="mr-3 m-0">
                    Фамилия
                  </p>
                  <Input style={{ height: 30, width: 200 }} />
                </Col>
              </Row>
              <Row className="mb-3">
                <Col className="d-flex align-items-center justify-content-between">
                  <p style={{ fontSize: 15 }} className="mr-3 m-0">
                    Стаж
                  </p>
                  <Input style={{ height: 30, width: 200 }} />
                </Col>
              </Row>
              <Row className="mb-3">
                <Col className="d-flex align-items-center justify-content-between">
                  <p style={{ fontSize: 15 }} className="mr-3 m-0">
                    Оклад
                  </p>
                  <Input style={{ height: 30, width: 200 }} />
                </Col>
              </Row>
              <Row className="mb-3">
                <Col className="d-flex align-items-center justify-content-between">
                  <Button
                    style={{ height: 30 }}
                    className="d-block p-0 w-100"
                    color="primary"
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
              <textarea className="form-control d-block m-0 p-0"></textarea>
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
  )
}

export default Index
