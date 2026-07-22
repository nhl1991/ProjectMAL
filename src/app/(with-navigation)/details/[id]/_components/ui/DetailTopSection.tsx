import DetailsContentWrapper from "@/components/details/ui/DetailsContentWrapper";
import { Genre, Picture } from "@/types/animation";
import PosterImage from "./PosterImage";
import DetailHero from "./DetailHero";
import DetailInfoGrid from "./DetailInfoGrid";
import Genres from "./Genres";

type DetailTopSectionData = {
  title: string;
  main_picture: Picture;
  alternative_titles: { en: string; ja: string };
  mean?: number;
  media_type?: string;
  num_episodes?: number;
  start_season?: { year: number; season: string };
  status?: string;
  studios?: { id: number; name: string }[];
  rating?: string;
  genres: Genre[];
};

export default function DetailTopSection({ data }: { data: DetailTopSectionData }) {
  return (
    <DetailsContentWrapper>
      <div className="flex flex-col md:flex-row gap-5">
        <div className="md:max-w-64 xl:max-w-72 w-full flex-shrink-0">
          <PosterImage title={data.title} main_picture={data.main_picture} />
        </div>
        <div className="flex-1 min-w-0 flex flex-col gap-y-3.5">
          <DetailHero
            title={data.title}
            alternative_titles={data.alternative_titles}
            mean={data.mean}
            media_type={data.media_type}
            num_episodes={data.num_episodes}
            start_season={data.start_season}
          />
          <DetailInfoGrid
            status={data.status}
            studios={data.studios}
            start_season={data.start_season}
            rating={data.rating}
          />
          <Genres genres={data.genres} />
        </div>
      </div>
    </DetailsContentWrapper>
  );
}
