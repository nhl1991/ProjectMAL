import { props } from "@/app/lib/types";
import InformationTitle from "./informationTitleComponent";


export default function InformationComponent(props:props) {

    const renderText = (name: string) => {
        if (name === 'aired' && props.item instanceof Array)
            return `${props.item[0]} ~ ${props.item[1]}`;
        else if (name === 'quater')
            return props.item && props.item instanceof Array ?
                <a className="p-1" href={`/season/`}>
                    -</a>
                : <a className="p-1"> - </a>;
        else if (name === 'broadcast' && props.item instanceof Array)
            return `${props.item[0]} ${props.item[1]}`;
        else if (name === 'studios' && props.item instanceof Array)
            return `${props.item}`;
        else
            return `${props.item}`;
    }

    return (
        <>
            <div className="p-1 mx-2 lg:block flex">
                <p className="p-1 font-semibold">{props.name.toUpperCase()}</p>
                <InformationTitle>
                    {renderText(props.name)}{props.name === 'average playtime' ? ' min' : ''}
                </InformationTitle>
            </div>
        </>
    )

    // if (props.name === 'aired')
    //     return (
    //         <>
    //             <div className="p-1">
    //                 <p className="p-1 detail-information">{props.name.toUpperCase()}</p>
    //                 <p className="p-1 detail-information">{props.start_date} - {props.end_date}</p>
    //             </div>
    //         </>
    //         )
    // else if (props.name === 'quater')
    //     return (
    //         <>
    //             <div className="p-1">
    //                 <p className="p-1 detail-information">{props.name.toUpperCase()}</p>
    //                 <p className="p-1 detail-information">{props.start_season ? <a className="p-1" href={`/season/${props.start_season.year}/${props.start_season.season}`}>{props.start_season.year} / {props.start_season.season.toUpperCase()}</a> : <a className="p-1">Unknown</a>}</p>
    //             </div>
    //         </>

    //     )
    // else
    //     return (
    //     <>
    //         <div className="p-1">
    //             <p className="p-1 detail-information">{props.name.toUpperCase()}</p>
    //             <p className="p-1 detail-information">{props.item}</p>
    //         </div>

    //     </>
    // )
}