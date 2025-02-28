import AnimationNode from "@/app/ui/animationNode"

type recommendation = {
    
        node: {
          id: number,
          title: string,
          main_picture: {
            medium: string,
            large: string
          }
        },
        num_recommendations: number,
        mean?:number,
      
}

export default function RecommendationList({ recommendations } : Readonly<{
    recommendations: recommendation[]
}>) {


    return (
        <>
            <div className="w-full h-min block m-2 order-3">
                <h1 className="w-full text-center text-2xl p-2">Recommendations</h1>
                <div className="w-full h-min flex overflow-scroll p-2">
                    {
                        recommendations.map((item: recommendation, i: number) => {
                            return <AnimationNode key={i} node={item.node} />
                        })
                    }
                </div>
            </div>

        </>
    )
}