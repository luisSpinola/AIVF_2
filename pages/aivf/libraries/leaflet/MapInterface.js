import dynamic from 'next/dynamic';
const Location = dynamic(() => import("./Location"), { ssr: false });
const Routes = dynamic(() => import("./Routes"), { ssr: false });

export default function MapInterface({data, options, globalColors}){
    if(data.header.type === "geo_location")
        return (
            <Location data={data} options={options} globalColors={globalColors}/>
        )
    else return (
        <Routes data={data} options={options} globalColors={globalColors}/>
    )
} 