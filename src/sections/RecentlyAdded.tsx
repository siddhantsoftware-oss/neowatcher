import { useQuery } from "react-query";
import { getAuth } from "../pages/root";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import { Blurhash } from "react-blurhash";
import { LoadingSpinner } from "../components/Loading";

export interface MediaType {
  Name: string;
  OriginalTitle: string;
  Id: string;
  PlaylistItemId: string;
  SortName: "string";
  SeriesId: string;
  SeriesName: string;
  OfficialRating: string;
  PremiereDate: Date;
  hasSubtitles: boolean;
  Type: string;
  BackdropImageTags: string[];
  ParentBackdropImageTags: string[];
  ImageBlurHashes: {
    Backdrop: {
      [key: string]: string;
    };
  };
  UserData: {
    UnplayedItemCount?: number;
    PlayedPercentage: number;
    PlaybackPositionTicks: number;
  };
  ParentIndexNumber: number;
  IndexNumber: number;
}

function RecentlyAdded() {
  const { data, isLoading } = useQuery("recently-added", () =>
    fetch(
      `${localStorage.getItem("address")}/Users/${localStorage.getItem(
        "userId"
      )}/Items/Latest?Limit=16&EnableImageTypes=Backdrop`,
      {
        headers: {
          Authorization: getAuth(localStorage.getItem("AccessToken") ?? ""),
        },
      }
    )
      .then((res) => res.json())
      .then((result) => result as MediaType[])
  );

  if (!data) {
    return <LoadingSpinner />;
  }

  return (
    <div className="flex md:my-10 my-2 flex-col  gap-y-3">
      <Marquee speed={40} pauseOnHover>
        {data?.map((media, idx) => {
          const backdropTag =
            media.BackdropImageTags?.length > 0
              ? media.BackdropImageTags[0]
              : media.ParentBackdropImageTags?.length > 0
              ? media?.ParentBackdropImageTags[0]
              : null;
          const hashblur = media.ImageBlurHashes?.Backdrop
            ? media.ImageBlurHashes.Backdrop[`${backdropTag}`]
            : "";

          return (
            <div
              key={idx}
              className="shrink-0 group/cover  relative transition overflow-clip mx-2 rounded-md"
            >
              <div className="absolute  top-0 left-0 h-full w-full transition group-hover/cover:bg-black/40 group-hover/cover:backdrop-blur-sm ">
                <div className="group-hover/cover:visible  h-full flex flex-col justify-between invisible transition p-5">
                  <div className="flex flex-col gap-y-5">
                    <div className="">
                      <img
                        id={media?.SeriesId ?? media.Id}
                        src={`${localStorage.getItem("address")}/Items/${
                          media?.SeriesId ?? media.Id
                        }/Images/Logo`}
                        className="w-[200px] h-fit "
                        alt={"Movie poster for " + media?.Name}
                        onError={() => {
                          const element = document.getElementById(
                            media?.SeriesId ?? media?.Id
                          );
                          element?.parentNode?.removeChild(element);
                        }}
                      />
                    </div>
                    <div className="flex gap-x-2 flex-wrap">
                      <div className="bg-background px-2 rounded-md font-bold  w-fit">
                        {media?.OfficialRating}
                      </div>
                      {media?.hasSubtitles ? (
                        <div className="bg-background px-2 rounded-md font-bold  w-fit">
                          Subtitles
                        </div>
                      ) : null}
                      <div className="bg-background px-2 rounded-md font-bold  w-fit">
                        {new Date(media?.PremiereDate).getFullYear()}
                      </div>
                    </div>
                  </div>
                  <Link
                    to={`/collection/media/${media.SeriesId ?? media.Id}`}
                    className="bg-white hover:bg-gray-300 hover:text-black/80 px-3 w-fit py-1 text-black text-lg font-semibold rounded-md transition"
                  >
                    View
                  </Link>
                </div>
              </div>{" "}
              {isLoading ? (
                <div className="h-full aspect-[16/9] md:max-h-[30vh] max-h-[20vh]absolute z-30 shrink-0  bg-accent animate-pulse  rounded-md"></div>
              ) : null}
              {hashblur.length > 0 ? (
                <div
                  id={hashblur}
                  className="absolute z-20 top-0 left-0 bg-black"
                >
                  <Blurhash hash={hashblur} className="h-full aspect-[16/9] md:max-h-[30vh] max-h-[20vh]" />
                </div>
              ) : null}
              <div>
                <img
                  className="h-full aspect-[16/9] md:max-h-[30vh] max-h-[20vh] "
                  src={`${localStorage.getItem("address")}/Items/${
                    media.SeriesId ? media.SeriesId : media.Id
                  }/Images/Backdrop`}
                  onLoad={() => {
                    const element = document.getElementById(hashblur);
                    element?.parentNode?.removeChild(element);
                  }}
                />
              </div>
            </div>
          );
        })}
      </Marquee>
    </div>
  );
}

export default RecentlyAdded;
