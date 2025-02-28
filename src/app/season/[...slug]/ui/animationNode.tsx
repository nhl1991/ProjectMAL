import Image from "next/image"


export default function AnimationNode({node} : Readonly<{node: node}>){


    return(
        <div className="w-72 m-4">
            <div className="w-64 flex-shrink-0 flex h-80 overflow-hidden p-2 border-2 border-white">
                <Image className="flex-shrink-0 rounded" src={node.main_picture.large} width={480} height={640} alt={node.main_picture.medium} />
            </div>
            <p>{node.title}</p>
        </div>
    )

}