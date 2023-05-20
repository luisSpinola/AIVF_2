import Link from "@mui/material/Link";

export const example_one_numerical_1 = {
    header: {
        type:'one_numerical',
        id: ["Country"], 
        value: ["GW"],
        preferences: [{height: 250},{height: 250}]
    },
    data: [
        { 
            "Country": "China",
            "GW": 281.5
        },
        { 
            "Country": "USA",
            "GW": 127.0
        },
        { 
            "Country": "GE",
            "GW": 62.4
        },
        { 
            "Country": "India",
            "GW": 38.6
        },
        { 
            "Country": "Spain",
            "GW": 27.3
        },
        { 
            "Country": "UK",
            "GW": 24.2
        },
        { 
            "Country": "Brazil",
            "GW": 17.4
        },
    ]
};

export const example_n_numerical_1 = {
    header:{
        type: "n_numerical",
        id: ["id"],
        value: ["value1","value2","value3"],
        line: ["Performance (%)"],
        preferences: [{margin_right: 0},{margin_right: 0},{margin_right: 0}]
    },
    data: [ 
        { 
            "id": "Q1",
            "value1": 8000,
            "value2": 4000,
            "value3": 6000,
            "Performance (%)": 40
        },
        { 
            "id": "Q2",
            "value1": 5000,
            "value2": 7000,
            "value3": 9000,
            "Performance (%)": 60
        },
        { 
            "id": "Q3",
            "value1": 13000,
            "value2": 4000,
            "value3": 2000,
            "Performance (%)": 20
        },
        { 
            "id": "Q4",
            "value1": 7000,
            "value2": 6000,
            "value3": 1000,
            "Performance (%)": 80
        },
    ]
};

export const example_n_numerical_2 = {
    header:{
        type: "n_numerical",
        id: ["id"],
        value: ["value1","value2","value3"]
    },
    data: [ 
        { 
            "id": "Q1",
            "value1": 8000,
            "value2": 4000,
            "value3": 6000,
        },
        { 
            "id": "Q2",
            "value1": 5000,
            "value2": 7000,
            "value3": 9000,
        },
        { 
            "id": "Q3",
            "value1": 13000,
            "value2": 4000,
            "value3": 2000,
        },
        { 
            "id": "Q4",
            "value1": 7000,
            "value2": 6000,
            "value3": 1000,
        },
    ]
};

export const example_performance_1 = {
    header:{
        type:"performance",
        value:["Valor"],
        objective:["Meta"]
    },
    data:[
        {
            Valor: 4547,
            Meta:  12000,
        }
    ]
};
export const example_performance_2 = {
    header:{
        type:"performance",
        value:["Valor"],
        objective:["Meta"],
        expected: ["Esperado"]
    },
    data:[
        {
            Valor: 5547,
            Esperado: 7547,
            Meta:  15000
        }
    ]
};

export const example_timeseries_1 = 
{
    "header":{
        "type": "time_series",
        "id": ["date"],
        "value": ["value_name1","value_name2","value_name3"]
    },
    "data": [
        { 
            "date": new Date("05/05/2019"),
            "value_name1": 4000,
            "value_name2": 9000,
            "value_name3": 1000
        },
        { 
            "date": new Date("05/03/2019"),
            "value_name1": 2000,
            "value_name2": 8000,
            "value_name3": 6000
        },
        { 
            "date": new Date("05/06/2019"),
            "value_name1": 5000,
            "value_name2": 1000,
            "value_name3": 7000
        },
        { 
            "date": new Date("06/05/2019"),
            "value_name1": 4000,
            "value_name2": 9000,
            "value_name3": 1000
        },
        { 
            "date": new Date("06/08/2019"),
            "value_name1": 8000,
            "value_name2": 7000,
            "value_name3": 1000
        },
        { 
            "date": new Date("06/06/2019"),
            "value_name1": 5000,
            "value_name2": 1000,
            "value_name3": 7000
        },
        { 
            "date": new Date("07/08/2019"),
            "value_name1": 8000,
            "value_name2": 7000,
            "value_name3": 1000
        }
    ]
}

export const example_location = {
    header:{
        type: "geo_location",
        coords: ["coords"],
        info: ["nome"],
        view_port:{
            longitude: -9.125304,
            latitude: 38.993932,
            zoom: 8,
            pitch: 0,
            bearing: 0
        },
    },
    data: [{
        "nome": <div>
            <div>
                <strong>Some Name</strong>
            </div>
            <div style={{cursor:'pointer'}}>
                <Link underline="hover" onClick={() => {window.open("", '_blank')}}>45268</Link>
            </div>
        </div>,
        "coords": [38.993932, -9.125304],
    },
    {
        "nome": <div>
            <div>
                <strong>Some Name 2</strong>
            </div>
            <div style={{cursor:'pointer'}}>
                <Link underline="hover" onClick={() => {window.open("", '_blank')}}>45268</Link>
            </div>
        </div>,
        "coords": [41.234517,-8.524543],
    }]
}

export const example_path = {
    header:{
        type: "geo_path",
        routes: ["Rota Planeada", "Rota Completada"],
        state: ["Brigadas"], 
        icon_blue: "Entidade", icon_green: "Entidade Inspecionada", icon_gray: "Partida/Chegada",
        vehicle_green: "", vehicle_gray: "", 
        view_port:{
            longitude: -9.125304,
            latitude: 38.993932,
            zoom: 8,
            pitch: 0,
            bearing: 0
        },
    },
    routes: {
        "Rota Planeada":[
            {
                "id": 1,
                "info": <div>Rota 1_1</div>,
                "path": [[38.993932, -9.125304], [41.234517, -8.524543]],
            },
            {
                "id": 2,
                "info": <div>Rota 2_1</div>,
                "path": [[39.993932, -9.125304], [41.234517, -8.524543]],
            },
        ],
        "Rota Completada":[
            {
                "id": 1,
                "info": <div>Rota 1_2</div>,
                "path": [[38.367942, -8.529224], [38.646182, -7.828029]],
            }
        ]
    },
    icon_blue: [
        {
            "id": 1,
            "order": 1,
            "info": <div>Icon 1_1</div>,
            "coords": [38.993932, -9.125304]
        },
        {
            "id": 1,
            "order": 3,
            "info": <div>Icon 1_3</div>,
            "coords": [41.234517, -8.524543]
        }
    ],
    icon_gray: [
        {
            "id": 1,
            "order": "Partida",
            "info": <div>Icon 1_0</div>,
            "coords": [38.893932, -9.125304]
        },
    ],
    icon_green: [
        {
            "id": 1,
            "order": 1,
            "info": <div>Icon Completed 1_1</div>,
            "coords": [38.993932, -9.125304]
        },
    ],

    vehicle_green: [
        {
            "id": 1,
            "info": <div>Car_1</div>,
            "coordsF": [38.993932, -9.125304],
            "coordsI": [38.993932, -9.125304],
        }
    ]
}