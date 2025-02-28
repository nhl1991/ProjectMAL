import InformationTitle from "./informationTitleComponent";


export default function InformationComponent(props: any) {

    const renderText = (name: string) => {
        if (name === 'aired')
            return `${props.start_date ? props.start_date+' ~ ' : ''}${props.end_date ? props.end_date : ''}`;
        else if (name === 'quater')
            return props.start_season && props.start_season.season && props.start_season.year ?
                <a className="p-1" href={`/season/${props.start_season.year}/${props.start_season.season}`}>
                    {props.start_season.year} {props.start_season.season.toUpperCase()}</a>
                : <a className="p-1"> - </a>;
        else if (name === 'broadcast')
            return `${props.day_of_the_week.toUpperCase()} ${props.start_time}`;
        else if (name === 'studios' && props.item.length != 0)
            return props.item.map((item: {id: number, name: string}, i:number) => {
                if(i === (props.item.length-1))
                        return item.name
                else
                    return item.name+', ';
                });
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