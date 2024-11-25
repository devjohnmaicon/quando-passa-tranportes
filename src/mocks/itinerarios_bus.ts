export const itinerarios_micro_bus = [
    {linha: "L.1", rota: "CIRCULAR CEU AZUL - CRUZEIRO DO SUL / CHACARAS ANHANGUERA A,B,C / VALPARAISO 1 E 2 / ETAPA E"},
    {linha: "L.18", rota: "CIDADE JARDINS/ VARANDAS / ESPLANADA 1 E 2 / IPIRANGA A "},
]

export const itinerarios_bus = [
    {
        linha: "5001",
        rota: "CEU AZUL / ROD.P.PILOTO / PARKSHOPPING",
        horarios: {
            normal: {
                ida: [
                    "05:00",
                    "07:30",
                    "07:45",
                    "08:00",
                    "08:20",
                    "08:40",
                    "09:00",
                    "09:30",
                    "10:00",
                    "10:30",
                    "11:00",
                    "11:30",
                    "12:00",
                    "12:20",
                    "13:00",
                    "13:30",
                    "14:00",
                    "14:30",
                    "15:00",
                    "15:30",
                    "16:00",
                    "16:30",
                    "18:00",
                    "18:30",
                    "19:00",
                    "19:20",
                    "20:00",
                    "20:20",
                    "20:40",
                    "21:00",
                    "22:00",
                ],
                volta: [
                    "00:40",
                    "07:00",
                    "08:00",
                    "08:30",
                    "09:00",
                    "09:30",
                    "10:00",
                    "10:20",
                    "10:40",
                    "11:00",
                    "11:30",
                    "12:30",
                    "13:00",
                    "13:30",
                    "14:00",
                    "14:30",
                    "14:45",
                    "15:00",
                    "15:15",
                    "15:30",
                    "15:40",
                    "15:50",
                    "16:00",
                    "16:10",
                    "19:00",
                    "19:15",
                    "19:45",
                    "20:30",
                    "21:30",
                    "22:10",
                    "22:30",
                    "23:00",
                    "23:40",
                ],
            },
            sabado: {
                ida: [
                    "06:20",
                    "07:00",
                    "07:15",
                    "07:30",
                    "07:45",
                    "08:00",
                    "08:20",
                    "08:40",
                    "09:00",
                    "09:30",
                    "10:00",
                    "10:30",
                    "11:00",
                    "11:30",
                    "12:00",
                    "12:30",
                    "13:00",
                    "13:30",
                    "14:00",
                    "14:30",
                    "15:00",
                    "15:30",
                    "16:00",
                    "16:30",
                    "17:00",
                    "18:00",
                    "18:30",
                    "19:00",
                    "19:30",
                    "20:00",
                    "21:00",
                    "22:00",
                ],
                volta: [
                    "00:30",
                    "07:00",
                    "07:30",
                    "08:00",
                    "08:30",
                    "09:00",
                    "09:20",
                    "09:40",
                    "10:00",
                    "10:30",
                    "11:00",
                    "11:30",
                    "12:00",
                    "12:20",
                    "12:40",
                    "13:00",
                    "13:30",
                    "14:00",
                    "14:30",
                    "15:00",
                    "15:20",
                    "15:40",
                    "16:00",
                    "16:20",
                    "17:00",
                    "17:20",
                    "18:00",
                    "18:20",
                    "18:40",
                    "19:00",
                    "19:20",
                    "19:40",
                    "20:00",
                    "20:30",
                    "21:20",
                    "22:00",
                    "22:20",
                    "22:40",
                    "23:00",
                    "23:40",
                ],
            },
            domingo: {
                ida: [
                    "05:20",
                    "07:00",
                    "07:30",
                    "08:00",
                    "08:30",
                    "09:00",
                    "09:30",
                    "10:00",
                    "10:30",
                    "11:00",
                    "11:30",
                    "12:00",
                    "12:30",
                    "13:00",
                    "13:30",
                    "14:00",
                    "14:30",
                    "15:00",
                    "15:30",
                    "16:00",
                    "16:30",
                    "17:00",
                    "17:30",
                    "18:00",
                    "18:30",
                    "19:00",
                    "20:00",
                    "21:00",
                    "21:30",
                ],
                volta: [
                    "00:10",
                    "07:00",
                    "07:15",
                    "07:30",
                    "08:00",
                    "08:30",
                    "09:00",
                    "09:30",
                    "10:00",
                    "10:30",
                    "11:00",
                    "11:30",
                    "12:00",
                    "12:30",
                    "13:00",
                    "13:30",
                    "14:00",
                    "14:30",
                    "15:00",
                    "15:30",
                    "16:00",
                    "16:30",
                    "17:00",
                    "18:00",
                    "18:30",
                    "19:00",
                    "19:30",
                    "20:00",
                    "20:30",
                    "21:30",
                    "22:20",
                    "23:00",
                ],
            },
        },
    },
    {
        linha: "5001E",
        rota: "CEU AZUL / ROD.P.PILOTO / PARKSHOPPING",
        horarios: {
            normal: {
                ida: ["06:40", "07:15"],
                volta: ["16:30", "16:50", "17:00", "18:00", "18:10", "18:20"],
            },
            sabado: {
                ida: [],
                volta: [],
            },
            domingo: {
                ida: [],
                volta: [],
            },
        },
    },
    {
        linha: "5002",
        rota: "CEU AZUL / ROD.P.PILOTO",
        horarios: {
            normal: {
                ida: ["04:10", "07:00", "12:40", "17:20", "17:40", "21:30", "23:30"],
                volta: ["06:00", "06:30", "17:50"],
            },
            sabado: {
                ida: ["04:40", "05:20", "06:00", "17:30", "20:30", "21:30", "23:10"],
                volta: ["06:00", "06:30"],
            },
            domingo: {
                ida: ["04:40", "05:00", "06:00", "22:20"],
                volta: ["06:00", "06:30"],
            },
        },
    },
    {
        linha: "5002E",
        rota: "CEU AZUL / ROD.P.PILOTO",
        horarios: {
            normal: {
                ida: ["05:20", "06:00", "06:24"],
                volta: ["17:10", "17:30", "18:40"],
            },
            sabado: {
                ida: [],
                volta: [],
            },
            domingo: {
                ida: [],
                volta: [],
            },
        },
    },
    {
        linha: "5003",
        rota: "CEU AZUL / EIXO SUL / NORTE",
        horarios: {
            normal: {
                ida: [
                    "05:00",
                    "07:30",
                    "07:45",
                    "08:00",
                    "08:20",
                    "08:40",
                    "09:00",
                    "09:30",
                    "10:00",
                    "10:30",
                    "11:00",
                    "11:30",
                    "12:00",
                    "12:20",
                    "13:00",
                    "13:30",
                    "14:00",
                    "14:30",
                    "15:00",
                    "15:30",
                    "16:00",
                    "16:30",
                    "18:00",
                    "18:30",
                    "19:00",
                    "19:20",
                    "20:00",
                    "20:20",
                    "20:40",
                    "21:00",
                    "22:00",
                ],
                volta: [
                    "00:40",
                    "07:00",
                    "08:00",
                    "08:30",
                    "09:00",
                    "09:30",
                    "10:00",
                    "10:20",
                    "10:40",
                    "11:00",
                    "11:30",
                    "12:30",
                    "13:00",
                    "13:30",
                    "14:00",
                    "14:30",
                    "14:45",
                    "15:00",
                    "15:15",
                    "15:30",
                    "15:40",
                    "15:50",
                    "16:00",
                    "16:10",
                    "19:00",
                    "19:15",
                    "19:45",
                    "20:30",
                    "21:30",
                    "22:10",
                    "22:30",
                    "23:00",
                    "23:40",
                ],
            },
            sabado: {
                ida: [
                    "06:20",
                    "07:00",
                    "07:15",
                    "07:30",
                    "07:45",
                    "08:00",
                    "08:20",
                    "08:40",
                    "09:00",
                    "09:30",
                    "10:00",
                    "10:30",
                    "11:00",
                    "11:30",
                    "12:00",
                    "12:30",
                    "13:00",
                    "13:30",
                    "14:00",
                    "14:30",
                    "15:00",
                    "15:30",
                    "16:00",
                    "16:30",
                    "17:00",
                    "18:00",
                    "18:30",
                    "19:00",
                    "19:30",
                    "20:00",
                    "21:00",
                    "22:00",
                ],
                volta: [
                    "00:30",
                    "07:00",
                    "07:30",
                    "08:00",
                    "08:30",
                    "09:00",
                    "09:20",
                    "09:40",
                    "10:00",
                    "10:30",
                    "11:00",
                    "11:30",
                    "12:00",
                    "12:20",
                    "12:40",
                    "13:00",
                    "13:30",
                    "14:00",
                    "14:30",
                    "15:00",
                    "15:20",
                    "15:40",
                    "16:00",
                    "16:20",
                    "17:00",
                    "17:20",
                    "18:00",
                    "18:20",
                    "18:40",
                    "19:00",
                    "19:20",
                    "19:40",
                    "20:00",
                    "20:30",
                    "21:20",
                    "22:00",
                    "22:20",
                    "22:40",
                    "23:00",
                    "23:40",
                ],
            },
            domingo: {
                ida: [
                    "05:20",
                    "07:00",
                    "07:30",
                    "08:00",
                    "08:30",
                    "09:00",
                    "09:30",
                    "10:00",
                    "10:30",
                    "11:00",
                    "11:30",
                    "12:00",
                    "12:30",
                    "13:00",
                    "13:30",
                    "14:00",
                    "14:30",
                    "15:00",
                    "15:30",
                    "16:00",
                    "16:30",
                    "17:00",
                    "17:30",
                    "18:00",
                    "18:30",
                    "19:00",
                    "20:00",
                    "21:00",
                    "21:30",
                ],
                volta: [
                    "00:10",
                    "07:00",
                    "07:15",
                    "07:30",
                    "08:00",
                    "08:30",
                    "09:00",
                    "09:30",
                    "10:00",
                    "10:30",
                    "11:00",
                    "11:30",
                    "12:00",
                    "12:30",
                    "13:00",
                    "13:30",
                    "14:00",
                    "14:30",
                    "15:00",
                    "15:30",
                    "16:00",
                    "16:30",
                    "17:00",
                    "18:00",
                    "18:30",
                    "19:00",
                    "19:30",
                    "20:00",
                    "20:30",
                    "21:30",
                    "22:20",
                    "23:00",
                ],
            },
        },
    },
    {
        linha: "5003.1",
        rota: "PACAEMBU / EIXO SUL E NORTE",
        horarios: {
            normal: {
                ida: [
                    "05:00",
                    "07:30",
                    "07:45",
                    "08:00",
                    "08:20",
                    "08:40",
                    "09:00",
                    "09:30",
                    "10:00",
                    "10:30",
                    "11:00",
                    "11:30",
                    "12:00",
                    "12:20",
                    "13:00",
                    "13:30",
                    "14:00",
                    "14:30",
                    "15:00",
                    "15:30",
                    "16:00",
                    "16:30",
                    "18:00",
                    "18:30",
                    "19:00",
                    "19:20",
                    "20:00",
                    "20:20",
                    "20:40",
                    "21:00",
                    "22:00",
                ],
                volta: [
                    "00:40",
                    "07:00",
                    "08:00",
                    "08:30",
                    "09:00",
                    "09:30",
                    "10:00",
                    "10:20",
                    "10:40",
                    "11:00",
                    "11:30",
                    "12:30",
                    "13:00",
                    "13:30",
                    "14:00",
                    "14:30",
                    "14:45",
                    "15:00",
                    "15:15",
                    "15:30",
                    "15:40",
                    "15:50",
                    "16:00",
                    "16:10",
                    "19:00",
                    "19:15",
                    "19:45",
                    "20:30",
                    "21:30",
                    "22:10",
                    "22:30",
                    "23:00",
                    "23:40",
                ],
            },
            sabado: {
                ida: [
                    "06:20",
                    "07:00",
                    "07:15",
                    "07:30",
                    "07:45",
                    "08:00",
                    "08:20",
                    "08:40",
                    "09:00",
                    "09:30",
                    "10:00",
                    "10:30",
                    "11:00",
                    "11:30",
                    "12:00",
                    "12:30",
                    "13:00",
                    "13:30",
                    "14:00",
                    "14:30",
                    "15:00",
                    "15:30",
                    "16:00",
                    "16:30",
                    "17:00",
                    "18:00",
                    "18:30",
                    "19:00",
                    "19:30",
                    "20:00",
                    "21:00",
                    "22:00",
                ],
                volta: [
                    "00:30",
                    "07:00",
                    "07:30",
                    "08:00",
                    "08:30",
                    "09:00",
                    "09:20",
                    "09:40",
                    "10:00",
                    "10:30",
                    "11:00",
                    "11:30",
                    "12:00",
                    "12:20",
                    "12:40",
                    "13:00",
                    "13:30",
                    "14:00",
                    "14:30",
                    "15:00",
                    "15:20",
                    "15:40",
                    "16:00",
                    "16:20",
                    "17:00",
                    "17:20",
                    "18:00",
                    "18:20",
                    "18:40",
                    "19:00",
                    "19:20",
                    "19:40",
                    "20:00",
                    "20:30",
                    "21:20",
                    "22:00",
                    "22:20",
                    "22:40",
                    "23:00",
                    "23:40",
                ],
            },
            domingo: {
                ida: [
                    "05:20",
                    "07:00",
                    "07:30",
                    "08:00",
                    "08:30",
                    "09:00",
                    "09:30",
                    "10:00",
                    "10:30",
                    "11:00",
                    "11:30",
                    "12:00",
                    "12:30",
                    "13:00",
                    "13:30",
                    "14:00",
                    "14:30",
                    "15:00",
                    "15:30",
                    "16:00",
                    "16:30",
                    "17:00",
                    "17:30",
                    "18:00",
                    "18:30",
                    "19:00",
                    "20:00",
                    "21:00",
                    "21:30",
                ],
                volta: [
                    "00:10",
                    "07:00",
                    "07:15",
                    "07:30",
                    "08:00",
                    "08:30",
                    "09:00",
                    "09:30",
                    "10:00",
                    "10:30",
                    "11:00",
                    "11:30",
                    "12:00",
                    "12:30",
                    "13:00",
                    "13:30",
                    "14:00",
                    "14:30",
                    "15:00",
                    "15:30",
                    "16:00",
                    "16:30",
                    "17:00",
                    "18:00",
                    "18:30",
                    "19:00",
                    "19:30",
                    "20:00",
                    "20:30",
                    "21:30",
                    "22:20",
                    "23:00",
                ],
            },
        },
    },
    {
        linha: "5004E",
        rota: "PACAEMBU / ROD.PLANO PILOTO",
        horarios: {
            normal: {
                ida: ["17:20", "18:30"],
                volta: [],
            },
            sabado: {
                ida: [],
                volta: [],
            },
            domingo: {
                ida: [],
                volta: [],
            },
        },
    },
    {
        linha: "5005",
        rota: "CEU AZUL / ROD.P. PILOTO/ ST DE CHACARA",
        horarios: {
            normal: {
                ida: ["04:40", "05:10", "11:50"],
                volta: ["13:20", "17:40"],
            },
            sabado: {
                ida: ["05:10"],
                volta: [],
            },
            domingo: {
                ida: [],
                volta: [],
            },
        },
    },
];