import "./App.css";
import {Badge, Breadcrumb, Col, Navbar, Row, Tab, Tabs,} from "react-bootstrap";
import {itinerarios_bus, itinerarios_micro_bus} from "./mocks/itinerarios_bus.ts";
import {BrowserRouter as Router, Route, Routes, useNavigate, useParams} from "react-router-dom";

const linhasFundoVerde = ["E"];

function App() {
    return (
        <>
            <Router>
                <HeaderComponent/>
                <Routes>
                    <Route path="/" element={<PageHome/>}/>
                    <Route path="/linha/:id" element={<PageLinha/>}/>
                </Routes>

            </Router>
        </>
    );
}

function HeaderComponent() {
    return (
        <header>
            <Navbar className="bg-body-tertiary px-4">
                <Navbar.Brand href="/">
                    <div className="d-flex align-items-center">
                        <div className="w-10 d-flex justify-content-center">
                            <img src="src/assets/WhatsApp Image 2024-11-25 at 13.29.34(1).svg" alt="" height={85}/>
                        </div>
                        - Passa Quando (Valparaíso)
                    </div>
                </Navbar.Brand>
            </Navbar>

            <div className="p-4 bg-success">
                <span className="fs-3 fw-bold text-light">Horários</span>
            </div>
        </header>
    )
}

type PropCard = {
    linha: string;
    rota: string;
    background?: string;
};

function CardLineComponent({linha, rota}: PropCard) {
    return (
        <div className={`h-100 border-top border-2 p-2`}>
            <div className='d-flex gap-1'>
                <div className="fw-bold">Linha - {linha}</div> -
                <span className='bg-warning-subtle px-1 rounded'>A cada 30 minutos</span>
            </div>

            <div className="fs-7">{rota}</div>
        </div>
    );
}

function CardComponent({linha, rota, background}: PropCard) {
    const navigate = useNavigate();
    const redirectForLinha = (linha) => {
        navigate(`/linha/${linha}`);
        console.log(`/linha${linha}`)
    }
    return (
        <div className={`h-100 border p-2 rounded ${background} cursor-active`} onClick={() => redirectForLinha(linha)}>
            <div className="fw-bold">Linha - {linha}</div>
            <div className="fs-7">{rota}</div>
        </div>
    );
}

function PageHome() {
    return (
        <section className='py-2'>
            <div className="py-2 px-4">
                <Breadcrumb>
                    <Breadcrumb.Item href="#">Horários</Breadcrumb.Item>
                    <Breadcrumb.Item
                        active
                    >
                        Valparaíso de Goiás
                    </Breadcrumb.Item>
                </Breadcrumb>
            </div>

            <div className="px-4 pb-4">
                <div>
                    <span className="bg-green px-1">Fundo Verde</span> - Via BRT
                </div>
                <div>
                    <span className=" px-1">Fundo Amarelo</span> - Ônibus
                    Rodoviário
                </div>
            </div>

            <section className="d-flex flex-column gap-1 border rounded py-3 px-2 mx-2 mb-3">
                <div>
                    <h2 className="text-center">Micro-ônibus</h2>
                </div>

                <Row className="custom-row">
                    {itinerarios_micro_bus.map((l, index) => (
                        <Col xs={12} sm={12} key={index}>
                            <CardLineComponent linha={l.linha} rota={l.rota}/>
                        </Col>
                    ))}
                </Row>
            </section>

            <section className="d-flex  flex-column gap-1 border rounded py-3 px-2 mx-2">
                <div>
                    <h2 className="text-center">Ônibus</h2>
                </div>

                <Row className="custom-row">
                    {itinerarios_bus.map((l, index) => (
                        <Col xs={12} sm={4} key={index}>
                            <CardComponent
                                linha={l.linha}
                                rota={l.rota}
                                background={l.linha.match(linhasFundoVerde) ? "bg-green" : ""}
                            />
                        </Col>
                    ))}
                </Row>
            </section>
        </section>
    )
}

function PageLinha() {
    const {id} = useParams();

    const line = itinerarios_bus.find((l) => l.linha == id)

    return (
        <section>
            <div className="py-2 px-4">
                <Breadcrumb>
                    <Breadcrumb.Item href="/">Linhas</Breadcrumb.Item>
                    <Breadcrumb.Item active>
                        Valparaíso de Goiás
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>
                        {line.linha} | {line.rota.replace("/", " - ")}
                    </Breadcrumb.Item>
                </Breadcrumb>
            </div>

            <div className="px-4">
                <Tabs
                    defaultActiveKey="normal"
                    id="uncontrolled-tab-example "
                    className="mb-3"
                    fill
                >
                    <Tab eventKey="normal" title="Dias Úteis">
                        <div>
                            <span>Ida</span>

                            <div className="d-flex flex-wrap gap-1 py-1">
                                {
                                    line.horarios.normal.ida.map(hora => <BadgeComponent hora={hora}/>)
                                }
                            </div>
                        </div>
                        <br/>
                        <div>
                            <span>Volta</span>
                            <div className="d-flex flex-wrap gap-1 py-1">
                                {
                                    line.horarios.normal.volta.map(hora => <BadgeComponent hora={hora}/>)
                                }
                            </div>
                        </div>
                    </Tab>
                    <Tab eventKey="sunday" title="Sábados">
                        <div>
                            <span>Ida</span>

                            <div className="d-flex flex-wrap gap-1 py-1">
                                {
                                    line.horarios.sabado.ida.map(hora => <BadgeComponent hora={hora}/>)
                                }
                            </div>
                        </div>
                        <br/>
                        <div>
                            <span>Volta</span>
                            <div className="d-flex flex-wrap gap-1 py-1">
                                {
                                    line.horarios.sabado.volta.map(hora => <BadgeComponent hora={hora}/>)
                                }
                            </div>
                        </div>
                    </Tab>
                    <Tab eventKey="mondey" title="Domingos e Feriados">
                        <div>
                            <span>Ida</span>
                            <div className="d-flex flex-wrap gap-1 py-1">
                                {
                                    itinerarios_bus.map(it =>
                                        it.horarios.domingo.ida.map(hora => <BadgeComponent hora={hora}/>))
                                }
                            </div>
                        </div>
                        <br/>
                        <div>
                            <span>Volta</span>
                            <div className="d-flex flex-wrap gap-1 py-1">
                                {
                                    itinerarios_bus.map(it =>
                                        it.horarios.domingo.volta.map(hora => <BadgeComponent hora={hora}/>))
                                }
                            </div>
                        </div>
                    </Tab>
                </Tabs>
            </div>
        </section>
    );
}

type propHora = {
    hora: string;
};

function BadgeComponent({
                            hora
                        }: propHora) {
    return (
        <Badge bg="light" text="dark">
            {hora}
        </Badge>
    );
}

export default App;
