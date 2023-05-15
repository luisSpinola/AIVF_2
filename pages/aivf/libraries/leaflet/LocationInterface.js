import dynamic from 'next/dynamic'
const Location = dynamic(() => import("./Location"), { ssr: false });

export default function LocationInterface({data, options, globalColors}){
    return (
        <Location data={data} options={options} globalColors={globalColors}/>
    )
} 