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
}

export const example_n_numerical_1 = {
    header:{
        type: "n_numerical",
        id: ["id"],
        value: ["value1","value2","value3"],
        line: ["Performance (%)"],
    },
    data: [ 
        { 
            "id": "Valor 1",
            "value1": 8000,
            "value2": 4000,
            "value3": 6000,
            "Performance (%)": 40
        },
        { 
            "id": "Valor 2",
            "value1": 5000,
            "value2": 7000,
            "value3": 9000,
            "Performance (%)": 60
        },
        { 
            "id": "Valor 3",
            "value1": 13000,
            "value2": 4000,
            "value3": 2000,
            "Performance (%)": 20
        },
        { 
            "id": "Valor 4",
            "value1": 7000,
            "value2": 6000,
            "value3": 1000,
            "Performance (%)": 80
        },
    ]
};